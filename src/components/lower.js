
import React from 'react';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import '../App.css'
const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));
  
  export default function GroupSizesColors() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <ButtonGroup>
          color="secondary"
          aria-label="outlined secondary button group"
        
          <Button className = 'Bout'>Tous</Button>
          <Button className= 'Bout'>Absent</Button>
          <Button className = 'bout'>Present</Button>
        </ButtonGroup>
      </div>
    );
  }