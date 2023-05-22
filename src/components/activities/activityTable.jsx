import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import Table from "../../common/table";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditActivity from "./editactivity";

const Activities = ({
  activities,
  onSort,
  sortColumn,
  count,
  name,
  show,
  handleClose,
  handleShow,
  loading,
}) => {
  let numbering = 1;
  const columns = [
    {
      key: "count",
      label: "#",
      content: () => numbering++ - activities.length,
    },
    {
      path: "activityno",
      label: "Activity No",
      content: (activity) => (
        <Link to={`/activity/:id${activity._id}`}>{activity.activityno}</Link>
      ),
    },
    { path: "activityname", label: "Activity Name" },
    { path: "activitydescription", label: "Activity Description" },
    { path: "department.departmentname", label: "Department" },
    { path: "project.projectno", label: "Project No" },

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
    {
      key: "activities",
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
        data={activities}
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
          <EditActivity />
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

export default Activities;
