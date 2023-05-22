import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import httpservice from "../../../services/httpservice";
import { Row, Col, Button } from "react-bootstrap";
import NavBarMain from "../../NavbarMain";
import LeftMenusGeneral from "../../leftmenusgeneral";
import VisionBody from "../dashboard/visionbody";
import DashBoardRsideMenu from "../../../components/dashboard/dashboardrsidemenu";
import AgriliveFishDevStrategies from "./strategicpriorities/agrilivesishdev";
const HealthServices = () => {
  const [projects, setProjects] = useState([]);
  const [activities, setActivities] = useState([]);
  const [trainings, setTrainings] = useState([]);

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
                  <Row className="m-2">
                    <h1>Health Services</h1>
                  </Row>
                </div>
              </Col>
              <Col lg={3}>
                <h2>Year 2020 -2021 </h2>
                <input
                  type="date"
                  placeholder="MM/DD/YYYY"
                  onfocus="(this.type='date')"
                  onblur="(this.type='text')"
                />
                <Row className="m-2">
                  <Button className="btn-warning">Workplans</Button>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row className=" adddataform">
                  <h4>
                    <strong>Vision</strong>{" "}
                  </h4>
                  <h5 className="tabcontentdisplay">
                    Food secure and wealthy county anchored on an innovative,
                    commercially oriented and competitive agriculture sector.
                  </h5>
                </Row>
                <Row className=" adddataform1">
                  <h4>
                    <strong>Mission</strong>{" "}
                  </h4>
                  <h5 className="tabcontentdisplay">
                    To improve the livelihood of Kenyans and ensure food and
                    nutrition security through creation of an enabling
                    environment and ensuring sustainable natural resource
                    management.
                  </h5>
                </Row>
                <Row className=" adddataform">
                  <h4>
                    <strong>Goal</strong>{" "}
                  </h4>
                  <h5 className="tabcontentdisplay">
                    To attain food and nutrition security and income through
                    increased production and value addition in livestock,
                    agriculture and fisheries investments
                  </h5>
                </Row>
                <AgriliveFishDevStrategies />
                <VisionBody />
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

export default HealthServices;
