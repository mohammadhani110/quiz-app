import React from "react";
import Typography from "@material-ui/core/Typography";

const QuizCategory = ({ category = "", index = 0 }) => {
  return (
    <Typography variant="h5" component="h5">
      {category[index]}
    </Typography>
  );
};

export default QuizCategory;
