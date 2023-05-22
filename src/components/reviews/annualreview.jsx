import React from "react";
import jwtDecode from "jwt-decode";
import { Row, Col } from "react-bootstrap";
import NavBarMain from "../../components/NavbarMain";
import LeftMenusGeneral from "../../components/leftmenusgeneral";

const AnnualReview = () => {
  function getcurrentUser() {
    try {
      const jwt = localStorage.getItem("token");
      const currentuser = jwtDecode(jwt);
      //console.log(currentuser);
      //setUser({ username: currentuser.name, admin: currentuser.admin });
      return currentuser;
    } catch (error) {}
  }

  const currentuser = getcurrentUser();
  return (
    <div>
      <Row>
        <Row className="m-5">
          <NavBarMain currentuser={currentuser} />
        </Row>

        <Row className="mt-2">
          <Col md="3" className="listgroup p-3">
            <LeftMenusGeneral currentuser={currentuser} />
          </Col>
          <Col md="9">
            {" "}
            <h1>Annual Review</h1>{" "}
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default AnnualReview;
