import React, { useState, useEffect } from "react";
import _ from "lodash";
import axios from "axios";
import jwtDecode from "jwt-decode";
import httpservice from "../../services/httpservice";
import { ToastContainer, toast } from "react-toastify";
import { Row, Col, Form, Modal, Button } from "react-bootstrap";
import Pagination from "../../common/pagination";
import { paginate } from "../../utils/paginate";
import "semantic-ui-css/semantic.min.css";
import SearchBar from "../../common/searchbar";
import NavBarMain from "../../components/NavbarMain";
import LeftMenusGeneral from "../../components/leftmenusgeneral";
import AddSelfAppraisal from "./addselfAppraisal";
import SupervisorAppraisalTable from "./supervisorAppraisalTable";

export default function SupervisorAppraisal() {
  //Getters and Setters
  //Initialize Projects

  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [targets, setTargets] = useState([]);
  const [projects, setProjects] = useState([]);
  const [activities, setActivities] = useState([]);
  const [selfAppraisal, setSelfAppraisal] = useState([]);
  const [loading, setLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [entryadded, setEntryadded] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [input, setInput] = useState({
    user: "",
    task: "",
    target: "",
    performanceindicator: "",
    achievedresults: "",
    scorerating: "",
  });

  //Initialize Sort Columns
  const [sortColumn, setsortColumn] = useState({
    path: "",
    order: "",
  });

  //Initialize Sorted, Paginated Projects, PageSize,Current Page

  const [pageSize, setpageSize] = useState(10);
  const [currentPage, setcurrentPage] = useState(1);

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
      const newSelfAppraisal = {
        user: input.user,
        task: input.task,
        target: input.target,
        performanceindicator: input.performanceindicator,
        achievedresults: input.achievedresults,
        scorerating: input.scorerating,
      };
      try {
        httpservice
          .post("http://localhost:3001/createselfappraisal", newSelfAppraisal)
          .then((response) => {})
          .catch((error) => {
            if (error.response && error.response.status === 400) {
              toast(error.response.data);
            }
          });
      } catch (error) {
        toast(error);
      }

      setValidated(true);
      setEntryadded("1 Appraisal added to the Database.  View Appraisals ");
      setInput({
        user: currentuser._id,
        task: "",
        target: "",
        performanceindicator: "",
        achievedresults: "",
        scorerating: "",
      });
    }
    setValidated(false);
  };

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

  //Load Activities Data from the Server
  useEffect(() => {
    httpservice
      .get("/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          toast("Error Loading Tasks Data");
        }
      });
  }, [tasks]);

  //Load Targets Data from the Server
  useEffect(() => {
    httpservice
      .get("/targets")
      .then((response) => {
        setTargets(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          toast("Error Loading Targets Data");
        }
      });
  }, [targets]);

  //Load SelfAppraisal Data from the Server
  useEffect(() => {
    httpservice
      .get("/selfappraisal")
      .then((response) => {
        setSelfAppraisal(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          toast("Error Loading SelfAppraisal Data");
        }
      });
  }, [selfAppraisal]);

  ///getPaged Data Function

  function getPagedData() {
    const allSelfAppraisals = selfAppraisal;

    let filtered = allSelfAppraisals;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const paginatedSelfAppraisal = paginate(sorted, currentPage, pageSize);

    return {
      sorted,
      totalCount: filtered.length,
      aSelfAppraisal: paginatedSelfAppraisal,
    };
  }
  const { totalCount, aSelfAppraisal } = getPagedData();

  const handleSort = (sortColumn) => {
    setsortColumn(sortColumn);
  };

  //Handle Paginate
  const handlePageChange = (page) => {
    setpageSize(10);
    setcurrentPage(page);
  };

  const { task, target, performanceindicator, achievedresults, scorerating } =
    input;

  console.log(selfAppraisal);

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
                <h2>Supervisor Appraisal</h2>
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
                    <Modal.Title>Add a Target</Modal.Title>
                  </Modal.Header>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Modal.Body>
                      <AddSelfAppraisal
                        handleChange={handleChange}
                        entryadded={entryadded}
                        tasks={tasks}
                        target={target}
                        targets={targets}
                        task={task}
                        performanceindicator={performanceindicator}
                        achievedresults={achievedresults}
                        scorerating={scorerating}
                        loading={loading}
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
                  ? "No Appraisals in the Database"
                  : `Showing ${totalCount} Appraisals Items in the database.`}
              </h4>
              <Col></Col>
              <Col md="2">
                <Button onClick={handleShow} variant="success" className="mx-2">
                  Add Appraisal Target
                </Button>
              </Col>

              <SupervisorAppraisalTable
                selfappraisal={selfAppraisal}
                onSort={handleSort}
                sortColumn={sortColumn}
                count={selfAppraisal.length}
                input={input}
                loading={loading}
                name="SelfAppraisal"
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
