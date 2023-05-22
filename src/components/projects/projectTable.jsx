import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import Table from "../../common/table";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditProjects from "./editProject";

const ProjectTable = ({
  projects,
  loading,
  onSort,
  sortColumn,
  count,
  name,
  show,
  handleClose,
  handleShow,
}) => {
  let numbering = 1;

  const currFormat = (num) => {
    return parseFloat(num)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  const columns = [
    {
      key: "count",
      label: "#",
      content: () => numbering++ - projects.length,
    },
    {
      path: "projectno",
      label: "Project No",
      content: (project) => (
        <Link to={`/project/${project._id}`}>{project.projectno}</Link>
      ),
    },
    { path: "projectname", label: "Project Name" },
    { path: "projectdescription", label: "Project Description" },
    { path: "department.departmentname", label: "Department" },
    { path: "user.surname", label: "Project Manager" },
    { path: "review", label: "Review Date" },
    {
      path: "budget",
      content: (currency) => currFormat(currency.budget),
      label: "Budget",
    },
    { path: "donor", label: "Donor" },
    { path: "status", label: "Status" },
    {
      path: "startdate",
      content: (date) => moment(date.startdate).format("DD-MM-YYYY"),
      label: "Start Date",
      date: { type: Date, default: Date },
    },

    {
      path: "enddate",
      content: (date) => moment(date.enddate).format("DD-MM-YYYY"),
      label: "End Date",
    },
    { path: "specialnotes", label: "Special Notes" },
    {
      key: "projects",
      label: "Actions",
      content: () => (
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
          <button
            onClick={handleShow}
            className="btn text-warning btn-act"
            data-toggle="modal"
          >
            <i className="material-icons">&#xE254;</i>
          </button>
        </OverlayTrigger>
      ),
    },
  ];

  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  if (loading) {
    return (
      <h1>
        <span
          className="spinner-border"
          style={{
            width: " 3rem",
            height: "3rem",
            textAlign: "center",
            color: "#ee9b00",
          }}
        ></span>
      </h1>
    );
  }

  return (
    <div>
      <Table
        columns={columns}
        data={projects}
        sortColumn={sortColumn}
        onSort={onSort}
        count={count}
        name={name}
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditProjects />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Button
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProjectTable;
