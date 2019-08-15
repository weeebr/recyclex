import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '12px 0',
    width: '100%',
  },
  endAdornment: {
    marginLeft: 0,
  }
}));

const Amount = ({ value, onChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControl fullWidth>
        <Input
          id="adornment-amount"
          className={classes.input}
          value={value}
          type="text"
          onBlur={onChange}
        />
      </FormControl>
    </div>
  );
};

export default Amount;