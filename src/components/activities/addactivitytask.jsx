import React from "react";
import jwtDecode from "jwt-decode";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FormControl } from "react-bootstrap";

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
