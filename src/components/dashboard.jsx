import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import DatePickerA from "../common/datepicker";
import { Row, Col, Button, ProgressBar } from "react-bootstrap";
import NavBarMain from "./NavbarMain";
import LeftMenusGeneral from "./leftmenusgeneral";
import DashBoardMainBody from "./dashboard/dashboardbody";
import DashBoardRsideMenu from "./dashboard/dashboardrsidemenu";
import httpservice from "../services/httpservice";

const MainDashBoard = () => {
  const [projects, setProjects] = useState([]);
  const [activities, setActivities] = useState([]);
  const [targets, setTargets] = useState([]);
  const [appraisals, setAppraisals] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [trainings, setTrainings] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [helpCenter, setHelpCenter] = useState([]);
  const [lastUpdatedProjects, setLastUpdatedProjects] = useState([]);
  const [lastUpdatedActivities, setLastUpdatedActivities] = useState([]);
  const [lastUpdatedTargets, setLastUpdatedTargets] = useState([]);
  const [lastUpdatedAppraisals, setLastUpdatedAppraisals] = useState([]);
  const [lastUpdatedFeedbacks, setLastUpdatedFeedbacks] = useState([]);
  const [lastUpdatedTrainings, setLastUpdatedTrainings] = useState([]);
  const [lastUpdatedSectors, setLastUpdatedSectors] = useState([]);
  const [lastUpdatedDepartments, setLastUpdatedDepartments] = useState([]);
  const [lastUpdatedHelpCenter, setLastUpdatedHelpCenter] = useState([]);

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

  //Load Projects Data from the Server

  useEffect(() => {
    httpservice
      .get("/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          toast("Error Loading Projects Data");
        }
      });
  }, [projects]);

  useEffect(() => {
    httpservice
      .get("/lastinsertedProject")
      .then((response) => {
        setLastUpdatedProjects(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
        }
      });
  }, []);

  //Load Activities Data from the Server
  useEffect(() => {
    httpservice
      .get("/activities")
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          toast("Error Loading Activities Data");
        }
      });
  }, [activities]);

  useEffect(() => {
    httpservice
      .get("/lastinsertedActivity")
      .then((response) => {
        setLastUpdatedActivities(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
        }
      });
  }, []);

  //Load Targets Data from the Server
  useEffect(() => {
    httpservice
      .get("/targets")
      .then((response) => {
        setTargets(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          toast("Error Loading Targets Data");
        }
      });
  }, [targets]);

  useEffect(() => {
    httpservice
      .get("//lastinsertedTarget")
      .then((response) => {
        setLastUpdatedTargets(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          toast("Error Loading Last Inserted Target Data");
        }
      });
  }, []);

  //Load Appraisals Data from the Server
  useEffect(() => {
    httpservice
      .get("/selfappraisal")
      .then((response) => {
        setAppraisals(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          toast("Error Loading Appraisals Data");
        }
      });
  }, [appraisals]);

  useEffect(() => {
    httpservice
      .get("/lastinsertedAppraisal")
      .then((response) => {
        setLastUpdatedAppraisals(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
        }
      });
  }, []);

  //Load Feedback Data from the Server
  useEffect(() => {
    httpservice
      .get("/feedbacks")
      .then((response) => {
        setFeedbacks(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
        }
      });
  }, []);

  useEffect(() => {
    httpservice
      .get("/lastinsertedFeedback")
      .then((response) => {
        setLastUpdatedFeedbacks(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
        }
      });
  }, []);

  //Load Trainings Data from the Server
  useEffect(() => {
    httpservice
      .get("/trainings")
      .then((response) => {
        setTrainings(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          toast("Error Loading Projects Data");
        }
      });
  }, [trainings]);

  useEffect(() => {
    httpservice
      .get("/lastinsertedTraining")
      .then((response) => {
        setLastUpdatedTrainings(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
        }
      });
  }, []);

  //Load Sectors Data from the Server
  useEffect(() => {
    httpservice
      .get("/sectors")
      .then((response) => {
        setSectors(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
        }
      });
  }, []);

  useEffect(() => {
    httpservice
      .get("/lastinsertedSector")
      .then((response) => {
        setLastUpdatedSectors(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
        }
      });
  }, []);

  //Load Departments Data from the Server
  useEffect(() => {
    httpservice
      .get("/departments")
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          toast("Error Loading Projects Data");
        }
      });
  }, [departments]);

  useEffect(() => {
    httpservice
      .get("/lastinsertedDepartment")
      .then((response) => {
        setLastUpdatedDepartments(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
        }
      });
  }, []);

  //Load HelpCenter Data from the Server
  useEffect(() => {
    httpservice
      .get("/helpcenter")
      .then((response) => {
        setHelpCenter(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
        }
      });
  }, []);

  useEffect(() => {
    httpservice
      .get("/lastinsertedhelpcenter")
      .then((response) => {
        setLastUpdatedHelpCenter(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
        }
      });
  }, []);

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
            <Row>
              <Col>
                <h2>Quick Summary </h2>

                <div className="sectiondescription">
                  <Row className="m-3">
                    <h5>Overall Projects Status</h5>
                    <ProgressBar>
                      <ProgressBar
                        variant="success"
                        now={5}
                        key={1}
                        label="Quarter 1"
                      />
                      <ProgressBar
                        variant="primary"
                        now={20}
                        key={2}
                        label="Quarter 2"
                      />
                      <ProgressBar
                        variant="warning"
                        now={50}
                        key={3}
                        label="Quarter 3"
                      />
                      <ProgressBar
                        variant="secondary"
                        now={25}
                        key={4}
                        label="Quater 4"
                      />
                    </ProgressBar>
                  </Row>
                </div>
              </Col>
              <Col lg={3}>
                <h2>Year 2020 -2021 </h2>
                <DatePickerA />
                <Row className="m-3">
                  <Button className="btn-warning">Workplans</Button>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <DashBoardMainBody
                  projects={projects}
                  lastUpdatedProjects={lastUpdatedProjects}
                  activities={activities}
                  lastUpdatedActivities={lastUpdatedActivities}
                  targets={targets}
                  lastUpdatedTargets={lastUpdatedTargets}
                  appraisals={appraisals}
                  lastUpdatedAppraisals={lastUpdatedAppraisals}
                  feedbacks={feedbacks}
                  lastUpdatedFeedbacks={lastUpdatedFeedbacks}
                  trainings={trainings}
                  lastUpdatedTrainings={lastUpdatedTrainings}
                  sectors={sectors}
                  lastUpdatedSectors={lastUpdatedSectors}
                  departments={departments}
                  lastUpdatedDepartments={lastUpdatedDepartments}
                  helpCenter={helpCenter}
                  lastUpdatedHelpCenter={lastUpdatedHelpCenter}
                />
              </Col>
              <Col lg="3">
                <DashBoardRsideMenu
                  trainings={trainings}
                  projects={projects}
                  activities={activities}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default MainDashBoard;
