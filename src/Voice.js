import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Paper,
  Box,
  Button,
  Typography,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles } from "@material-ui/core/styles";

//speech recognition setup
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en_US";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[500],
    paddingBottom: theme.spacing(5),
    paddingTop: theme.spacing(5),
  },
  button: {
    margin: theme.spacing(1),
  },
}));
const Voice = () => {
  const [isListening, setIsListening] = useState(false);
  const [note, setNote] = useState(null);
  const [saveNotes, setSaveNotes] = useState([]);

  useEffect(() => {
    handleListen();
  }, [isListening]);

  //classes for style
  const classes = useStyle();

  const handleSetIsListining = () => {
    setIsListening((preVious) => !preVious);
  };

  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        console.log("continue...");
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("Stopped Mic on Click");
      };
    }
    mic.onstart = () => {
      console.log("Mics on");
    };

    mic.onresult = (e) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(transcript);
      setNote(transcript);
      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  //onClick method
  const handleSaveNotes = () => {
    setSaveNotes([...saveNotes, note]);
    setNote("");
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h3" gutterBottom align="center">
        Voice Note
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper component={Box} p={3}>
            <Typography variant="h4" gutterBottom>
              Current Note
            </Typography>
            {isListening ? <span>🎙️</span> : <span>🛑🎙️</span>}
            <Button
              variant="outlined"
              size="small"
              color="primary"
              onClick={handleSetIsListining}
              className={classes.button}
            >
              Start/Stop
            </Button>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              onClick={handleSaveNotes}
              disabled={!note}
              endIcon={<SendIcon />}
              className={classes.button}
            >
              Save Note
            </Button>
            <Typography>{note}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper component={Box} p={3}>
            <Typography variant="h4" gutterBottom>
              Notes
            </Typography>
            {saveNotes.map((n) => (
              <Typography key={n}>{n}</Typography>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Voice;
