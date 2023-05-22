import React from "react";
import "survey-react/survey.css";
import * as Survey from "survey-react";
import SelfReview from "../surveys/empselfreview";

const EmpSelfReview = () => {
  return <Survey.Survey json={SelfReview} />;
};
export default EmpSelfReview;
