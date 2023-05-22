import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { InputGroup } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required().min(5).max(255),
  password: yup.string().required(),
});

const FormExample = () => {
  const errorReport = (e) => {
    return e ? e : console.log("look good");
  };
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        username: "",
        password: "",
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="12">
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12">
              <InputGroup hasValidation>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  aria-describedby="inputGroupPrepend"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormExample;
