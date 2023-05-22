import { useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import _ from "lodash";
import { Col, Row, Button, Modal, Form } from "react-bootstrap";
import NavBarMain from "../NavbarMain";
import LeftMenusGeneral from "../leftmenusgeneral";
import TargetsTable from "./selfAppraisalTable";
import Pagination from "../../common/pagination";
import { paginate } from "../../utils/paginate";
import "semantic-ui-css/semantic.min.css";
import AddTarget from "./addselfAppraisal";

const Targets = () => {
  const [validated, setValidated] = useState(false);
  const [entryadded, setEntryadded] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [activities, setActivities] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [targets, setTargets] = useState([]);
  //Initialize Sort Columns
  const [sortColumn, setsortColumn] = useState({
    path: "",
    order: "",
  });

  //Initialize Sorted, Paginated Projects, PageSize,Current Page

  const [pageSize, setpageSize] = useState(50);
  const [currentPage, setcurrentPage] = useState(1);
  const [input, setInput] = useState({
    project: "",
    activity: "",
    task: "",
    agreedperformance: "",
    performanceindicator: "",
    startdate: "",
    enddate: "",
    comments: "",
  });

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
      const newTarget = {
        project: input.project,
        activity: input.activity,
        task: input.task,
        agreedperformance: input.agreedperformance,
        performanceindicator: input.performanceindicator,
        startdate: input.startdate,
        enddate: input.enddate,
        comments: input.comments,
      };
      axios.post("http://localhost:3001/createtarget", newTarget);
      setValidated(true);
      setEntryadded("1 Target added to the Database");
      setInput({
        project: "",
        activity: "",
        task: "",
        agreedperformance: "",
        performanceindicator: "",
        startdate: "",
        enddate: "",
        comments: "",
      });
    }
    setValidated(false);

    setpageSize(50);
  };

  //Load Projects Data from the Server
  useEffect(() => {
    let clear = false;
    fetch("/projects")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => {
        if (clear) return;
        setProjects(jsonRes);
      })
      .catch((error) => {});
    return () => {
      clear = true;
    };
  }, []);

  //Load Data Activities from the Server
  useEffect(() => {
    let clear = false;
    fetch("/activities")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => {
        if (clear) return;
        setActivities(jsonRes);
      })
      .catch((error) => {});
    return () => {
      clear = true;
    };
  }, []);

  //Load Data Tasks from the Server
  useEffect(() => {
    let clear = false;
    fetch("/tasks")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => {
        if (clear) return;
        setTasks(jsonRes);
      })
      .catch((error) => {});
    return () => {
      clear = true;
    };
  }, []);

  useEffect(() => {
    fetch("/targets")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => {
        setTargets(jsonRes);
        setLoading(false);
      })
      .catch((error) => {});
  }, [targets]);

  //handle allTargets Data
  function getPagedData() {
    const allTargets = targets;

    const sorted = _.orderBy(allTargets, [sortColumn.path], [sortColumn.order]);

    const paginatedTargets = paginate(sorted, currentPage, pageSize);

    return {
      sorted,
      totalCount: allTargets.length,
      aTargets: paginatedTargets,
    };
  }
  const { totalCount, aTargets } = getPagedData();

  const handleSort = (sortColumn) => {
    setsortColumn(sortColumn);
  };

  //Handle Paginate
  const handlePageChange = (page) => {
    setcurrentPage(page);
  };

  const {
    project,
    activity,
    agreedperformance,
    performanceindicator,
    startdate,
    enddate,
    comments,
    task,
  } = input;

  const handleClear = () => {
    console.log("Just Checking");
    setEntryadded("");
  };
  return (
    <div>
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
                <h2>Set Targets</h2>
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
                    <Modal.Title>Set Target</Modal.Title>
                  </Modal.Header>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Modal.Body>
                      <AddTarget
                        handleChange={handleChange}
                        projects={projects}
                        activities={activities}
                        tasks={tasks}
                        entryadded={entryadded}
                        project={project}
                        activity={activity}
                        task={task}
                        agreedperformance={agreedperformance}
                        performanceindicator={performanceindicator}
                        startdate={startdate}
                        enddate={enddate}
                        comments={comments}
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
                  ? "No Task in the Database"
                  : `Showing ${totalCount} Targets in the database.`}
              </h4>
              <Col></Col>
              <Col md="2">
                <Button onClick={handleShow} variant="success" className="mx-2">
                  Add Target
                </Button>
              </Col>

              <TargetsTable
                targets={aTargets}
                onSort={handleSort}
                sortColumn={sortColumn}
                count={targets.length}
                input={input}
                loading={loading}
                name="Targets"
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
};

export default Targets;
