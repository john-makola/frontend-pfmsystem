import React from "react";
import { Row, Col } from "react-bootstrap";
import NavBarMain from "../components/NavbarMain";
import LeftMenusGeneral from "../components/leftmenusgeneral";

const NotFound = () => {
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
            <h1>Resource Not Found</h1>{" "}
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default NotFound;
