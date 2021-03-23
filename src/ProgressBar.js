import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function ProgressBar(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

ProgressBar.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function LinearWithValueLabel() {
  const clas = useStyles();
  const [progress, setProgress] = React.useState(0);
  const [Terminal1, setTerminal1] = React.useState(false);
  const [Terminal2, setTerminal2] = React.useState(false);
  const [Terminal3, setTerminal3] = React.useState(false);
  const [Terminal4, setTerminal4] = React.useState(false);
  const [Terminal5, setTerminal5] = React.useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 20
      );
    }, 1000);
    console.log(progress);
    if (progress === 20) {
      setTerminal1(true);
    } else if (progress === 40) {
      setTerminal2(true);
    } else if (progress === 60) {
      setTerminal3(true);
    } else if (progress === 80) {
      setTerminal4(true);
    } else if (progress === 100) {
      setTerminal5(true);
    } else {
      setTerminal1(false);
      setTerminal2(false);
      setTerminal3(false);
      setTerminal4(false);
      setTerminal5(false);
    }
    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  return (
    <div className={clas.root}>
      <ProgressBar value={progress} />
      <h1 style={{ color: Terminal1 ? "red" : "pink" }}>light1</h1>
      <h1 style={{ color: Terminal2 ? "red" : "pink" }}>light2</h1>
      <h1 style={{ color: Terminal3 ? "red" : "pink" }}>light3</h1>
      <h1 style={{ color: Terminal4 ? "red" : "pink" }}>light4</h1>
      <h1 style={{ color: Terminal5 ? "red" : "pink" }}>light5</h1>
    </div>
  );
}
