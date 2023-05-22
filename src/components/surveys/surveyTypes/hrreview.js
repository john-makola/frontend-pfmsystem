import React from "react";
import "survey-react/survey.css";
import * as Survey from "survey-react";
import HrReview from "../surveys/hrreviews";

const HrReviews = () => {
  return <Survey.Survey json={HrReview} />;
};
export default HrReviews;
