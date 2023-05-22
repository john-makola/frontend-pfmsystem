import React from "react";
import React, { useState } from "react";
import Joi from "joi-browser";
import Form from "../common/formtest";
import { Row, Col } from "react-bootstrap";
import FormMain from "react-bootstrap/Form";
import isioloLogo from "../components/images/isiolocountylogo.png";
import pfmsLogo from "../components/images/pfmsloginlogo.jpg";
import NavBarMainLogin from "./NavbarMainLogin";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const [state, setState] = useState({
    data: { username: "", password: "" },
    errors: "",
  });

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  const doSubmit = () => {
    // Call the server
    history.push("/homepage");
    console.log("Submitted");
  };

  return (
    <div>
      <Row className="m-3">
        <NavBarMainLogin />
      </Row>
      <Row className="m-10">
        <div className="loginbox">
          <div className=" login">
            <h1>Welcome to :</h1>
            <Col>
              <img src={isioloLogo} alt="Isiolo Logo" />
            </Col>

            <div>
              <FormMain onSubmit={handleSubmit}>
                <Form doSubmit={doSubmit} renderInput renderButton>
                  <Row className="m-1">
                    {renderInput("username", "Username")}
                  </Row>
                  <Row className="m-1">
                    {renderInput("password", "password", "password")}
                  </Row>
                  <Row className="m-4">{renderButton("Login")}</Row>
                </Form>
              </FormMain>
            </div>
          </div>
        </div>
      </Row>
    </div>
  );
}
