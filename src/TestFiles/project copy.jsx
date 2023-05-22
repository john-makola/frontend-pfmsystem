import React, { Component } from "react";
import ProjectTable from "./projectTable";
import ListGroup from "../../common/listGroup";
import { getprojects } from "../../services/projectService";
import { getDepartments } from "../../services/departmentService";
import { paginate } from "../../utils/paginate";
import _ from "lodash";

class Project extends Component {
  state = {
    projects: [],
    departments: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const departments = [
      { _id: "", name: "All Departments" },
      ...getDepartments(),
    ];

    this.setState({ projects: getprojects(), departments });
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
    this.setState({ selectedDepartment: department, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedDepartment,
      projects: allprojects,
    } = this.state;

    const filtered =
      selectedDepartment && selectedDepartment._id
        ? allprojects.filter((m) => m.department._id === selectedDepartment._id)
        : allprojects;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const projects = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: projects };
  };

  render() {
    const { length: count } = this.state.projects;
    const { pageSize, currentPage, sortColumn } = this.state;

    if (count === 0) return <p>There are no projects in the database.</p>;

    const { totalCount, data: projects } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.departments}
            selectedItem={this.state.selectedDepartment}
            onItemSelect={this.handledepartmentSelect}
          />
        </div>
        <div className="col">
          <ProjectTable
            projects={projects}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            count={totalCount}
          />
        </div>
      </div>
    );
  }
}

export default Project;
