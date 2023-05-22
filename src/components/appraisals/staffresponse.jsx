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
import NavBarMain from "../NavbarMain";
import LeftMenusGeneral from "../leftmenusgeneral";

const StaffReponse = () => {
  const [validated, setValidated] = useState(false);
  const [input, setInput] = useState({
    responsenotes: "",
    response: "",
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
                <h2>Staff Response on Appraisal</h2>

                <div className="sectiondescription">
                  <h6 className="leading">
                    Where the Appraisee is not satisfied with the SPAS
                    evaluation, he/she may appeal to the DPMC/CHRAC as provided
                    in the SPAS guidelines.
                  </h6>
                </div>
              </Row>
              <Row className="adddataform">
                <Row className="m-4">
                  <h3>
                    Thank your for your response on my Staff Appraisal Report. I
                    appreciate your comments.
                  </h3>
                </Row>
                <Row className="m-3">
                  <Col md="12">
                    <Form.Group>
                      <InputGroup>
                        <InputGroup.Text>Response: I </InputGroup.Text>
                        <Form.Select
                          type="text"
                          placeholder="Role"
                          name="response"
                          value={input.response}
                          onChange={handleChange}
                        >
                          <option value="promotion" key="1">
                            Agree
                          </option>
                          <option value="salaryreview" key="2">
                            DisAgree
                          </option>
                        </Form.Select>
                        <InputGroup.Text>
                          With the submitted Staff Appraisal Report{" "}
                        </InputGroup.Text>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="m-3">
                  <Form.Group className="mb-3">
                    <InputGroup>
                      <FormControl
                        required
                        id="inlineFormInputGroupdepartmentdescription"
                        type="text"
                        placeholder=" Write here reasons/comments for Agreement/Disagreement: .. I.e. Thank you for recognizing the effort I put in the Tasks Allocated. I appreciate/Disagree with your comments. I agree/disagree that I ...... "
                        name="responsenotes"
                        as="textarea"
                        rows={5}
                        value={input.responsenotes}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>
                </Row>
              </Row>
              <Row className="m-3">
                <Col></Col>
                <Col md="3">
                  <Button type="submit" variant="success">
                    Submit Response
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

export default StaffReponse;
