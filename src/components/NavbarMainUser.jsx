import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, NavLink, Col } from "react-bootstrap";
import navlogo from "../components/images/Navlogo.png";
import Help from "../components/images/help.png";
import userPic from "../components/images/userphotos/Abduba.jpg";
import { useHistory } from "react-router";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";

const NavbarMainUser = ({
  username,
  firstname,
  surname,
  designation,
  department,
}) => {
  const history = useHistory();
  const handlelogout = () => {
    history.replace("/login");
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        fixed="top"
        className="navbarstylesmain"
      >
        <Navbar.Brand>
          <img src={navlogo} alt="Perfomance Management System" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/dashboard"
              >
                Home
              </Link>
            </NavLink>
            {/* County Goals & Objectives */}
            {/* <NavDropdown
              title="County Goals"
              style={{ color: "red" }}
              id="collasible-nav-dropdown"
            > */}
            <NavDropdownMenu
              title="County Planning"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item className="navdropdown">
                <Link style={{ textDecoration: "none" }} to="/countyvision">
                  County Vision
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navdropdown">
                <Link style={{ textDecoration: "none" }} to="/countymission">
                  County Mission
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navdropdown">
                <Link style={{ textDecoration: "none" }} to="/countygoals">
                  County Goals {"&"} Objectives
                </Link>
              </NavDropdown.Item>

              <DropdownSubmenu
                className="navdropdown"
                title="Sectors/ Departments"
              >
                <NavDropdown.Item className="navdropdown">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/agrilivefishdev"
                  >
                    Agriculture, Livestock and Fishery..
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="navdropdown">
                  <Link style={{ textDecoration: "none" }} to="/waterenergyenv">
                    Water, Energy, Environment ....
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="navdropdown">
                  <Link style={{ textDecoration: "none" }} to="/healthservices">
                    Health Services ....
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="navdropdown">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/landsurbanplanning"
                  >
                    Lands, Urban Planning ....
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="navdropdown">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/tourismwildlifetrade"
                  >
                    Tourism, Wildlife, Trade ....
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="navdropdown">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/educationvocationaltraining"
                  >
                    Education, vocational training....
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="navdropdown">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/fiananceeconomicplanning"
                  >
                    Finance, Economic Planning....
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="navdropdown">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/officeofgovdpgov"
                  >
                    Office of the Governor and Deputy Governor
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="navdropdown">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/countyassembley"
                  >
                    County Assembly Services
                  </Link>
                </NavDropdown.Item>
              </DropdownSubmenu>

              {/* </NavDropdown> */}
              <hr></hr>
              <DropdownSubmenu
                className="navdropdown"
                title="Projects"
                style={{ textDecoration: "none" }}
              >
                <NavDropdown.Item className="navdropdown">
                  <Link style={{ textDecoration: "none" }} to="/projects">
                    View Projects
                  </Link>
                </NavDropdown.Item>
              </DropdownSubmenu>
              <hr></hr>
              <DropdownSubmenu
                className="navdropdown"
                title="Activities"
                style={{ textDecoration: "none" }}
              >
                <NavDropdown.Item className="navdropdown">
                  <Link style={{ textDecoration: "none" }} to="/activities">
                    View Project Activities
                  </Link>
                </NavDropdown.Item>
              </DropdownSubmenu>
              <hr></hr>
              <DropdownSubmenu
                className="navdropdown"
                title="Targets"
                style={{ textDecoration: "none" }}
              >
                <NavDropdown.Item className="navdropdown">
                  <Link style={{ textDecoration: "none" }} to="/addtarget">
                    Add Targets
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="navdropdown">
                  <Link style={{ textDecoration: "none" }} to="/targetlistings">
                    View Activity Targets
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="navdropdown">
                  <Link style={{ textDecoration: "none" }} to="/targetlistings">
                    View Employee Targets
                  </Link>
                </NavDropdown.Item>
              </DropdownSubmenu>
            </NavDropdownMenu>

            {/* Appraisals - Reviews and Feedback */}
            <NavDropdown title="Staff Appraisal " id="collasible-nav-dropdown">
              <NavDropdown.Item className="navdropdown">
                <Link style={{ textDecoration: "none" }} to="/addtarget">
                  Self Appraisal - Evaluation
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item className="navdropdown">
                <Link style={{ textDecoration: "none" }} to="/targets">
                  Employee Appraisal Report
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            {/*  Reviews and Feedback */}
            <NavDropdown title="Reviews-Feedback " id="collasible-nav-dropdown">
              <NavDropdown.Item className="navdropdown">
                <Link style={{ textDecoration: "none" }} to="/targets">
                  Quaterly Reviews
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navdropdown">
                <Link style={{ textDecoration: "none" }} to="/targets">
                  Mid Year Reviews
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navdropdown">
                <Link style={{ textDecoration: "none" }} to="/targets">
                  Annual Reviews
                </Link>
              </NavDropdown.Item>
              <hr></hr>
              <NavDropdown.Item className="navdropdown">
                <Link style={{ textDecoration: "none" }} to="/targets">
                  Supervisor Feedback Report
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navdropdown">
                <Link style={{ textDecoration: "none" }} to="/targets">
                  HR Feedback Report
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="navdropdown">
                <Link style={{ textDecoration: "none" }} to="/targets">
                  Committee Feedback Report
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Col lg className="accountsdiv d-sm-none d-md-flex">
              <img
                src={Help}
                alt="Perfomance Management System"
                className="helppic m-3 "
              />
              <img src={userPic} className="profilepic  m-1" alt="user" />

              <p className="m-2">
                {firstname}
                {"__"}
                {surname}
                <br />
                {department}
                <br />

                <span onClick={handlelogout} className="logout success">
                  Logout
                </span>
              </p>
            </Col>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarMainUser;
