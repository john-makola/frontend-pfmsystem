import React, { useState } from "react";
import axios from "axios";
import { Row, Col, Form, Button } from "react-bootstrap";
import isioloLogo from "../components/images/isiolocountylogo.png";
import NavBarMainLogin from "./NavbarMainLogin";
import { FormControl } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();
  const [validated, setValidated] = useState(false);

  const [input, setInput] = useState({
    username: "username",
    password: "password",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick() {
    setInput({
      username: "",
      password: "",
    });
  }

  const handleSubmit = (event) => {
    let form = event.currentTarget;
    event.preventDefault();
    //console.log(input);

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      try {
        axios
          .post("http://localhost:3001/createauth", {
            username: input.username,
            password: input.password,
          })
          .then((response) => {
            //console.log(response);
            localStorage.setItem("token", response.headers["x-auth-token"]);
            history.push("/dashboard");
          })
          .catch((error) => {});
      } catch (error) {}

      setValidated(true);

      setInput({
        username: "",
        password: "",
      });
    }
    setValidated(false);
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
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="m-3">
                  <Form.Group as={Col} md="12">
                    <InputGroup>
                      <FormControl
                        required
                        id="inlineFormInputGroupUsename"
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={input.username}
                        onChange={handleChange}
                      />
                    </InputGroup>

                    <Form.Control.Feedback></Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="m-3">
                  <Form.Group as={Col} md="12">
                    <InputGroup>
                      <FormControl
                        required
                        id="inlineFormInputGroupPassword"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={input.password}
                        onChange={handleChange}
                      />
                    </InputGroup>

                    <Form.Control.Feedback></Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="m-3">
                  <Form.Group as={Col} md="12">
                    <Button
                      onClick={handleClick}
                      variant="secondary"
                      className="mx-3"
                    >
                      Cancel
                    </Button>
                    <Button type="submit" variant="success">
                      Submit
                    </Button>
                  </Form.Group>
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default Login;
