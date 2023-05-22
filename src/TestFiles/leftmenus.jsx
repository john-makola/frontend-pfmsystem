import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Col from "react-bootstrap/Col";
import CountyMission from "./county/countymission";
import CountyVision from "./county/countyvision";
import Login from "./login";
import CountyGoals from "./county/countygoals";
import EmployeeRegistration from "./accounts/employeeregistration";
import Department from "./accounts/department";
import Roles from "./accounts/roles";
import AddProjects from "./projects/addprojects";
import EditProjects from "./projects/editProjects";
import ViewProjects from "./projects/viewprojects";
import Activities from "./activities/addactivities";
import EditActivities from "./activities/editactivities";
import ViewActivities from "./activities/viewactivities";
import Targets from "./targets/addtargets";
import EditTargets from "./targets/edittargets";
import ViewTargets from "./targets/viewtargets";
import MainDashBoard from "./dashboard";
import Workplan from "./workplans/addworkplan";
import NavBarMain from "./NavbarMain";

const LeftMenus = () => {
  return (
    <div>
      <Row className="m-3">
        <NavBarMain />
      </Row>
      <Row className="mt-5">
        <Tab.Container
          fluid
          id="list-group-tabs-example"
          defaultActiveKey="#link0"
        >
          <Row>
            <Col lg={3}>
              <ListGroup>
                <ListGroup.Item>
                  {/* <Link to="/">Logout</Link> */}
                  <h6>Quick Links</h6>
                </ListGroup.Item>
                {/* About us Menu */}
                <ListGroup.Item action href="#link0">
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
            <Col>
              <Tab.Content className="justify-content-md-center">
                <Tab.Pane eventKey="#link0">
                  <MainDashBoard />
                </Tab.Pane>
                <Tab.Pane eventKey="#link1">
                  <CountyMission />
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                  <CountyGoals />
                </Tab.Pane>
                <Tab.Pane eventKey="#link3">
                  <EmployeeRegistration />
                </Tab.Pane>
                <Tab.Pane eventKey="#link4">
                  <Department />
                </Tab.Pane>
                <Tab.Pane eventKey="#link5">
                  <Roles />
                </Tab.Pane>
                <Tab.Pane eventKey="#link6">
                  <AddProjects />
                </Tab.Pane>
                <Tab.Pane eventKey="#link7">
                  <EditProjects />
                </Tab.Pane>
                <Tab.Pane eventKey="#link8">
                  <ViewProjects />
                </Tab.Pane>
                <Tab.Pane eventKey="#link9">
                  <Activities />
                </Tab.Pane>
                <Tab.Pane eventKey="#link10">
                  <EditActivities />
                </Tab.Pane>
                <Tab.Pane eventKey="#link11">
                  <ViewActivities />
                </Tab.Pane>
                <Tab.Pane eventKey="#link12">
                  <Targets />
                </Tab.Pane>
                <Tab.Pane eventKey="#link13">
                  <EditTargets />
                </Tab.Pane>
                <Tab.Pane eventKey="#link14">
                  <ViewTargets />
                </Tab.Pane>
                <Tab.Pane eventKey="#link15">
                  <Login />
                </Tab.Pane>
                <Tab.Pane eventKey="#link16">
                  <Workplan />
                </Tab.Pane>
                <Tab.Pane eventKey="#link17">
                  <CountyMission />
                </Tab.Pane>
                <Tab.Pane eventKey="#link18">
                  <Login />
                </Tab.Pane>
                <Tab.Pane eventKey="#link19">
                  <CountyVision />
                </Tab.Pane>
                <Tab.Pane eventKey="#link20">
                  <CountyMission />
                </Tab.Pane>
                <Tab.Pane eventKey="#link21">
                  <Login />
                </Tab.Pane>
                <Tab.Pane eventKey="#link22">
                  <CountyVision />
                </Tab.Pane>
                <Tab.Pane eventKey="#link23">
                  <CountyMission />
                </Tab.Pane>
                <Tab.Pane eventKey="#link24">
                  <Login />
                </Tab.Pane>
                <Tab.Pane eventKey="#link25">
                  <CountyVision />
                </Tab.Pane>
                <Tab.Pane eventKey="#link26">
                  <CountyMission />
                </Tab.Pane>
                <Tab.Pane eventKey="#link27">
                  <Login />
                </Tab.Pane>
                <Tab.Pane eventKey="#link28">
                  <CountyVision />
                </Tab.Pane>
                <Tab.Pane eventKey="#link29">
                  <CountyMission />
                </Tab.Pane>
                <Tab.Pane eventKey="#link30">
                  <Login />
                </Tab.Pane>
                <Tab.Pane eventKey="#link31">
                  <CountyVision />
                </Tab.Pane>
                <Tab.Pane eventKey="#link32">
                  <CountyMission />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Row>
    </div>
  );
};

export default LeftMenus;
