import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "../../common/table";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";

class ProjectTable extends Component {
  columns = [
    {
      path: "empno",
      label: "EmployeeNO SN/No",
      content: (employee) => (
        <Link to={`/employee/${employee._id}`}>{employee.empno}</Link>
      ),
    },
    { path: "payroll_num", label: "Payroll No." },
    { path: "firstname", label: "Firstname" },
    { path: "surname", label: "Surname" },
    { path: "other_names", label: "Other Names" },
    { path: "designation", label: "Designation" },
    { path: "jobgroup.jobgroupname", label: "Job Group" },
    { path: "department.departmentname", label: "Dutystation/Dept" },
    {
      key: "employees",
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
    const { employees, onSort, sortColumn, count, name, show, handleClose } =
      this.props;

    return (
      <div>
        <Table
          columns={this.columns}
          data={employees}
          sortColumn={sortColumn}
          onSort={onSort}
          count={count}
          name={name}
        />
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
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

export default ProjectTable;
