import { useState } from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FormControl } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import NavBarMain from "../../components/NavbarMain";
import LeftMenusGeneral from "../../components/leftmenusgeneral";
import jwtDecode from "jwt-decode";

const AddEmployee = () => {
  const [validated, setValidated] = useState(false);
  const history = useHistory();

  const [input, setInput] = useState({
    empno: "",
    payroll_num: "",
    surname: "",
    firstname: "",
    other_names: "",
    designation: "",
    job_group: "",
    dutystation_dept: "",
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
    const form = event.currentTarget;
    event.preventDefault();
    console.log(input);

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    const newEmployee = {
      empno: input.empno,
      payroll_num: input.payroll_num,
      surname: input.surname,
      firsname: input.firstname,
      other_names: input.other_names,
      designation: input.designation,
      job_group: input.job_group,
      projectno: input.projectno,
      dutystation_dept: input.dutystation_dept,
    };
    axios.post("http://localhost:3001/createemployee", newEmployee);
    history.push("/employees");
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
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="m-5">
                <h2>Employee Registration Form</h2>

                <div className="sectiondescription">
                  <h6 className="leading">
                    Add an <strong> Employee/ Staff </strong> to the System
                  </h6>
                </div>
              </Row>
              <Row className="m-3">
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Personal No</InputGroup.Text>
                    <FormControl
                      required
                      id="inlineFormInputGroupPersonalno"
                      type="text"
                      placeholder="PersonalNo"
                      name="personalno"
                      value={input.empno}
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <Form.Control.Feedback></Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>PayRoll No</InputGroup.Text>
                    <FormControl
                      required
                      id="inlineFormInputGroupPayrollNo"
                      type="text"
                      placeholder="Payroll No"
                      name="payrollno"
                      value={input.payroll_num}
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <Form.Control.Feedback></Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="m-3">
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>PNo</InputGroup.Text>
                    <FormControl
                      required
                      id="inlineFormInputGroupSurname"
                      type="text"
                      placeholder="PersonalNo"
                      name="pno"
                      value={input.empno}
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <Form.Control.Feedback></Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>First Name</InputGroup.Text>
                    <FormControl
                      required
                      id="inlineFormInputGroupFirstName"
                      type="text"
                      placeholder="FirstName"
                      name="firstname"
                      value={input.firstname}
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <Form.Control.Feedback></Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="m-3">
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Surname</InputGroup.Text>
                    <FormControl
                      required
                      id="inlineFormInputGroupSurname"
                      type="text"
                      placeholder="Surname"
                      name="surname"
                      value={input.surname}
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <Form.Control.Feedback></Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>First Name</InputGroup.Text>
                    <FormControl
                      required
                      id="inlineFormInputGroupFirstName"
                      type="text"
                      placeholder="FirstName"
                      name="firstname"
                      value={input.firstname}
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <Form.Control.Feedback></Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="m-3">
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>OtherNames</InputGroup.Text>
                    <FormControl
                      required
                      id="inlineFormInputGroupOtherNames"
                      type="text"
                      placeholder="OtherNames"
                      name="othernames"
                      value={input.other_names}
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <Form.Control.Feedback></Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Designation</InputGroup.Text>
                    <FormControl
                      required
                      id="inlineFormInputGroupDesignation"
                      type="text"
                      placeholder="Designation"
                      name="designation"
                      value={input.designation}
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <Form.Control.Feedback></Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="m-3">
                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>Job Group</InputGroup.Text>
                    <FormControl
                      required
                      id="inlineFormInputGroupJobgroup"
                      type="text"
                      placeholder="Job Group"
                      name="jobgroup"
                      value={input.job_group}
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <Form.Control.Feedback></Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6">
                  <InputGroup>
                    <InputGroup.Text>DutyStation-Department</InputGroup.Text>
                    <FormControl
                      required
                      id="inlineFormInputGroupDutyStation"
                      type="text"
                      placeholder="Duty Station /Department"
                      name="dutystation"
                      value={input.dutystation_dept}
                      onChange={handleChange}
                    />
                  </InputGroup>
                  <Form.Control.Feedback></Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Button type="submit">Submit form</Button>
            </Form>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default AddEmployee;
