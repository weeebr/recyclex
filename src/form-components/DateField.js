import React from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import localeDE from 'date-fns/locale/de';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '12px 0',
    width: '100%'
  }
}));


const DateField = ({ value, onChange }) => {
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={localeDE}>
      <DatePicker
        className={classes.root}
        disableToolbar
        autoOk
        variant="inline"
        label="Date"
        format="dd.MM.yyyy"
        value={value}
        onChange={onChange}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DateField;