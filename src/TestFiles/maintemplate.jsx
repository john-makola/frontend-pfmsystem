import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import CountyMission from "../components/county/countymission";
import HomePage from "./homepage";

const MainTemplate = () => {
  const [activeLink, setActiveLink] = useState(false);
  const [components, setComponents] = useState(0);

  const HandleSelected = (link) => {
    link = activeLink;

    link
      ? setActiveLink(false) && setComponents(0)
      : setActiveLink(true) && setComponents(1);

    console.log(link, components);
  };

  return (
    <div>
      <Row>
        <Col lg={3}>
          <ListGroup>
            <ListGroup.Item>
              {/* <Link to="/">Logout</Link> */}
              <h6>Quick Links</h6>
            </ListGroup.Item>
            {/* About us Menu */}
            <ListGroup.Item
              name={components}
              value={activeLink}
              onClick={HandleSelected}
              action
              href="#link0"
            >
              Home
            </ListGroup.Item>
            <ListGroup.Item action href="#link1">
              County Mission
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              County Goals and Objectives
            </ListGroup.Item>
            {/* Accounts*/}
            <ListGroup.Item className="list-group-item-warning">
              <h6>Accounts</h6>
              <ListGroup.Item action href="#link3">
                Employees
              </ListGroup.Item>
              <ListGroup.Item action href="#link4">
                Department
              </ListGroup.Item>
              <ListGroup.Item action href="#link5">
                Roles
              </ListGroup.Item>
            </ListGroup.Item>
            {/* Project Menu */}
            <ListGroup.Item className="list-group-item-success">
              <h6>Project</h6>
              <ListGroup.Item action href="#link6">
                Add New
              </ListGroup.Item>
              <ListGroup.Item action href="#link7">
                Edit Project
              </ListGroup.Item>
              <ListGroup.Item action href="#link8">
                View Projects
              </ListGroup.Item>
            </ListGroup.Item>

            {/* Activity Menu */}
            <ListGroup.Item className="list-group-item-warning">
              <h6>Activity</h6>
              <ListGroup.Item action href="#link9">
                Add Activity
              </ListGroup.Item>
              <ListGroup.Item action href="#link10">
                Edit Activity
              </ListGroup.Item>
              <ListGroup.Item action href="#link11">
                View Activity
              </ListGroup.Item>
            </ListGroup.Item>
            {/* Target Menu */}
            <ListGroup.Item className="list-group-item-success">
              <h6>Targets</h6>
              <ListGroup.Item action href="#link12">
                Add Target
              </ListGroup.Item>
              <ListGroup.Item action href="#link13">
                Edit Target
              </ListGroup.Item>
              <ListGroup.Item action href="#link14">
                View Target
              </ListGroup.Item>
            </ListGroup.Item>
            {/* WorkPlan*/}
            <ListGroup.Item className="list-group-item-warning">
              <h6>Workplan</h6>
              <ListGroup.Item action href="#link16">
                Add Workplan
              </ListGroup.Item>
              <ListGroup.Item action href="#link17">
                View Workplan
              </ListGroup.Item>
            </ListGroup.Item>
            {/* Training Menu */}
            <ListGroup.Item className="list-group-item-success">
              <h6>Training</h6>
              <ListGroup.Item action href="#link18">
                Add Training
              </ListGroup.Item>
              <ListGroup.Item action href="#link19">
                View Training
              </ListGroup.Item>
              <ListGroup.Item action href="#link20">
                Edit Training
              </ListGroup.Item>
            </ListGroup.Item>
            {/* FeedBack*/}
            <ListGroup.Item className="list-group-item-warning">
              <h6>Feedback</h6>
              <ListGroup.Item action href="#link21">
                Employee Feedback
              </ListGroup.Item>
              <ListGroup.Item action href="#link22">
                Supervisor Comments
              </ListGroup.Item>
              <ListGroup.Item action href="#link23">
                HR Comments
              </ListGroup.Item>
            </ListGroup.Item>
            {/* Staff Appraisal Menu */}
            <ListGroup.Item className="list-group-item-success">
              <h6>Staff Appraisal</h6>
              <ListGroup.Item action href="#link24">
                Staff Appraisal Form
              </ListGroup.Item>
              {/* Reports*/}
              <ListGroup.Item className="list-group-item-warning">
                <h6>Reports</h6>
                <ListGroup.Item action href="#link24">
                  Target Reports
                </ListGroup.Item>
                <ListGroup.Item action href="#link26">
                  Activity Reports
                </ListGroup.Item>
                <ListGroup.Item action href="#link27">
                  Project Reports
                </ListGroup.Item>
                <ListGroup.Item action href="#link28">
                  Annual Reports
                </ListGroup.Item>
                <ListGroup.Item action href="#link29">
                  Semi-Annual Reports
                </ListGroup.Item>
                <ListGroup.Item action href="#link30">
                  Quartely Reports
                </ListGroup.Item>
                <ListGroup.Item action href="#link31">
                  Employee Reports
                </ListGroup.Item>
                <ListGroup.Item action href="#link32">
                  Workplans Reports
                </ListGroup.Item>
              </ListGroup.Item>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md="6"></Col>
        <Col>
          {() => {
            switch (components) {
              case 0:
                <HomePage />;

              default:
                return null;
            }
          }}
        </Col>
      </Row>
    </div>
  );
};

export default MainTemplate;
