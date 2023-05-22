import { useState, useEffect } from "react";
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
import { paginate } from "../../utils/paginate";
import { useHistory } from "react-router";

const EditAddActivityTask = () => {
  const history = useHistory();
  const [validated, setValidated] = useState(false);
  const [entryadded, setEntryadded] = useState("");

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
    fetch("/projects")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setProjects(jsonRes))
      .catch((error) => {});
  });

  //Load Data  Activities from the Server
  useEffect(() => {
    fetch("/activities")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setActivities(jsonRes))
      .catch((error) => {});
  });

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
  // const { totalCount, aTasks } = getPagedData();

  const handleClick = () => {
    history.push("/login");
  };

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
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="m-5 adddataform">
                <Row className="m-3">
                  <h2>Task Details</h2>

                  <div className="sectiondescription">
                    <h6 className="leading">
                      Add a <strong> Task</strong> to the System
                    </h6>
                  </div>
                </Row>
                <Row className="m-3">
                  <Form.Group as={Col} md="6">
                    <InputGroup>
                      <InputGroup.Text>Project </InputGroup.Text>
                      <FormControl
                        id="inlineFormInputGroupProject"
                        type="text"
                        placeholder="Project"
                        name="project"
                        value={input.project}
                        onChange={handleChange}
                        list="Projects"
                      />

                      <datalist id="Projects">
                        {projects.map((p) => (
                          <option value={p._id}>
                            {p.projectno + " " + p.projectname}
                          </option>
                        ))}
                      </datalist>
                    </InputGroup>
                    <Form.Control.Feedback></Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="6">
                    <InputGroup>
                      <InputGroup.Text>Activity </InputGroup.Text>
                      <FormControl
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
                            {a.projectno + " " + a.projectname}
                          </option>
                        ))}
                      </datalist>
                    </InputGroup>
                    <Form.Control.Feedback></Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="m-3">
                  <Form.Group as={Col} md="6">
                    <InputGroup>
                      <InputGroup.Text> Task</InputGroup.Text>
                      <FormControl
                        required
                        id="inlineFormInputGroupTask"
                        type="text"
                        placeholder="Task"
                        name="task"
                        value={input.task}
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
                        value={input.location}
                        onChange={handleChange}
                      />
                    </InputGroup>
                    <Form.Control.Feedback></Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="m-3">
                  <Form.Group as={Col} md="12">
                    <p>Detail all resources required to accomplish Task:</p>
                    <InputGroup>
                      <InputGroup.Text> Resources Requires </InputGroup.Text>
                      <Form.Control
                        id="inlineFormInputGroupresources"
                        type="text"
                        placeholder="Resources Required"
                        name="resourcesrequired"
                        value={input.resourcesrequired}
                        onChange={handleChange}
                        as="textarea"
                        rows={3}
                      />
                    </InputGroup>

                    <Form.Control.Feedback></Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className="m-3">
                  <Form.Group as={Col} md="12">
                    <InputGroup>
                      <InputGroup.Text> Comments </InputGroup.Text>
                      <Form.Control
                        id="inlineFormInputGroupComments"
                        type="text"
                        placeholder="Comments"
                        name="comments"
                        value={input.comments}
                        onChange={handleChange}
                        as="textarea"
                        rows={3}
                      />
                    </InputGroup>

                    <Form.Control.Feedback></Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className={entryadded ? "m-3 entryrecordalert" : "m-3"}>
                  <h5>{entryadded ? entryadded : null}</h5>
                </Row>
              </Row>
              <Row className="m-3">
                <Button onclick={handleClick}>Back</Button>
              </Row>
            </Form>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default EditAddActivityTask;
