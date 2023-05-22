import { useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FormControl } from "react-bootstrap";
import NavBarMain from "../../components/NavbarMain";
import LeftMenusGeneral from "../../components/leftmenusgeneral";

const EditActivity = () => {
  const [validated, setValidated] = useState(false);
  const [entryadded, setEntryadded] = useState("");

  const [input, setInput] = useState({
    activityno: "",
    activityname: "",
    activitydescription: "",
    project_id: "",
    employee_id: "",
    startdate: "",
    enddate: "",
    specialnotes: "",
  });

  const [projects, setProjects] = useState([
    {
      _id: "",
      projectno: "",
    },
  ]);

  const [activities, setActivities] = useState([
    {
      activityno: "",
      activityname: "",
      activitydescription: "",
      project: "",
      employee: "",
      startdate: "",
      enddate: "",
      specialnotes: "",
    },
  ]);
  const [employees, setEmployees] = useState([
    {
      _id: "",
      surname: "",
      empno: "",
      dutystation_dept: "",
    },
  ]);

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
      const newActivity = {
        activityno: input.activityno,
        activityname: input.activityname,
        activitydescription: input.activitydescription,
        project: input.project_id,
        employee: input.employee_id,
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
        project_id: "",
        employee_id: "",
        startdate: "",
        enddate: "",
        specialnotes: "",
      });
    }
    setValidated(false);
  };

  //Load Data from the Server
  useEffect(() => {
    fetch("/activities")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setActivities(jsonRes));
  });

  useEffect(() => {
    fetch("/projects")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setProjects(jsonRes));
  });

  //Load Data from the Server
  useEffect(() => {
    fetch("/employees")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setEmployees(jsonRes));
  });

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
            {activities.map((activity) => (
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="m-5 adddataform">
                  <h4 className="leading pt-4">
                    <strong>Edit Activity</strong>
                  </h4>
                  <Row className="m-3">
                    <Form.Group as={Col} md="3">
                      <InputGroup>
                        <InputGroup.Text>
                          {" "}
                          <strong>Activity No</strong>
                        </InputGroup.Text>
                        <FormControl
                          required
                          id="inlineFormInputGroupActivityno"
                          type="text"
                          placeholder="Activity No"
                          name="activityno"
                          value={activity.activityno}
                          onChange={handleChange}
                        />
                      </InputGroup>
                      <Form.Control.Feedback></Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="9">
                      <InputGroup>
                        <InputGroup.Text>
                          {" "}
                          <strong>Activity Name</strong>
                        </InputGroup.Text>
                        <FormControl
                          required
                          id="inlineFormInputGroupActivityname"
                          type="text"
                          placeholder="Activity Name"
                          name="activityname"
                          value={activity.activityname}
                          onChange={handleChange}
                        />
                      </InputGroup>
                      <Form.Control.Feedback></Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row className="m-3">
                    <Form.Group as={Col} md="6">
                      <InputGroup>
                        <InputGroup.Text>
                          Department / Duty Station
                        </InputGroup.Text>
                        <Form.Select
                          required
                          type="text"
                          placeholder="Department Name"
                          name="employee_id"
                          value={activity.activitydescription}
                          onChange={handleChange}
                        >
                          {employees.map((e) => (
                            <option value={e._id}>{e.dutystation_dept}</option>
                          ))}
                        </Form.Select>
                      </InputGroup>
                      <Form.Control.Feedback></Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="6">
                      <InputGroup>
                        <InputGroup.Text>Project No (Optional)</InputGroup.Text>
                        <Form.Select
                          type="text"
                          placeholder="Project No"
                          name="project_id"
                          value={activity.project}
                          onChange={handleChange}
                        >
                          {projects.map((p) => (
                            <option value={p._id}>{p.projectno}</option>
                          ))}
                        </Form.Select>
                      </InputGroup>
                      <Form.Control.Feedback></Form.Control.Feedback>
                    </Form.Group>
                  </Row>

                  <Row className="m-3"></Row>

                  <Row className="m-3">
                    <Form.Group as={Col} md="12">
                      <InputGroup>
                        <InputGroup.Text>
                          {" "}
                          <strong>Activity Description</strong>
                        </InputGroup.Text>
                        <FormControl
                          required
                          id="inlineFormInputGroupActivitydescription"
                          type="text"
                          placeholder="Activity Description"
                          name="activitydescription"
                          value={activity.activitydescription}
                          onChange={handleChange}
                        />
                      </InputGroup>
                      <Form.Control.Feedback></Form.Control.Feedback>
                    </Form.Group>
                  </Row>

                  <Row className="m-3">
                    <Form.Group as={Col} md="6">
                      <InputGroup>
                        <InputGroup.Text>Start Date--</InputGroup.Text>
                        <FormControl
                          required
                          id="inlineFormInputGroupStartDate"
                          type="text"
                          name="startdate"
                          value={activity.startdate}
                          onChange={handleChange}
                        />
                        <Form.Control.Feedback></Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md="6" className="mx-auto">
                      <InputGroup>
                        <InputGroup.Text>Completion Date--</InputGroup.Text>
                        <FormControl
                          required
                          id="inlineFormInputGroupEndDate"
                          type="text"
                          name="enddate"
                          value={activity.enddate}
                          onChange={handleChange}
                        />
                        <Form.Control.Feedback></Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Row>

                  <Row className="m-3">
                    <hr></hr>
                    <Form.Group className="mb-3">
                      <InputGroup>
                        <InputGroup.Text>Special Notes</InputGroup.Text>
                        <FormControl
                          required
                          id="inlineFormInputGroupspecialnotes"
                          type="text"
                          placeholder="Enter Activity Description Here"
                          name="specialnotes"
                          as="textarea"
                          rows={3}
                          value={activity.specialnotes}
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group
                      className="mb-3"
                      feedback="Confirm Details before submitting."
                      feedbacktype="invalid"
                    >
                      <Button type="submit" variant="success" className="mx-2">
                        Save
                      </Button>
                      <Button variant="dark">Add Targets</Button>
                    </Form.Group>
                    <Row
                      className={entryadded ? "m-3 entryrecordalert" : "m-3"}
                    >
                      <h5>{entryadded ? entryadded : null}</h5>
                    </Row>
                  </Row>
                </Row>
              </Form>
            ))}
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default EditActivity;
