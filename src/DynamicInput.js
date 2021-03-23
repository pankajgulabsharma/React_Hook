import React, { useState } from "react";
import "./App.css";
import {
  Container,
  Paper,
  Box,
  Grid,
  TextField,
  IconButton,
  Button,
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[300],
    paddingTop: theme.spacing(5),
  },
  inputGroup: {
    marginBottom: theme.spacing(1),
  },
}));

function DynamicInput() {
  const classes = useStyles();

  const userTemplate = { name: "", email: "", phone: "", address: "" };
  const [users, setUsers] = useState([userTemplate]);

  const addUser = () => {
    setUsers([...users, userTemplate]);
  };

  const InputEvent = (e, index) => {
    const updatedUsers = users.map((user, i) =>
      index == i
        ? Object.assign(user, { [e.target.name]: e.target.value })
        : user
    );
    setUsers(updatedUsers);
  };

  const removeUser = (index) => {
    const filteredUsers = [...users]; //here we make a copy
    filteredUsers.splice(index, 1);
    setUsers(filteredUsers);
  };
  return (
    <Container className={classes.root}>
      <Paper component={Box} p={4}>
        {users.map((user, index) => {
          return (
            <Grid
              container
              spacing={3}
              key={index}
              className={classes.inputGroup}
            >
              <Grid item md={3}>
                <TextField
                  label="Name"
                  placeholder="Enter your full name"
                  variant="outlined"
                  name="name"
                  value={user.name}
                  onChange={(e) => InputEvent(e, index)}
                  fullWidth
                />
              </Grid>
              <Grid item md={3}>
                <TextField
                  label="E-mail"
                  placeholder="Enter your E-mail"
                  variant="outlined"
                  name="email"
                  value={user.email}
                  onChange={(e) => InputEvent(e, index)}
                  fullWidth
                />
              </Grid>
              <Grid item md={2}>
                <TextField
                  label="Phone"
                  placeholder="Enter your full Phone"
                  variant="outlined"
                  name="phone"
                  value={user.phone}
                  onChange={(e) => InputEvent(e, index)}
                  fullWidth
                />
              </Grid>
              <Grid item md={3}>
                <TextField
                  label="Address"
                  placeholder="Enter your full Address"
                  variant="outlined"
                  name="address"
                  value={user.address}
                  onChange={(e) => InputEvent(e, index)}
                  fullWidth
                />
              </Grid>
              <Grid item md={1}>
                <IconButton color="secondary" onClick={() => removeUser(index)}>
                  <DeleteOutlineIcon />
                </IconButton>
              </Grid>
            </Grid>
          );
        })}

        <Button variant="contained" color="primary" onClick={addUser}>
          add more
        </Button>
      </Paper>
    </Container>
  );
}

export default DynamicInput;
