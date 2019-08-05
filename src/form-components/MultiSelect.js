import React from "react";
import clsx from "clsx";
import Select from "react-select";
import { TextField, Chip, MenuItem } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import multiSelectStyles from "./Multiselect.styles";

const useStyles = multiSelectStyles;

const MultiSelect = ({ config, onChange, value }) => {
  const classes = useStyles();

  const options = config.suggestions.map(suggestion => ({
      value: suggestion,
      label: suggestion
    })
  );

  return (
    <div className={classes.root}>
      <Select
        classes={classes}
        inputId="react-select-multiple"
        TextFieldProps={{
          label: config.label,
          InputLabelProps: {
            htmlFor: "react-select-multiple",
            shrink: true
          }
        }}
        placeholder={config.placeholder}
        options={options}
        components={components}
        value={value}
        onChange={onChange}
        isMulti
      />
    </div>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  const {
    children,
    innerProps,
    innerRef,
    selectProps: { classes, TextFieldProps }
  } = props;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: classes.input,
          ref: innerRef,
          children,
          ...innerProps
        }
      }}
      {...TextFieldProps}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      ref={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function ValueContainer(props) {
  return (
    <div className={props.selectProps.classes.valueContainer}>
      {props.children}
    </div>
  );
}

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={clsx(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  );
}

const components = {
  Control,
  MultiValue,
  Option,
  ValueContainer
};

export default MultiSelect;