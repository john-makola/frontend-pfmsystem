import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FormControl } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import NavBarMain from "../../components/NavbarMain";
import LeftMenusGeneral from "../../components/leftmenusgeneral";

const Activities = () => {
  const [validated, setValidated] = useState(false);
  const [entryadded, setEntryadded] = useState("");

  const history = useHistory();
  const [input, setInput] = useState({
    activityno: "",
    activityname: "",
    activitydescription: "",
    departmentname: "",
    projectno: "",
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

  const [departments, setDepartments] = useState([
    {
      departmentno: "",
      departmentname: "",
    },
  ]);

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function addactivity() {
    return <a href={"/addproject"} />;
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
        departmentname: input.departmentname,
        projectno: input.projectno,
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
        departmentname: "",
        projectno: "",
        startdate: "",
        enddate: "",
        specialnotes: "",
      });
    }
    setValidated(false);
  };

  //Load Data from the Server
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
    fetch("/departments")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setDepartments(jsonRes));
  });

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
                <h4 className="leading pt-4">
                  Enter a new <strong> County Activity</strong> based on a{" "}
                  <strong>Department or Project</strong>
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
                        value={input.activityno}
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
                        value={input.activityname}
                        onChange={handleChange}
                      />
                    </InputGroup>
                    <Form.Control.Feedback></Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="m-3">
                  <Form.Group as={Col} md="6">
                    <InputGroup>
                      <InputGroup.Text>Project No (Optional)</InputGroup.Text>
                      <Form.Select
                        type="text"
                        placeholder="P0001"
                        name="projectno"
                        value={input.projectno}
                        onChange={handleChange}
                      >
                        {projects.map((p) => (
                          <option>{p.projectno}</option>
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
                        placeholder="P0001"
                        name="projectno"
                        value={input.projectno}
                        onChange={handleChange}
                      >
                        {projects.map((p) => (
                          <option>{p.projectno}</option>
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
                        value={input.activitydescription}
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
                        type="date"
                        name="startdate"
                        value={input.startdate}
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
                        type="date"
                        name="enddate"
                        value={input.enddate}
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
                        value={input.specialnotes}
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
                  <Row className={entryadded ? "m-3 entryrecordalert" : "m-3"}>
                    <h5>{entryadded ? entryadded : null}</h5>
                  </Row>
                </Row>
              </Row>
            </Form>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default Activities;
