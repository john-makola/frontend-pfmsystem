import { useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";

import LeftMenusGeneral from "../../components/leftmenusgeneral";
import { Link } from "react-router-dom";

const AddRole = () => {
  const [validated, setValidated] = useState(false);
  const history = useHistory();
  const [input, setInput] = useState({
    role: "",
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
    const form = event.currentTarget;
    event.preventDefault();
    console.log(input);

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setValidated(true);

      const newProjectRole = {
        role: input.role,
      };
      axios.post("http://localhost:3001/createrole", newProjectRole);
      history.push("/projects");
    }
  };

  return (
    <div>
      <Row>
        <Row className="m-5"></Row>

        <Row className="mt-2">
          <Col md="3" className="listgroup p-3">
            <LeftMenusGeneral currentuser={currentuser} />
          </Col>
          <Col md="9">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="m-3">
                <h2>Add New Role </h2>

                <div className="sectiondescription">
                  <h6 className="leading">
                    Add a <strong>new Project </strong> to the System
                  </h6>
                  A<strong> Project Program </strong> is an undertaking by any
                  of the County Departments, carried out individually or
                  collaboratively to achieve a particular objective inline with
                  the County Development Goals.{" "}
                </div>
              </Row>
              <Row className="m-3">
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Fisical Year</InputGroup.Text>
                    <Form.Select
                      required
                      type="text"
                      placeholder="Role"
                      defaultValue="2021"
                      name="role"
                      value={input.role}
                      onChange={handleChange}
                    >
                      <option>Administrator</option>
                      <option>User</option>
                      <option>Supervisor</option>
                      <option>Project Manager</option>
                      <option>HR</option>
                      <option>IT Support</option>
                    </Form.Select>
                  </InputGroup>
                  <Form.Control.Feedback></Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Form.Group
                className="mb-3"
                feedback="Confirm Details before submitting."
                feedbacktype="invalid"
              >
                <Button type="submit" variant="success" className="mx-2">
                  Save
                </Button>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/addactivity"
                >
                  <Button variant="warning">Add Activities</Button>
                </Link>

                <Form.Control.Feedback></Form.Control.Feedback>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default AddRole;
