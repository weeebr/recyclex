import { Button } from "@material-ui/core";
import React from "react";
import { save } from "../firebase/";

const Submit = ({ collection, data, label }) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => {
        console.log(collection, data);

        save(collection, data);
      }}
    >
      {label}
    </Button>
  );
};

export default Submit;
