import React, { useState, useEffect } from "react";
import _ from "lodash";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import { Row, Col, Form, Modal, Button } from "react-bootstrap";
import ActivityTable from "./activityTable";
import Pagination from "../../common/pagination";
import { paginate } from "../../utils/paginate";
import "semantic-ui-css/semantic.min.css";
import SearchBar from "../../common/searchbar";
import NavBarMain from "../../components/NavbarMain";
import LeftMenusGeneral from "../../components/leftmenusgeneral";
import AddActivities from "./addactivity";
import httpservice from "../../services/httpservice";

export default function Activities() {
  //Getters and Setters
  //Initialize Projects
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [entryadded, setEntryadded] = useState("");
  const [projects, setProjects] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [input, setInput] = useState({
    activityno: "",
    activityname: "",
    activitydescription: "",
    project: "",
    department: "",
    startdate: "",
    enddate: "",
    specialnotes: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  const handleSubmit = (event) => {
    let form = event.currentTarget;
    event.preventDefault();
    console.log(input);

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const newActivity = {
        activityno: input.activityno,
        activityname: input.activityname,
        activitydescription: input.activitydescription,
        project: input.project,
        department: input.department,
        startdate: input.startdate,
        enddate: input.enddate,
        specialnotes: input.specialnotes,
      };
      axios.post("http://localhost:3001/createactivity", newActivity);
      setValidated(true);
      setEntryadded(
        "1 Activity added to the Project. Add Target to Activitiy, View Activities below or add more Activities"
      );
      setInput({
        activityno: "",
        activityname: "",
        activitydescription: "",
        project: "",
        department: "",
        startdate: "",
        enddate: "",
        specialnotes: "",
      });
    }
    setValidated(false);
  };

  //Initialize Sort Columns
  const [sortColumn, setsortColumn] = useState({
    path: "",
    order: "",
  });

  //Initialize Sorted, Paginated Projects, PageSize,Current Page

  const [pageSize, setpageSize] = useState(10);
  const [currentPage, setcurrentPage] = useState(1);

  function getcurrentUser() {
    try {
      const jwt = localStorage.getItem("token");
      const currentuser = jwtDecode(jwt);
      //console.log(currentuser);
      //setUser({ username: currentuser.name, admin: currentuser.admin });
      return currentuser;
    } catch (error) {}
  }

  const currentuser = getcurrentUser();

  //Load Data from the Server
  useEffect(() => {
    httpservice
      .get("/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          toast("Error Loading Projects Data");
        }
      });
  }, [projects]);

  //Load Departments Data from the Server
  useEffect(() => {
    httpservice
      .get("/departments")
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          toast("Error Loading Projects Data");
        }
      });
  }, [departments]);

  //Load Activities Data from the Server
  useEffect(() => {
    httpservice
      .get("/activities")
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          toast("Error Loading Activities Data");
        }
      });
  }, [activities]);

  ///getPaged Data Function

  function getPagedData() {
    const allActivities = activities;

    let filtered = allActivities;
    if (input)
      filtered = allActivities.filter((p) => {
        return Object.values(p)
          .join("")
          .toLowerCase()
          .includes(
            input.activityno.toLowerCase(),
            input.activityname.toLowerCase(),
            input.activitydescription.toLocaleLowerCase(),
            input.projectno.toLowerCase(),
            input.startdate.toLowerCase(),
            input.enddate.toLowerCase()
          );
      });

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const paginatedActivities = paginate(sorted, currentPage, pageSize);

    return {
      sorted,
      totalCount: filtered.length,
      aActivities: paginatedActivities,
    };
  }
  const { totalCount, aActivities } = getPagedData();

  const handleSort = (sortColumn) => {
    setsortColumn(sortColumn);
  };

  //Handle Paginate
  const handlePageChange = (page) => {
    setpageSize(10);
    setcurrentPage(page);
  };

  const {
    activityno,
    activityname,
    activitydescription,
    project,
    department,
    startdate,
    enddate,
    specialnotes,
  } = input;

  return (
    <div>
      <ToastContainer />
      <Row>
        <Row className="m-5">
          <NavBarMain currentuser={currentuser} />
        </Row>

        <Row className="mt-2">
          <Col md="3" className="listgroup p-3">
            <LeftMenusGeneral currentuser={currentuser} />
          </Col>
          <Col md="9">
            <div className="sectiondescription">
              <Row className="m-3">
                <h2>Activity Listings</h2>
                <h5 className="tabcontentdisplay">
                  A secure, just and prosperous County, where people achieve
                  their full potential and enjoy a high quality of life.
                </h5>
              </Row>
            </div>
            <Row className="m-3">
              <Col></Col>
              <Col md="2">
                Test
                <Modal
                  size="lg"
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                  dialogClassName="modal-90w"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Add Activity</Modal.Title>
                  </Modal.Header>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Modal.Body>
                      <AddActivities
                        handleChange={handleChange}
                        activityno={activityno}
                        activityname={activityname}
                        activitydescription={activitydescription}
                        startdate={startdate}
                        enddate={enddate}
                        handleChange={handleChange}
                        project={project}
                        department={department}
                        projects={projects}
                        departments={departments}
                        specialnotes={specialnotes}
                        entryadded={entryadded}
                      />
                    </Modal.Body>

                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button
                        type="submit"
                        variant="success"
                        onClick={handleClose}
                      >
                        Save
                      </Button>
                    </Modal.Footer>
                  </Form>
                </Modal>
              </Col>
            </Row>
            <Row className="m-3">
              <h4>
                {totalCount === 0
                  ? "No Activities in the Database"
                  : `Showing ${totalCount} Activities in the database.`}
              </h4>
              <ActivityTable
                activities={aActivities}
                onSort={handleSort}
                sortColumn={sortColumn}
                count={activities.length}
                input={input}
                loading={loading}
                name="Activities"
              />
            </Row>
            <Row className="m-3">
              <Pagination
                itemsCount={totalCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </Row>
          </Col>
        </Row>
      </Row>
    </div>
  );
}
