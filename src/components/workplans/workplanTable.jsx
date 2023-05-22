import React, { Component } from "react";

import Table from "../../common/table";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
// import EditTarget from "./edittarget";

class WorkPlanTable extends Component {
  columns = [
    { path: "employee.empno", label: "Goals" },
    { path: "activity.activityno", label: "Objectives" },
    { path: "startdate", label: "Start Date" },
    { path: "enddate", label: "End Date" },
    { path: "task", label: "Resources" },
    { path: "ep_Indicator", label: "Strategies" },

    {
      key: "targets",
      label: "Actions",
      content: () => (
        <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
          <button
            onClick={this.props.handleShow}
            className="btn text-warning btn-act"
            data-toggle="modal"
          >
            <i className="material-icons">&#xE254;</i>
          </button>
        </OverlayTrigger>
      ),
    },
  ];

  render() {
    const { targets, onSort, sortColumn, count, show, handleClose } =
      this.props;

    return (
      <div>
        <Table
          columns={this.columns}
          data={targets}
          sortColumn={sortColumn}
          onSort={onSort}
          count={count}
        />
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>{/* <EditTarget /> */}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close Button
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default WorkPlanTable;
