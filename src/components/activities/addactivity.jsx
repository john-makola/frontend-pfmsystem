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
import "react-toastify/dist/ReactToastify.css";

const AddActivities = ({
  handleChange,
  activityno,
  activityname,
  activitydescription,
  startdate,
  enddate,
  project,
  department,
  specialnotes,
  projects,
  departments,
  entryadded,
}) => {
  return (
    <div>
      <Row>
        <Col md="12">
          <Row className="m-5 adddataform">
            <h4 className="leading pt-4">
              Enter a new <strong> County Activity</strong> based on a{" "}
              <strong>Department or Project</strong>
            </h4>
            <Row className="m-3">
              <Form.Group as={Col} md="4">
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
                    value={activityno}
                    onChange={handleChange}
                  />
                </InputGroup>
                <Form.Control.Feedback></Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="8">
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
                    value={activityname}
                    onChange={handleChange}
                  />
                </InputGroup>
                <Form.Control.Feedback></Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="m-3">
              <Form.Group as={Col} md="6">
                <InputGroup>
                  <InputGroup.Text>Department / Duty Station</InputGroup.Text>
                  <Form.Select
                    required
                    type="text"
                    placeholder="Department Name"
                    name="department"
                    value={department}
                    onChange={handleChange}
                  >
                    {departments.map((d) => (
                      <option value={d._id}>{d.departmentname}</option>
                    ))}
                  </Form.Select>
                </InputGroup>
                <Form.Control.Feedback></Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6">
                <InputGroup>
                  <InputGroup.Text>Project</InputGroup.Text>

                  <Form.Select
                    input
                    type="search"
                    placeholder="Project No"
                    name="project"
                    value={project}
                    onChange={handleChange}
                  >
                    {projects.map((p) => (
                      <option value={p._id}>{p.projectname}</option>
                    ))}
                  </Form.Select>
                </InputGroup>
                <Form.Control.Feedback></Form.Control.Feedback>
              </Form.Group>
            </Row>

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
                    value={activitydescription}
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
                    value={startdate}
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
                    value={enddate}
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
                    value={specialnotes}
                    onChange={handleChange}
                  />
                </InputGroup>
              </Form.Group>
            </Row>
            <Row>
              <Row className={entryadded ? "m-3 entryrecordalert" : "m-3"}>
                <h5>{entryadded ? entryadded : null}</h5>
              </Row>
            </Row>
          </Row>

          <Row className="m-3"></Row>
        </Col>
      </Row>
    </div>
  );
};

export default AddActivities;
