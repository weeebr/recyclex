import React from "react";
import { MultiSelect, DateField, Amount } from "./form-components";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import format from 'date-fns/format';
import Firebase from './firebase/';

const useStyles = makeStyles(theme => ({
  root: {
    width: 400, 
    margin: '20px auto',
  }
}));

const materials = [
  { name: 'PET', price: 5 },
  { name: 'Aluminium', price: 6 },
  { name: 'Glas', price: 7 },
];

const AddItem = () => {
  const classes = useStyles();
  const [ multiValues, setMultiValues ] = React.useState(null);
  const [ amount, setAmount ] = React.useState(0);
  const [ date, setDate ] = React.useState(new Date());

  React.useEffect(() => {
    if (multiValues) {
      setAmount(multiValues
        .map(m => {
          const el = materials.filter(f => f.name === m.value).shift();
          return el.price;
        })
        .reduce((sum, currentValue) => sum + currentValue)
      )
    }
  }, [multiValues]);

  return (
    <form className={classes.root}>
      <DateField 
        className={classes.input}
        onChange={setDate}
        value={date}
      />
      <MultiSelect
        className={classes.input}
        config={{
          suggestions: materials.map(m => m.name),
          label: 'Materials',
          placeholder: 'Pick...'
        }}
        onChange={setMultiValues}
        value={multiValues}
      />
      <Amount
        value={amount}
      />

      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          const data = {
            amount: amount,
            date: format(date, "dd.MM.yyyy"),
            materials: multiValues.map(m => m.value)
        }
          console.log(data)

          Firebase.add(data)
        }}
      >
        Add pickup
      </Button>
    </form>
  );
};

export default AddItem;