import "./App.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import useFetch from "./hooks/useFetch";

// importing components
import Search from "./components/Search";


export default function App() {

  

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
      borderRadius: "0",
    },
  }));
  
  const classes = useStyles();
 

  return (
    <div className={classes.root}>
      <h1>THis is the main branch</h1>
      <Grid container>
        <Search />
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>Search part</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>NominatedList part</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
