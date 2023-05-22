import React from "react";
import "survey-react/survey.css";
import * as Survey from "survey-react";
import Supervisor from "../surveys/supervisorreviews";

const EmpSelfReview = () => {
  return <Survey.Survey json={Supervisor} />;
};
export default EmpSelfReview;
