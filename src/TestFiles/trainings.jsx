import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import _ from "lodash";
import httpservice from "../../services/httpservice";
import { ToastContainer, toast } from "react-toastify";
import { Col, Row, Button, Modal, Form } from "react-bootstrap";
import NavBarMain from "../NavbarMain";
import LeftMenusGeneral from "../leftmenusgeneral";
import TrainingTable from "./trainingTable";
import AddTraining from "./addtraining";
import Pagination from "../../common/pagination";
import { paginate } from "../../utils/paginate";
import "semantic-ui-css/semantic.min.css";

const Trainings = () => {
  const [validated, setValidated] = useState(false);
  const [entryadded, setEntryadded] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [activities, setActivities] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [trainings, setTrainings] = useState([]);
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
    training: "",
    description: "",
    venue: "",
    resources: "",
    startdate: "",
    enddate: "",
    comments: "",
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

  const handleSubmit = async (event) => {
    let form = event.currentTarget;
    event.preventDefault();
    console.log(input);

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const newTraining = {
        project: input.project,
        activity: input.activity,
        task: input.task,
        training: input.training,
        description: input.description,
        venue: input.venue,
        resources: input.resources,
        startdate: input.startdate,
        enddate: input.enddate,
        comments: input.comments,
      };
      try {
        axios.post("http://localhost:3001/createtraining", newTraining);
        setValidated(true);
        setEntryadded("1 Training added to the Database");
        setInput({
          project: "",
          activity: "",
          task: "",
          training: "",
          description: "",
          venue: "",
          resources: "",
          startdate: "",
          enddate: "",
          comments: "",
        });
      } catch (error) {
        console.log(error);
      }
    }
    setValidated(false);

    setpageSize(50);
  };

  //Load Projects Data from the Server
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

  //Load Data Activities from the Server

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

  //Load Data Trainings from the Server

  useEffect(() => {
    fetch("/trainings")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setTrainings(jsonRes));
  });

  //Load Data Tasks from the Server
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
  //handle allTrainings Data
  function getPagedData() {
    const allTrainings = trainings;

    const sorted = _.orderBy(
      allTrainings,
      [sortColumn.path],
      [sortColumn.order]
    );

    const paginatedTrainings = paginate(sorted, currentPage, pageSize);

    return {
      sorted,
      totalCount: allTrainings.length,
      aTrainings: paginatedTrainings,
    };
  }
  const { totalCount, aTrainings } = getPagedData();

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
    task,
    training,
    description,
    venue,
    resources,
    startdate,
    enddate,
    comments,
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
                <h2>Set and View Trainings</h2>
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
                    <Modal.Title>Set Training</Modal.Title>
                  </Modal.Header>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Modal.Body>
                      <AddTraining
                        handleChange={handleChange}
                        projects={projects}
                        activities={activities}
                        tasks={tasks}
                        entryadded={entryadded}
                        project={project}
                        activity={activity}
                        task={task}
                        training={training}
                        description={description}
                        venue={venue}
                        resources={resources}
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
                  ? "No Trainings in the Database"
                  : `Showing ${totalCount} Trainings in the database.`}
              </h4>
              <Col></Col>
              <Col md="2">
                <Button onClick={handleShow} variant="success" className="mx-2">
                  Add Training
                </Button>
              </Col>

              <TrainingTable
                trainings={trainings}
                onSort={handleSort}
                sortColumn={sortColumn}
                count={trainings.length}
                input={input}
                loading={loading}
                name="Trainings"
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

export default Trainings;
