import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: "20px 0",
  },
}));

const OverviewItem = ({ data }) => {
  const classes = useStyles();

  const { amount, date, materials } = data;

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {date}: {amount}.00 CHF
        </Typography>
        <Typography component="p">{materials.join(", ")}</Typography>
      </Paper>
    </div>
  );
};

export default OverviewItem;
