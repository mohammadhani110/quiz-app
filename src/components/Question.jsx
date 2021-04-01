import React from "react";
import Typography from "@material-ui/core/Typography";

const Question = ({ questions, index }) => {
  return (
    <Typography variant="h6" component="h6">
      {`Q${index + 1}: `}
      {questions[index]}{" "}
    </Typography>
  );
};

export default Question;

Question.defaultProps = {
  questions: [],
  index: 0,
};
