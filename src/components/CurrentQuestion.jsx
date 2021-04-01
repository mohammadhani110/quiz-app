import React from "react";
import Typography from "@material-ui/core/Typography";

const CurrentQuestion = ({ index = 0, length }) => {
  return (
    <Typography variant="h2" component="h2">
      {`Question ${index + 1} of ${length}`}
    </Typography>
  );
};

export default CurrentQuestion;
