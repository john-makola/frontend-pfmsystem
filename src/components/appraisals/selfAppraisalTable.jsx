import React from "react";
import { Link } from "react-router-dom";
// import Table from "../../common/table";
import {
  Modal,
  Button,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
  Table,
} from "react-bootstrap";
import AddSelfAppraisal from "./addselfAppraisal";
import TotalMeanScore from "./totalmeanscore";
import RatingScale from "./ratingscale";

const SelfAppraisalTable = ({
  selfappraisal,
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
  // const columns = [
  //   {
  //     key: "count",
  //     label: "#",
  //     content: () => numbering++ - selfappraisal.length,
  //   },
  //   {
  //     path: "selfappraisal.task.task",
  //     label: "Task",
  //     content: (task) => <Link to={`/task/:id${task._id}`}>{task.task}</Link>,
  //   },
  //   { path: "selfappraisal.target.target", label: "Target" },
  //   {
  //     path: "selfappraisal.performanceindicator.performanceindicator",
  //     label: "selfappraisal.Peformance Indicator",
  //   },
  //   {
  //     path: "selfappraisal.achievedresults.achievedresults",
  //     label: "Achieved Results",
  //   },
  //   { path: "selfappraisal.scorerating", label: "Score Rating" },

  //   {
  //     key: "selfappraisal",
  //     label: "Actions",
  //     content: () => (
  //       <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}>
  //         <button
  //           onClick={handleShow}
  //           className="btn text-warning btn-act"
  //           data-toggle="modal"
  //         >
  //           <i className="material-icons">&#xE254;</i>
  //         </button>
  //       </OverlayTrigger>
  //     ),
  //   },
  // ];

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

  let total = 0;
  function computeTotalMean() {
    total = selfappraisal.map((item) => {
      return item.scorerating.reduce(
        (total, currentValue) => (total = total + parseInt(currentValue.item)),
        0
      );
    });

    // total = selfappraisal.scorerating.reduce(
    //   (total, currentValue) =>
    //     (total = total + parseInt(currentValue.scorerating)),
    //   0
    // );
    return total;
  }

  const totalScore = 140;
  let meanscore = 0;

  totalScore > 0 ? (meanscore = totalScore / 2) : (meanscore = 0);

  return (
    <div>
      {/* <Table
        columns={columns}
        data={selfappraisal}
        sortColumn={sortColumn}
        onSort={onSort}
        count={count}
        name={name}
      /> */}

      <table className="table">
        <thead>
          <tr>
            <td>Task</td>
            <td>Target</td>
            <td>Performance Indicator</td>
            <td>Achieved Results</td>
            <td>Score-Rating</td>
          </tr>
        </thead>

        <tbody>
          {selfappraisal.map((items) => (
            <tr>
              <td>
                {items.task.map((item) => (
                  <tr>
                    <td>{item.task}</td>
                  </tr>
                ))}
              </td>
              <td>
                {items.target.map((item) => (
                  <tr>
                    <td>{item.agreedperformance}</td>
                  </tr>
                ))}
              </td>
              <td>
                {items.target.map((item) => (
                  <tr>
                    <td>{item.performanceindicator}</td>
                  </tr>
                ))}
              </td>
              <td>
                {items.achievedresults.map((item) => (
                  <tr>
                    <td>{item}</td>
                  </tr>
                ))}
              </td>
              <td>
                {items.scorerating.map((item) => (
                  <tr>
                    <td>{item}</td>
                  </tr>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Row>
        <Col>
          <TotalMeanScore totalScore={totalScore} meanscore={meanscore} />
        </Col>
        <Col md="7">
          <RatingScale />
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddSelfAppraisal />
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

export default SelfAppraisalTable;
