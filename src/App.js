import React from "react";
import { TextField } from "@material-ui/core";
// import { makeStyles } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
// import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    padding: "30px",
    margin: "20px"
  }
}));
const App = () => {
  const classes = useStyles();
  return (
    <>
      <form className={classes.root}>
        <div>
          <TextField id="outlined-basic" label="Name" variant="outlined" />
        </div>
        <div>
          <TextField id="outlined-basic" label="Emai-Id" variant="outlined" />
        </div>
        <div>
          <TextField id="outlined-basic" label="Password" variant="outlined" />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="PhoneNumber"
            variant="outlined"
          />
        </div>
      </form>
    </>
  );
};

export default App;
