import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NavBarMain from "../NavbarMain";
import LeftMenusGeneral from "../leftmenusgeneral";

const AddWorkPlan = () => {
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
          <Col md="9">WorkPlan</Col>
        </Row>
      </Row>
    </div>
  );
};

export default AddWorkPlan;
