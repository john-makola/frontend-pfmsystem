import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FormControl } from "react-bootstrap";
import NavBarMain from "../NavbarMain";
import LeftMenusGeneral from "../leftmenusgeneral";
import TasksTable from "./taskstable";
import Pagination from "../../common/pagination";
import { paginate } from "../../utils/paginate";

const AddActivityTask = ({
  handleChange,
  entryadded,
  projects,
  activities,
  project,
  activity,
  location,
  resourcesrequired,
  comments,
  task,
}) => {
  // const [validated, setValidated] = useState(false);
  // const [entryadded, setEntryadded] = useState("");

  // const [tasks, setTasks] = useState([
  //   {
  //     project: "",
  //     activity: "",
  //     task: "",
  //     location: "",
  //     resourcesrequired: "",
  //     comments: "",
  //   },
  // ]);

  // const [projects, setProjects] = useState([]);
  // const [activities, setActivities] = useState([]);
  // //Initialize Sort Columns
  // const [sortColumn, setsortColumn] = useState({
  //   path: "",
  //   order: "",
  // });

  // //Initialize Sorted, Paginated Projects, PageSize,Current Page

  // const [pageSize, setpageSize] = useState(50);
  // const [currentPage, setcurrentPage] = useState(1);
  // const [input, setInput] = useState({
  //   project: "",
  //   activity: "",
  //   task: "",
  //   location: "",
  //   resourcesrequired: "",
  //   comments: "",
  // });

  // function handleChange(event) {
  //   const { name, value } = event.target;
  //   setInput((prevInput) => {
  //     return {
  //       ...prevInput,
  //       [name]: value,
  //     };
  //   });
  // }

  // const handleSubmit = (event) => {
  //   let form = event.currentTarget;
  //   event.preventDefault();
  //   console.log(input);

  //   if (form.checkValidity() === false) {
  //     event.stopPropagation();
  //   } else {
  //     const newTask = {
  //       project: input.project,
  //       activity: input.activity,
  //       task: input.task,
  //       location: input.location,
  //       resourcesrequired: input.resourcesrequired,
  //       comments: input.comments,
  //     };
  //     axios.post("http://localhost:3001/createtask", newTask);
  //     setValidated(true);
  //     setEntryadded("1 Task added to the Database");
  //     setInput({
  //       // project: "",
  //       // activityno: "",
  //       project: "",
  //       activity: "",
  //       task: "",
  //       location: "",
  //       resourcesrequired: "",
  //       comments: "",
  //     });
  //   }
  //   setValidated(false);
  //   setpageSize(50);
  // };

  // //Load Projects Data from the Server
  // useEffect(() => {
  //   let clear = false;
  //   fetch("/projects")
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //     })
  //     .then((jsonRes) => {
  //       if (clear) return;
  //       setProjects(jsonRes);
  //     })
  //     .catch((error) => {});
  //   return () => {
  //     clear = true;
  //   };
  // }, []);

  // //Load Data  Activities from the Server
  // useEffect(() => {
  //   let clear = false;
  //   fetch("/activities")
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //     })
  //     .then((jsonRes) => {
  //       if (clear) return;
  //       setActivities(jsonRes);
  //     })
  //     .catch((error) => {});
  //   return () => {
  //     clear = true;
  //   };
  // }, []);

  // //Load Data  Activities from the Server
  // useEffect(() => {
  //   let clear = false;
  //   fetch("/tasks")
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //     })
  //     .then((jsonRes) => {
  //       if (clear) return;
  //       setTasks(jsonRes);
  //     })
  //     .catch((error) => {});
  //   return () => {
  //     clear = true;
  //   };
  // }, []);

  // //handle allTasks Data
  // function getPagedData() {
  //   const allTasks = tasks;

  //   const sorted = _.orderBy(allTasks, [sortColumn.path], [sortColumn.order]);

  //   const paginatedTasks = paginate(sorted, currentPage, pageSize);

  //   return {
  //     sorted,
  //     totalCount: allTasks.length,
  //     aTasks: paginatedTasks,
  //   };
  // }
  // const { totalCount, aTasks } = getPagedData();

  // const handleSort = (sortColumn) => {
  //   setsortColumn(sortColumn);
  // };

  // //Handle Paginate
  // const handlePageChange = (page) => {
  //   setcurrentPage(page);
  // };

  // const { project, activity, location, resourcesrequired, comments, task } =
  //   input;

  return (
    <div>
      <Col md="12">
        <Row className="m-5 adddataform">
          <Row className="m-3">
            <h2>Task Details</h2>

            <div className="sectiondescription">
              <h6 className="leading">
                Add a <strong> Task</strong> to the System
              </h6>
            </div>
          </Row>
          <Row className="m-1">
            <Form.Group as={Col} md="6">
              <InputGroup>
                <InputGroup.Text>Project </InputGroup.Text>
                <Form.Select
                  type="text"
                  placeholder="Project"
                  name="project"
                  value={project}
                  onChange={handleChange}
                >
                  {" "}
                  {projects.map((p) => (
                    <option key={p._id} value={p._id}>
                      {p.projectno}: {p.projectname}
                    </option>
                  ))}
                </Form.Select>
              </InputGroup>
              <Form.Control.Feedback></Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6">
              <InputGroup>
                <InputGroup.Text>Activity </InputGroup.Text>
                <Form.Select
                  type="text"
                  placeholder="Activity"
                  name="activity"
                  value={activity}
                  onChange={handleChange}
                >
                  {" "}
                  {activities.map((a) => (
                    <option key={a._id} value={a._id}>
                      {a.activityno} :{a.activityname}
                    </option>
                  ))}
                </Form.Select>

                {/* <FormControl
                        id="inlineFormInputGroupActivity"
                        type="text"
                        placeholder="Activity"
                        name="activity"
                        value={input.activity}
                        onChange={handleChange}
                        list="Activities"
                      />

                      <datalist id="Activities">
                        {activities.map((a) => (
                          <option value={a._id}>
                            {a.activityno + " " + a.activityname}
                          </option>
                        ))}
                      </datalist> */}
              </InputGroup>
              <Form.Control.Feedback></Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="m-1">
            <Form.Group as={Col} md="6">
              <InputGroup>
                <InputGroup.Text> Task</InputGroup.Text>
                <FormControl
                  required
                  id="inlineFormInputGroupTask"
                  type="text"
                  placeholder="Task"
                  name="task"
                  value={task}
                  onChange={handleChange}
                />
              </InputGroup>

              <Form.Control.Feedback></Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <InputGroup>
                <InputGroup.Text>Location </InputGroup.Text>
                <FormControl
                  id="inlineFormInputGroupLocation"
                  type="text"
                  placeholder="Location"
                  name="location"
                  value={location}
                  onChange={handleChange}
                />
              </InputGroup>
              <Form.Control.Feedback></Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="m-1">
            <Form.Group as={Col} md="12">
              <InputGroup>
                <InputGroup.Text> Resources Required </InputGroup.Text>
                <Form.Control
                  id="inlineFormInputGroupresources"
                  type="text"
                  placeholder="Resources Required"
                  name="resourcesrequired"
                  value={resourcesrequired}
                  onChange={handleChange}
                  as="textarea"
                  rows={3}
                />
              </InputGroup>

              <Form.Control.Feedback></Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="m-1">
            <Form.Group as={Col} md="12">
              <InputGroup>
                <InputGroup.Text> Comments </InputGroup.Text>
                <Form.Control
                  id="inlineFormInputGroupComments"
                  type="text"
                  placeholder="Comments"
                  name="comments"
                  value={comments}
                  onChange={handleChange}
                  as="textarea"
                  rows={3}
                />
                <Button type="submit" variant="success" className="mx-2">
                  Save
                </Button>
              </InputGroup>

              <Form.Control.Feedback></Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className={entryadded ? "m-3 entryrecordalert" : "m-3"}>
            <h5>{entryadded ? entryadded : null}</h5>
          </Row>
        </Row>
      </Col>
    </div>
  );
};

export default AddActivityTask;
