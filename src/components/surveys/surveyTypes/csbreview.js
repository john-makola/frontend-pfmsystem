import React from "react";
import "survey-react/survey.css";
import * as Survey from "survey-react";
import CsbReview from "../surveys/csbreview";

const CsbReviews = () => {
  return <Survey.Survey json={CsbReview} />;
};
export default CsbReviews;
