import ListGroup from "react-bootstrap/ListGroup";
import React, { useState } from "react";
import jwtDecode from "jwt-decode";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBarMain from "./NavbarMain";
import { Link } from "react-router-dom";
import { FaGooglePlay, FaHome } from "react-icons/fa";
import { GiStairsGoal, GiDiceTarget } from "react-icons/gi";
import { AiOutlineAim } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";

const LeftMenusGeneralPrivilaged = () => {
  const [sectors, setSectors] = useState(false);
  const [targets, setTargets] = useState(false);
  const [activity, setActivity] = useState(false);
  const [project, setProject] = useState(false);
  const [trainings, setTrainings] = useState(false);
  const [appraisals, setAppraisals] = useState(false);
  const [reviews, setReviews] = useState(false);
  const [feedback, setFeedback] = useState(false);

  return (
    <div className="d-sm-none d-md-block">
      <Row>
        <Col>
          <ListGroup>
            {/* Isiolo County Vision Mission Goals Sectors Objectives*/}

            <ListGroup.Item className="list-group-item-success p-3">
              <h6>County Goals, Objectives </h6>
              {/* About us Menu */}
              <div>
                <Link style={{ textDecoration: "none" }} to="/dashboard">
                  <ListGroup.Item className="d-flex  ">
                    <Col md="1">
                      <FaHome style={{ color: "#ee9b00" }} />
                    </Col>
                    <Col>Home</Col>
                  </ListGroup.Item>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/countyvision">
                  <ListGroup.Item className="d-flex ">
                    <Col md="1">
                      <AiOutlineAim style={{ color: "#ee9b00" }} />
                    </Col>
                    <Col>County Vision</Col>
                  </ListGroup.Item>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/countymission">
                  <ListGroup.Item className="d-flex ">
                    <Col md="1">
                      <GiStairsGoal style={{ color: "#ee9b00" }} />
                    </Col>
                    <Col>County Mission</Col>
                  </ListGroup.Item>
                </Link>

                <Link style={{ textDecoration: "none" }} to="/countygoals">
                  <ListGroup.Item className="d-flex ">
                    <Col md="1">
                      <GiDiceTarget style={{ color: "#ee9b00" }} />
                    </Col>
                    <Col>County Goals and Objectives</Col>
                  </ListGroup.Item>
                </Link>
              </div>

              <ListGroup.Item
                action
                id="sectors"
                onClick={() => setSectors(!sectors)}
                className="d-flex "
              >
                <Col md="1">
                  <FaGooglePlay style={{ color: "green" }} />
                  ....
                </Col>

                <Col>
                  Sectors / Sub-Sectors / Department Goals
                  {sectors && (
                    <Row>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/agrilivefishdev"
                      >
                        <ListGroup.Item action>
                          Agriculture, Livestock and Fishery Development
                        </ListGroup.Item>
                      </Link>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/waterenergyenv"
                      >
                        <ListGroup.Item action>
                          Water, Energy, Environment Natural Resource and
                          Climate Change
                        </ListGroup.Item>
                      </Link>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/healthservices"
                      >
                        <ListGroup.Item action>Health Services</ListGroup.Item>
                      </Link>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/landsurbanplanning"
                      >
                        <ListGroup.Item action>
                          Lands, Urban Planning Roads, Transport and public
                          works
                        </ListGroup.Item>
                      </Link>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/tourismwildlifetrade"
                      >
                        <ListGroup.Item action>
                          Tourism, Wildlife, Trade, Public Service and County
                          Administration
                        </ListGroup.Item>
                      </Link>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/educationvocationaltraining"
                      >
                        <ListGroup.Item action>
                          Education, vocational training, youth, sports, culture
                          and social service
                        </ListGroup.Item>
                      </Link>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/fiananceeconomicplanning"
                      >
                        <ListGroup.Item action>
                          Finance, Economic Planning, ICT and Conflict
                          Resolution
                        </ListGroup.Item>
                      </Link>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/officeofgovdpgov"
                      >
                        <ListGroup.Item action>
                          Office of the Governor and Deputy Governor
                        </ListGroup.Item>
                      </Link>
                      <Link
                        style={{ textDecoration: "none" }}
                        to="/countyassembley"
                      >
                        <ListGroup.Item action>
                          County Assembly Services
                        </ListGroup.Item>
                      </Link>
                    </Row>
                  )}
                </Col>
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-success">
                <h6>Work Planning</h6>

                <Col>
                  {/* Projects */}
                  <Row>
                    {" "}
                    <ListGroup.Item
                      action
                      id="countyprojects"
                      onClick={() => setProject(!project)}
                      className="d-flex "
                    >
                      <Col md="1">
                        <FaGooglePlay style={{ color: "green" }} />
                      </Col>
                      <Col>
                        Projects ....
                        {project && (
                          <Row>
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/projects"
                            >
                              <ListGroup.Item action>Projects</ListGroup.Item>
                            </Link>
                          </Row>
                        )}
                      </Col>
                    </ListGroup.Item>{" "}
                  </Row>
                  {/* Activities */}
                  <Row>
                    {" "}
                    <ListGroup.Item
                      action
                      id="countyplanning"
                      onClick={() => setActivity(!activity)}
                      className="d-flex "
                    >
                      <Col md="1">
                        <FaGooglePlay style={{ color: "green" }} />
                      </Col>
                      <Col>
                        Activities ....
                        {activity && (
                          <Row>
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/activities"
                            >
                              <ListGroup.Item action>Activities</ListGroup.Item>
                            </Link>
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/tasks"
                            >
                              <ListGroup.Item action>Tasks</ListGroup.Item>
                            </Link>
                          </Row>
                        )}
                      </Col>
                    </ListGroup.Item>{" "}
                  </Row>

                  {/* Targets */}
                  <Row>
                    {" "}
                    <ListGroup.Item
                      action
                      id="countytargets"
                      onClick={() => setTargets(!targets)}
                      className="d-flex "
                    >
                      <Col md="1">
                        <FaGooglePlay style={{ color: "green" }} />
                      </Col>
                      <Col>
                        Targets ....
                        {targets && (
                          <Row>
                            <Link
                              style={{ textDecoration: "none" }}
                              to="/targets"
                            >
                              <ListGroup.Item action>Targets</ListGroup.Item>
                            </Link>
                          </Row>
                        )}
                      </Col>
                    </ListGroup.Item>{" "}
                  </Row>
                </Col>
              </ListGroup.Item>
            </ListGroup.Item>

            {/* Staff Appraisal Menu */}
            <ListGroup.Item className="list-group-item-warning">
              <h6>Staff Appraisal </h6>

              <Col>
                {/* Staff Appraisal */}
                <Row>
                  {" "}
                  <ListGroup.Item
                    action
                    id="staffappraisal"
                    onClick={() => setAppraisals(!appraisals)}
                    className="d-flex "
                  >
                    <Col md="1">
                      <FaGooglePlay style={{ color: "green" }} />
                    </Col>
                    <Col>
                      Appraisals ....
                      {appraisals && (
                        <Row>
                          <Link
                            style={{ textDecoration: "none" }}
                            to="/selfappraisal"
                          >
                            <ListGroup.Item action>
                              Staff Self Appraisal
                            </ListGroup.Item>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            to="/supervisorappraisal"
                          >
                            <ListGroup.Item action>
                              Supervisor Appraisal
                            </ListGroup.Item>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            to="/appraisalreviewmeeting"
                          >
                            <ListGroup.Item action>
                              Appraisal Review Meeting
                            </ListGroup.Item>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            to="/staffresponse"
                          >
                            <ListGroup.Item action>
                              Staff Response
                            </ListGroup.Item>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            to="/committeeappraisal"
                          >
                            <ListGroup.Item action>
                              Committee Appraisal
                            </ListGroup.Item>
                          </Link>

                          <Link
                            style={{ textDecoration: "none" }}
                            to="/appraisals"
                          >
                            <ListGroup.Item action>
                              Appraisal Reports
                            </ListGroup.Item>
                          </Link>
                        </Row>
                      )}
                    </Col>
                  </ListGroup.Item>{" "}
                </Row>
                <Row>
                  <Link style={{ textDecoration: "none" }} to="/trainings">
                    <ListGroup.Item className="d-flex ">
                      <Col md="1">
                        <AiOutlineAim style={{ color: "#ee9b00" }} />
                      </Col>
                      <Col>Trainings</Col>
                    </ListGroup.Item>
                  </Link>
                </Row>

                {/* FeedBack */}
              </Col>
            </ListGroup.Item>

            {/* Employees Listings Departments Sectors Job Groups */}
            <ListGroup.Item className="list-group-item-warning">
              <h6>Users Management Panel</h6>
              <Link style={{ textDecoration: "none" }} to="/employees">
                <ListGroup.Item className="d-flex ">
                  {" "}
                  <Col md="1">
                    <BsPeopleFill style={{ color: "#ee9b00" }} />
                  </Col>
                  <Col>Employees Listings</Col>
                </ListGroup.Item>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/departments">
                <ListGroup.Item className="d-flex ">
                  {" "}
                  <Col md="1">
                    <BsPeopleFill style={{ color: "#ee9b00" }} />
                  </Col>
                  <Col>Sectors / Sub Sectors Listings</Col>
                </ListGroup.Item>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/jobgroups">
                <ListGroup.Item className="d-flex ">
                  {" "}
                  <Col md="1">
                    <BsPeopleFill style={{ color: "#ee9b00" }} />
                  </Col>
                  <Col>Job Groups</Col>
                </ListGroup.Item>
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default LeftMenusGeneralPrivilaged;
