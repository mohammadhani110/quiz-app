import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function LinearProgressWithLabel(props) {
  
  return (
    <Box display="flex" flexDirection="column" alignItems="center">

        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
            <Box minWidth={35}>
                <Typography
                    variant="body1"
                    color="textSecondary"
                >{`Score: ${Math.round(props.value)}%`}
                </Typography>
            </Box>
            
            <Box minWidth={30}>
            <Typography
                variant="body1"
                color="textSecondary"
            >{`Min-Score: ${Math.round(props.minpercentage)}%`}</Typography>
            </Box>
            <Box minWidth={35}>
            <Typography
                variant="body1"
                color="textSecondary"
            >{`Max-Score: ${Math.round(props.maxpercentage)}%`}</Typography>
            </Box>
        </Box>


        <Box width="100%" mt={1}>
            <LinearProgress variant="determinate" {...props} />
            <LinearProgress variant="determinate" {...props} />
            <LinearProgress variant="determinate" {...props} />
            <LinearProgress variant="determinate" {...props} />
            <LinearProgress variant="determinate" {...props} />
            <LinearProgress variant="determinate" {...props} />
            <LinearProgress variant="determinate" {...props} />
        </Box>
      

    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: "60%",
    height: 10,
    borderRadius: 5,
  },

  bar: {
    borderRadius: 5,
    backgroundColor: "ligthgrey",
  },
});

export default function LinearWithValueLabel({currentPercentage,maxPercentage, minPercentage}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={currentPercentage} maxpercentage={maxPercentage} minpercentage={minPercentage} className={classes.bar} />
    </div>
  );
}
