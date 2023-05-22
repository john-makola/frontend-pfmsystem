import React, { Component } from "react";
import Container from "react-bootstrap/Container";
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

class NavBarMain extends Component {
  state = {
    projects: [],
    departments: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const departments = [
      { _id: "", name: "All Departments" },
      ...getDepartments(),
    ];

    this.setState({ projects: getProjects(), departments });
  }

  handleDelete = (project) => {
    const projects = this.state.projects.filter((m) => m._id !== project._id);
    this.setState({ projects });
  };

  handleLike = (project) => {
    const projects = [...this.state.projects];
    const index = projects.indexOf(project);
    projects[index] = { ...projects[index] };
    projects[index].liked = !projects[index].liked;
    this.setState({ projects });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handledepartmentSelect = (department) => {
    this.setState({
      selectedDepartment: department,
      searchQuery: "",
      currentPage: 1,
    });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleSearch = (query) => {
    this.setState({
      searchQuery: query,
      selectedDepartment: null,
      currentPage: 1,
    });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <div className="navbarstyles  hidden-xs col-sm-10" style={phantom}>
        <div style={style}>
          <Container fluid>
            <Row>
              <Col className=" ml-2">
                {" "}
                <img src={navlogo} alt="Perfomance Management System" />
              </Col>
              <Col lg={4}></Col>
              <Col lg className="accountsdiv d-sm-none d-md-flex">
                <img
                  src={Help}
                  alt="Perfomance Management System"
                  className="helppic m-3 "
                />
                <img src={userPic} className="profilepic  m-1" alt="user" />
                <p className="m-2">
                  Abduba Mollu <br /> <span>Logout</span>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default NavBarMain;
