import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function RoleButtons() {
  const classes = useStyles();

  const handleButtonSelection = (dogParent) => {
      if (dogParent === "parent") {
          console.log("Parent button")

      } else {
          console.log("Walker button")

      }

  };

  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={() => handleButtonSelection("parent")}>Dog Parent</Button>
        <Button onClick={() => handleButtonSelection()}>Dog Walker</Button>
      </ButtonGroup>
    </div>
  );
}