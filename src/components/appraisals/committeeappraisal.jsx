import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import {
  Row,
  Col,
  Form,
  Modal,
  Button,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import Pagination from "../../common/pagination";
import { paginate } from "../../utils/paginate";
import "semantic-ui-css/semantic.min.css";
import SearchBar from "../../common/searchbar";
import NavBarMain from "../../components/NavbarMain";
import LeftMenusGeneral from "../../components/leftmenusgeneral";

const CommitteeAppraisal = () => {
  const [validated, setValidated] = useState(false);
  const [input, setInput] = useState({
    meetingno: "",
    memberspresent: "",
    meetingdate: "",
    meetingnotes: "",
    title: "",
    reward: "",
    sanction: "",
    otherintervention: "",
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

  const handleSubmit = (event) => {};

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
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="m-5">
                <h2>Departments Performance Management Committee.</h2>

                <div className="sectiondescription">
                  <h6 className="leading">
                    The completed SPAS report shall be submitted to the Head of
                    HRM at the end of the appraisal period for deliberation by
                    the Departments Performance Management Committee.
                  </h6>
                  <h6>
                    The Departmental Performance Management Committee report
                    shall be submitted to the County Public Service Board at the
                    end of appraisal period
                  </h6>
                </div>
              </Row>
              <Row className="m-3 adddataform">
                <Row className="m-3 ">
                  <Col></Col>
                  <Col md="4">
                    <Form.Group className="mb-3">
                      <InputGroup>
                        <InputGroup.Text>Meeting No--</InputGroup.Text>
                        <FormControl
                          required
                          id="inlineFormInputGroupdepartmentdescription"
                          type="text"
                          placeholder="meetingno"
                          name="meetingno"
                          value={input.meetingno}
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="m-3 ">
                  <Form.Group as={Col} md="6">
                    <InputGroup>
                      <InputGroup.Text>Meeting Date--</InputGroup.Text>
                      <FormControl
                        required
                        id="inlineFormInputGroupStartDate"
                        type="date"
                        name="meetingdate"
                        value={input.meetingdate}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback></Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col} md="6" className="mx-auto">
                    <InputGroup>
                      <InputGroup.Text>Members Present--</InputGroup.Text>
                      <FormControl
                        required
                        id="inlineFormInputGroupEndDate"
                        type="text"
                        name="memberspresent"
                        value={input.memberspresent}
                        as="textarea"
                        rows={3}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback></Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Row>

                <Row className="m-3">
                  <Form.Group as={Col} md="12" className="mx-auto">
                    <InputGroup>
                      <InputGroup.Text>Meeting Subject/Title--</InputGroup.Text>
                      <FormControl
                        required
                        id="inlineFormInputGroupEndDate"
                        type="text"
                        name="title"
                        value={input.title}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback></Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Row>

                <Row className="m-3">
                  <Form.Group className="mb-3">
                    <InputGroup>
                      <FormControl
                        required
                        id="inlineFormInputGroupdepartmentdescription"
                        type="text"
                        placeholder="Meeting Notes"
                        name="meetingnotes"
                        as="textarea"
                        rows={5}
                        value={input.meetingnotes}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="m-3">
                  <Col md="4">
                    <Form.Group>
                      <InputGroup>
                        <InputGroup.Text>Reward Type</InputGroup.Text>
                        <Form.Select
                          type="text"
                          placeholder="Role"
                          name="reward"
                          value={input.reward}
                          onChange={handleChange}
                        >
                          <option value="bonus" key="1">
                            Bonus
                          </option>
                          <option value="commendationLetter" key="2">
                            Commendation Letter
                          </option>
                          <option value="promotion" key="3">
                            Promotion
                          </option>
                          <option value="none" key="2">
                            None
                          </option>
                        </Form.Select>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col md="4">
                    <Form.Group>
                      <InputGroup>
                        <InputGroup.Text>Sanction</InputGroup.Text>
                        <Form.Select
                          type="text"
                          placeholder="Sanction"
                          name="sanction"
                          value={input.sanction}
                          onChange={handleChange}
                        >
                          <option value="warning" key="1">
                            Warning
                          </option>
                          <option value="commendationLetter" key="2">
                            Separation
                          </option>
                          <option value="none" key="2">
                            None
                          </option>
                        </Form.Select>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col md="4">
                    <Form.Group className="mb-3">
                      <InputGroup>
                        <FormControl
                          required
                          id="inlineFormInputGroupdepartmentdescription"
                          type="text"
                          placeholder="Other Intervention: Counselling, Training and Development"
                          name="otherintervention"
                          as="textarea"
                          rows={3}
                          value={input.otherintervention}
                          onChange={handleChange}
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </Row>
              </Row>
              <Row className="m-3">
                <Col></Col>
                <Col md="3">
                  <Button type="submit" variant="success">
                    Submit Meeting Notes
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default CommitteeAppraisal;
