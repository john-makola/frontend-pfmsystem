import React from "react";
import Joi from "joi-browser";
import FormMain from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

import Form from "../common/form";
import isioloLogo from "../components/images/isiolocountylogo.png";
import pfmsLogo from "../components/images/pfmsloginlogo.jpg";
import NavBarMainLogin from "./NavbarMainLogin";

class LoginBox extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    // Call the server
    this.props.history.push("/homepage");
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <div className="loginbox">
          <div className=" login">
            <h1>Welcome to </h1>
            <Col>
              <img src={isioloLogo} alt="Isiolo Logo" />
            </Col>

            <div>
              <FormMain onSubmit={this.handleSubmit}>
                <Row className="m-1">
                  {this.renderInput("username", "Username")}
                </Row>
                <Row className="m-1">
                  {this.renderInput("password", "password", "password")}
                </Row>
                <Row className="m-4">{this.renderButton("Login")}</Row>
              </FormMain>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginBox;
