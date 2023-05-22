import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import NavBarMain from "../../components/NavbarMain";
import LeftMenusGeneral from "../../components/leftmenusgeneral";

const Appraisals = () => {
  return (
    <div>
      <Row>
        <Row className="m-5">
          <NavBarMain />
        </Row>

        <Row className="mt-2">
          <Col md="3" className="listgroup p-3">
            <LeftMenusGeneral />
          </Col>
          <Col md="9">
            {" "}
            <h1>Appraisals</h1>{" "}
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default Appraisals;
