import { useState, useContext } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";
import { FormControl } from "react-bootstrap";
import DatePickerA from "../../common/datepicker";
import Toggle from "../../common/toggle";
import { ProjectContext } from "../contexts/ProjectContext";

const EditProjects = () => {
  const [validated, setValidated] = useState(false);
  const [input, setInput] = useState({
    fisicalyear: "",
    startdate: "",
    enddate: "",
    review: "",
    projectmanager: "",
    projectname: "",
    projectno: "",
    departmentno: "",
    departmentname: "",
    donor: "",
    budget: "",
    projectdescription: "",
    specialnotes: "",
    test: "",
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
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    console.log(input);
  };

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="m-3">
          <h2>Edit existing Project </h2>

          <div className="sectiondescription">
            <h6 className="leading">
              Update <strong>existing Project details </strong> by adding new
              Activities
            </h6>
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
                name="fisicalyear"
                value={input.fisicalyear}
                onChange={handleChange}
              >
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
                <option>2029</option>
                <option>2030</option>
              </Form.Select>
            </InputGroup>
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6">
            <InputGroup>
              <InputGroup.Text>Project Review Date</InputGroup.Text>
              <Form.Select
                required
                type="text"
                placeholder="Review "
                defaultValue="2021"
                name="review"
                value={input.review}
                onChange={handleChange}
              >
                <option>1st Quarter</option>
                <option>2nd Quarter</option>
                <option>3rd Quarter</option>
                <option>Annualy</option>
              </Form.Select>
            </InputGroup>
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="m-3">
          <h5>Project Status</h5>
          <ProgressBar>
            <ProgressBar variant="success" now={5} key={1} label="Done" />
            <ProgressBar
              variant="primary"
              now={20}
              key={2}
              label="Inprogress"
            />
            <ProgressBar variant="warning" now={50} key={3} label="Pending" />
            <ProgressBar
              variant="secondary"
              now={25}
              key={4}
              label="Not Started"
            />
          </ProgressBar>
        </Row>

        <Row className="m-3">
          <Form.Group as={Col} md="3">
            <InputGroup>
              <InputGroup.Text>
                Start Date-- <DatePickerA />
              </InputGroup.Text>
              <Form.Control.Feedback></Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="3">
            <InputGroup>
              <InputGroup.Text>
                Completion Date-- <DatePickerA />
              </InputGroup.Text>
              <Form.Control.Feedback></Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} className="mx-5" md="2">
            <h4>
              <Toggle name="Start Project" />
            </h4>
          </Form.Group>
        </Row>
        <Row className="m-3">
          <Form.Group as={Col} md="6">
            <InputGroup>
              <InputGroup.Text>Project Manager</InputGroup.Text>
              <Form.Select
                required
                type="text"
                placeholder="Role"
                defaultValue="user"
              >
                <option>Wamuyu Gathogo</option>
                <option>Regina Jessicah</option>
                <option>William Ntombora</option>
                <option>Fatuma Koto</option>
                <option>James Jarso</option>
                <option>Fatuma Boru</option>
              </Form.Select>
            </InputGroup>
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6">
            <InputGroup>
              <InputGroup.Text>Project No</InputGroup.Text>
              <FormControl
                required
                id="inlineFormInputGroupPersonalNo"
                type="number"
                placeholder="19620000"
              />
            </InputGroup>

            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="m-3">
          <Form.Group as={Col} md="12">
            <InputGroup>
              <InputGroup.Text>Project Name</InputGroup.Text>
              <FormControl
                required
                id="inlineFormInputGroupSurname"
                type="text"
                placeholder="Project Name"
              />
            </InputGroup>
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="m-3">
          <Form.Group as={Col} md="6">
            <InputGroup>
              <InputGroup.Text>Department No</InputGroup.Text>
              <FormControl
                required
                id="inlineFormInputGroupPersonalNo"
                type="number"
                placeholder="19620000"
              />
            </InputGroup>

            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6">
            <InputGroup>
              <InputGroup.Text>Department Name</InputGroup.Text>
              <Form.Select
                required
                type="text"
                placeholder="Role"
                defaultValue="user"
              >
                <option>Agriculture</option>
                <option>Medical Services</option>
                <option>Livestock</option>
                <option>Office of the Governor</option>
                <option>Public Health</option>
                <option>Public Works</option>
              </Form.Select>
            </InputGroup>
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="m-3">
          <Form.Group as={Col} md="12">
            <InputGroup>
              <InputGroup.Text>Project Description</InputGroup.Text>
              <Form.Control as="textarea" rows={2} />
            </InputGroup>

            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="m-3">
          <Form.Group className="mb-3">
            <InputGroup>
              <InputGroup.Text>Special Notes</InputGroup.Text>

              <Form.Control as="textarea" rows={3} />
            </InputGroup>
          </Form.Group>
        </Row>

        <Form.Group
          className="mb-3"
          feedback="Confirm Details before submitting."
          feedbacktype="invalid"
        >
          <Button type="submit" variant="warning">
            Discard
          </Button>
          <Button type="submit" variant="secondary" className="mx-2">
            Save as a Draft
          </Button>
          <Button type="submit" variant="success">
            Save
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default EditProjects;
