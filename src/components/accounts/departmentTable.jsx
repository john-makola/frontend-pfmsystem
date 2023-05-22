import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "../../common/table";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditDepartment from "./editdepartment";

class DepartmentTable extends Component {
  columns = [
    {
      path: "departmentno",
      label: "Activity No",
      content: (department) => (
        <Link to={`/department/:id${department._id}`}>
          {department.departmentno}
        </Link>
      ),
    },
    { path: "departmentname", label: "Department Name" },
    { path: "departmentdescription", label: "Description" },

    {
      key: "department",
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
    const { departments, onSort, sortColumn, count, name, show, handleClose } =
      this.props;

    return (
      <div>
        <Table
          columns={this.columns}
          data={departments}
          sortColumn={sortColumn}
          onSort={onSort}
          count={count}
          name={name}
        />
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Department</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditDepartment />
          </Modal.Body>
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

export default DepartmentTable;
