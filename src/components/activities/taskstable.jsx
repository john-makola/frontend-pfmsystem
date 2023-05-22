import React from "react";
import { Link } from "react-router-dom";
import Table from "../../common/table";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditAddActivityTask from "./editactivitytask";

const TaskTable = ({
  tasks,
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
      content: () => numbering++ - tasks.length,
    },
    {
      path: "project.projectno",
      label: "Project",
      content: (project) => (
        <Link to={`/project/:id${project._id}`}>{project.projectno}</Link>
      ),
    },
    { path: "activity.activityno", label: "Activity" },
    { path: "task", label: "Task" },
    { path: "location", label: "Location" },
    { path: "resourcesrequired", label: "Resources Required" },
    { path: "comments", label: "comments" },

    {
      key: "tasks",
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
        data={tasks}
        sortColumn={sortColumn}
        onSort={onSort}
        count={count}
        name={name}
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditAddActivityTask />
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

export default TaskTable;
