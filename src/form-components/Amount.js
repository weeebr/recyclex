import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    padding: "12px 0",
    width: "100%"
  },
  endAdornment: {
    marginLeft: 0
  }
}));

const Amount = ({ value }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControl fullWidth>
        <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
        <Input
          id="adornment-amount"
          className={classes.input}
          value={value}
          type="number"
          startAdornment={<InputAdornment position="start">CHF</InputAdornment>}
          endAdornment={
            <InputAdornment className={classes.endAdornment} position="end">
              .00
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
};

export default Amount;
