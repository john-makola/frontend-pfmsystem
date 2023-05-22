import { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import { Col, Row, Button, Modal, Form } from "react-bootstrap";
import NavBarMain from "../NavbarMain";
import LeftMenusGeneral from "../leftmenusgeneral";
import TasksTable from "./taskstable";
import Pagination from "../../common/pagination";
import { paginate } from "../../utils/paginate";
import AddActivityTask from "./addactivitytask";

const Tasks = () => {
  const [validated, setValidated] = useState(false);
  const [entryadded, setEntryadded] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [tasks, setTasks] = useState([
    {
      project: "",
      activity: "",
      task: "",
      location: "",
      resourcesrequired: "",
      comments: "",
    },
  ]);

  const [projects, setProjects] = useState([]);
  const [activities, setActivities] = useState([]);
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
    location: "",
    resourcesrequired: "",
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

  const handleSubmit = (event) => {
    let form = event.currentTarget;
    event.preventDefault();
    console.log(input);

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const newTask = {
        project: input.project,
        activity: input.activity,
        task: input.task,
        location: input.location,
        resourcesrequired: input.resourcesrequired,
        comments: input.comments,
      };
      axios.post("http://localhost:3001/createtask", newTask);
      setValidated(true);
      setEntryadded("1 Task added to the Database");
      setInput({
        // project: "",
        // activityno: "",
        project: "",
        activity: "",
        task: "",
        location: "",
        resourcesrequired: "",
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

  //Load Data  Activities from the Server
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

  //Load Data  Activities from the Server
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

  //handle allTasks Data
  function getPagedData() {
    const allTasks = tasks;

    const sorted = _.orderBy(allTasks, [sortColumn.path], [sortColumn.order]);

    const paginatedTasks = paginate(sorted, currentPage, pageSize);

    return {
      sorted,
      totalCount: allTasks.length,
      aTasks: paginatedTasks,
    };
  }
  const { totalCount, aTasks } = getPagedData();

  const handleSort = (sortColumn) => {
    setsortColumn(sortColumn);
  };

  //Handle Paginate
  const handlePageChange = (page) => {
    setcurrentPage(page);
  };

  const { project, activity, location, resourcesrequired, comments, task } =
    input;
  return (
    <div>
      <Row>
        <Row className="m-5">
          <NavBarMain />
        </Row>

        <Row className="mt-2">
          <Col md="3" className="listgroup p-3">
            <LeftMenusGeneral />
          </Col>
          <Col md="9">
            <Row className="m-3">
              <Col></Col>
              <Col md="2">
                <Button onClick={handleShow} variant="success" className="mx-2">
                  Add Task
                </Button>

                <Modal
                  size="lg"
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                  dialogClassName="modal-90w"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Add Task</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form
                      noValidate
                      validated={validated}
                      onSubmit={handleSubmit}
                    >
                      <AddActivityTask
                        handleChange={handleChange}
                        projects={projects}
                        activities={activities}
                        entryadded={entryadded}
                        project={project}
                        activity={activity}
                        location={location}
                        resourcesrequired={resourcesrequired}
                        comments={comments}
                        task={task}
                      />
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="Success" onClick={handleClose}>
                      Save
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Col>
            </Row>

            <Row className="m-1">
              <h4>
                {totalCount === 0
                  ? "No Task in the Database"
                  : `Showing ${totalCount} Tasks in the database.`}
              </h4>
              <TasksTable
                tasks={aTasks}
                onSort={handleSort}
                sortColumn={sortColumn}
                count={tasks.length}
                input={input}
                name="Tasks"
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

export default Tasks;
