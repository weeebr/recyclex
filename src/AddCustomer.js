import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Submit, Text } from "./form-components";

const useStyles = makeStyles({
  root: {
    width: 400,
    margin: "20px auto"
  }
});

const AddCustomer = () => {
  const classes = useStyles();
  const [customer, setCustomer] = React.useState(null);

  return (
    <form className={classes.root}>
      <Text className={classes.input} onChange={setCustomer} value={customer} />

      <Submit
        collection="customers"
        data={{
          customer: customer
        }}
        label="Add customer"
      />
    </form>
  );
};

export default AddCustomer;
