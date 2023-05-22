import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import navlogo from "../components/images/Navlogo.png";
import Help from "../components/images/help.png";
import userPic from "../components/images/userphotos/Abduba.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBox from "../common/searchBox";
import { getProjects } from "../services/projectService";
import { getDepartments } from "../services/departmentService";

const style = {
  backgroundColor: "#8ec449",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "2px",
  position: "fixed",
  left: "0",
  top: "0",
  height: "80px",
  width: "100%",
};

const phantom = {
  display: "block",
  padding: "2px",
  height: "80px",
  width: "100%",
};

const NavBarMain = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            {" "}
            <img src={navlogo} alt="Perfomance Management System" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing" id="collasible-nav-dropdown">
                Projects
              </Nav.Link>
              <NavDropdown.Item href="#action/3.1">
                Add Project
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                View Projects
              </NavDropdown.Item>
              <Nav.Link href="#features" id="collasible-nav-dropdown">
                Activities
              </Nav.Link>
              <Nav.Link href="#pricing" id="collasible-nav-dropdown">
                Targets
              </Nav.Link>
              <Nav.Link href="#features" id="collasible-nav-dropdown">
                Trainings
              </Nav.Link>
              <Nav.Link href="#features" id="collasible-nav-dropdown">
                Feedback
              </Nav.Link>
              <Nav.Link href="#pricing" id="collasible-nav-dropdown">
                Staff Appraisal
              </Nav.Link>
              <Nav.Link href="#pricing" id="collasible-nav-dropdown">
                Projects
              </Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarMain;

//   render() {
//     const { searchQuery } = this.state;
//     return (
//       <div className="navbarstyles  hidden-xs col-sm-10" style={phantom}>
//         <div style={style}>
//           <Container fluid>
//             <Row>
//               <Col className=" ml-2">
//                 {" "}
//                 <img src={navlogo} alt="Perfomance Management System" />
//               </Col>
//               <Col lg={4}></Col>
//               <Col lg className="accountsdiv d-sm-none d-md-flex">
//                 <img
//                   src={Help}
//                   alt="Perfomance Management System"
//                   className="helppic m-3 "
//                 />
//                 <img src={userPic} className="profilepic  m-1" alt="user" />
//                 <p className="m-2">
//                   Abduba Mollu <br /> <span>Logout</span>
//                 </p>
//               </Col>
//             </Row>
//           </Container>
//         </div>
//       </div>
//     );
//   }
// }
// export default NavBarMain;
