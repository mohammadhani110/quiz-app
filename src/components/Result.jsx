import React from "react";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const Result = ({ currentPercentage,currentScore,toHome }) => {
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <Typography variant="h1" component="h1">
        {`Score : ${currentPercentage}% `}
      </Typography>
      <Typography variant="h1" component="h1">
        {`Correct Answers: ${currentScore} `}
      </Typography>
      <Button variant="contained" color="primary" size="large" onClick={()=>{toHome()}}>
        Home
      </Button>
    </div>
  );
};

export default Result;
