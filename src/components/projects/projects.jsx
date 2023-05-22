import React, { useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import httpservice from "../../services/httpservice";
import { Row, Col, Form, Modal, Button } from "react-bootstrap";
import ProjectTable from "./projectTable";
import _ from "lodash";
import Pagination from "../../common/pagination";
import { paginate } from "../../utils/paginate";
import "semantic-ui-css/semantic.min.css";
import SearchBar from "../../common/searchbar";
import NavBarMain from "../../components/NavbarMain";
import LeftMenusGeneral from "../../components/leftmenusgeneral";
import AddProjects from "./addproject";

export default function Projects() {
  //Getters and Setters
  //Initialize Projects
  const [validated, setValidated] = useState(false);
  const [entryadded, setEntryadded] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [departments, setDepartments] = useState([]);

  //initialize Search Field Input
  const [input, setInput] = useState({
    fisicalyear: "",
    review: "",
    status: "",
    startdate: "",
    enddate: "",
    projectmanager: "",
    projectno: "",
    projectname: "",
    departmentname: "",
    donor: "",
    budget: "",
    projectdescription: "",
    specialnotes: "",
  });

  //Initialize Sort Columns
  const [sortColumn, setsortColumn] = useState({
    path: "",
    order: "",
  });

  //Initialize Sorted, Paginated Projects, PageSize,Current Page

  const [pageSize, setpageSize] = useState(100);
  const [currentPage, setcurrentPage] = useState(1);

  //Create new Project
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    console.log(input);

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setValidated(true);

      const newProject = {
        fisicalyear: input.fisicalyear,
        review: input.review,
        status: input.status,
        startdate: input.startdate,
        enddate: input.enddate,
        user: input.user,
        projectno: input.projectno,
        projectname: input.projectname,
        department: input.department,
        donor: input.donor,
        budget: input.budget,
        projectdescription: input.projectdescription,
        specialnotes: input.specialnotes,
      };
      axios.post("http://localhost:3001/create", newProject);
      setInput({
        startdate: "",
        enddate: "",
        projectno: "",
        projectname: "",
        budget: "",
        projectdescription: "",
        specialnotes: "",
      });
    }
  };

  //Load Data from the Server
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

  //Load Employees Data from the Server

  useEffect(() => {
    httpservice
      .get("/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          toast("Error Loading Users Data");
        }
      });
  }, [users]);

  //Load Department Data from the Server
  //Load Data from the Server
  useEffect(() => {
    httpservice
      .get("/departments")
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          toast("Error Loading Departments Data");
        }
      });
  }, [departments]);

  //SearchBar Handler
  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
    setpageSize(100);
  }

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

  ///getPaged Data Function

  function getPagedData() {
    const allProjects = projects;

    let filtered = allProjects;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const paginatedProjects = paginate(sorted, currentPage, pageSize);

    return {
      sorted,
      totalCount: filtered.length,
      aProjects: paginatedProjects,
    };
  }
  const { totalCount, aProjects } = getPagedData();

  const handleSort = (sortColumn) => {
    setsortColumn(sortColumn);
  };

  //Handle Paginate
  const handlePageChange = (page) => {
    setcurrentPage(page);
  };

  const {
    fisicalyear,
    review,
    status,
    startdate,
    enddate,
    user,
    projectno,
    projectname,
    department,
    donor,
    budget,
    projectdescription,
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
          <Col md="9" className="mt-3">
            <div className="sectiondescription">
              <Row className="m-3">
                <h2>County Programmes / Projects</h2>
                <h5 className="tabcontentdisplay">
                  A secure, just and prosperous County, where people achieve
                  their full potential and enjoy a high quality of life.
                </h5>
              </Row>
            </div>
            <Row className="m-3">
              <Col></Col>
              <Col md="2">
                <Modal
                  size="lg"
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                  dialogClassName="modal-90w"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Add Project</Modal.Title>
                  </Modal.Header>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Modal.Body>
                      <AddProjects
                        handleChange={handleChange}
                        loading={loading}
                        fisicalyear={fisicalyear}
                        review={review}
                        status={status}
                        startdate={startdate}
                        enddate={enddate}
                        user={user}
                        projectno={projectno}
                        projectname={projectname}
                        department={department}
                        donor={donor}
                        budget={budget}
                        projectdescription={projectdescription}
                        specialnotes={specialnotes}
                        users={users}
                        departments={departments}
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

            <Row className="m-1">
              <h4>
                {totalCount === 0
                  ? "No Projects in the Database"
                  : `Showing ${totalCount} Projects in the database.`}
              </h4>
              <Col></Col>
              <Col md="2">
                <Button onClick={handleShow} variant="success" className="mx-2">
                  Add Project
                </Button>
              </Col>

              <ProjectTable
                projects={aProjects}
                onSort={handleSort}
                sortColumn={sortColumn}
                count={projects.length}
                input={input}
                loading={loading}
                name="Projects"
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
