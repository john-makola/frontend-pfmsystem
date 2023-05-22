import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import httpservice from "../../services/httpservice";
import NavBarMain from "../../components/NavbarMain";
import LeftMenusGeneral from "../../components/leftmenusgeneral";
import { Row, Col, Button } from "react-bootstrap";
import DashBoardRsideMenu from "../../components/dashboard/dashboardrsidemenu";
import CountyGoalsBody from "./dashboard/countygoalsbody";

const CountyGoals = () => {
  const [projects, setProjects] = useState([]);
  const [trainings, setTrainings] = useState([]);
  const [activities, setActivities] = useState([]);

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
  const userid = currentuser._id;

  //Load Projects Data from the Server

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

  //Load Data Activities from the Server

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

  //Load Data Trainings from the Server

  useEffect(() => {
    httpservice
      .get("/trainings")
      .then((response) => {
        setTrainings(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          toast("Error Loading Training Data");
        }
      });
  }, [trainings]);

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
                <div className="sectiondescription">
                  <Row className="m-3">
                    <h1>Goals of the Isiolo County </h1>
                  </Row>
                  <Row>
                    <CountyGoalsBody />
                  </Row>
                </div>
              </Col>
              <Col lg={3}>
                <h2>Year 2020 -2021 </h2>
                <input type="date" placeholder="Calender" />
                <Row className="m-3">
                  <Button className="btn-warning">Workplans</Button>
                </Row>
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

export default CountyGoals;
