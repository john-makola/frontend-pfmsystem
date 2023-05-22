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

const LeftMenusGeneralUser = () => {
  const [sectors, setSectors] = useState(false);
  const [targets, setTargets] = useState(false);
  const [activity, setActivity] = useState(false);
  const [project, setProject] = useState(false);
  const [trainings, setTrainings] = useState(false);
  const [appraisals, setAppraisals] = useState(false);
  const [reviews, setReviews] = useState(false);
  const [feedback, setFeedback] = useState(false);

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
                              <ListGroup.Item action>
                                View Projects
                              </ListGroup.Item>
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
                              <ListGroup.Item action>
                                View Activities
                              </ListGroup.Item>
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
                              <ListGroup.Item action>Set Target</ListGroup.Item>
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
                            to="/staffresponse"
                          >
                            <ListGroup.Item action>
                              Staff Response
                            </ListGroup.Item>
                          </Link>

                          <Link
                            style={{ textDecoration: "none" }}
                            to="/appraisals"
                          >
                            <ListGroup.Item action>
                              Appraisal Report
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
            {/* Reviews Appraisal Menu */}
            <ListGroup.Item className="list-group-item-success">
              <h6> Reviews {"&"} Feedback</h6>

              <Col>
                {/*Reviews */}
                <Row>
                  {" "}
                  <ListGroup.Item
                    action
                    id="reviews"
                    onClick={() => setReviews(!reviews)}
                    className="d-flex "
                  >
                    <Col md="1">
                      <FaGooglePlay style={{ color: "green" }} />
                    </Col>
                    <Col>
                      Reviews ....
                      {reviews && (
                        <Row>
                          <Link
                            style={{ textDecoration: "none" }}
                            to="/quartelyreview"
                          >
                            <ListGroup.Item action>
                              Quartely Review
                            </ListGroup.Item>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            to="/midyearreview"
                          >
                            <ListGroup.Item action>
                              Mid-Year-Review
                            </ListGroup.Item>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            to="/annualreview"
                          >
                            <ListGroup.Item action>
                              Annual Review
                            </ListGroup.Item>
                          </Link>
                        </Row>
                      )}
                    </Col>
                  </ListGroup.Item>{" "}
                </Row>
                {/* FeedBack */}
                <Row>
                  {" "}
                  <ListGroup.Item
                    action
                    id="feedback"
                    onClick={() => setFeedback(!feedback)}
                    className="d-flex "
                  >
                    <Col md="1">
                      <FaGooglePlay style={{ color: "green" }} />
                    </Col>
                    <Col>
                      Feedback ....
                      {feedback && (
                        <Row>
                          <Link
                            style={{ textDecoration: "none" }}
                            to="/dashboard"
                          >
                            <ListGroup.Item action>
                              Supervisor Feedback Report
                            </ListGroup.Item>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            to="/dashboard"
                          >
                            <ListGroup.Item action>
                              HR Feedback Report
                            </ListGroup.Item>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            to="/dashboard"
                          >
                            <ListGroup.Item action>
                              County Service Board{" "}
                            </ListGroup.Item>
                          </Link>
                        </Row>
                      )}
                    </Col>
                  </ListGroup.Item>{" "}
                </Row>
              </Col>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default LeftMenusGeneralUser;
