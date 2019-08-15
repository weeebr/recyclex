import { makeStyles } from "@material-ui/core/styles";
import format from "date-fns/format";
import React from "react";
import { Amount, DateField, MultiSelect, Submit } from "./form-components";

const useStyles = makeStyles({
  root: {
    width: 400,
    margin: "20px auto"
  }
});

const materials = [
  { name: "PET", price: 5 },
  { name: "Aluminium", price: 6 },
  { name: "Glas", price: 7 }
];

const getPrice = materialName => {
  const el = materials.filter(f => f.name === materialName).shift();
  return el.price;
};

const calculateAmount = materials => {
  return materials
    .map(m => getPrice(m.value))
    .reduce((sum, currentValue) => sum + currentValue, 0);
};

const AddItem = () => {
  const classes = useStyles();
  const [multiValues, setMultiValues] = React.useState([]);
  const [amount, setAmount] = React.useState(0);
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    setAmount(calculateAmount(multiValues));
  }, [multiValues]);

  return (
    <form className={classes.root}>
      <DateField className={classes.input} onChange={setDate} value={date} />
      <MultiSelect
        className={classes.input}
        config={{
          suggestions: materials.map(m => m.name),
          label: "Materials",
          placeholder: "Pick..."
        }}
        onChange={setMultiValues}
        value={multiValues}
      />
      <Amount value={amount} />

      <Submit
        collection="pickups"
        data={{
          amount: amount,
          date: format(date, "dd.MM.yyyy"),
          materials: multiValues.map(m => m.value)
        }}
        label="Add pickup"
      />
    </form>
  );
};

export default AddItem;
