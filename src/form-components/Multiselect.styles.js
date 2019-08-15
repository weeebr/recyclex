import { emphasize, makeStyles } from "@material-ui/core/styles";

const multiSelectStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "12px 0"
  },
  input: {
    display: "flex",
    padding: 0,
    height: "auto",
    cursor: "pointer"
  },
  valueContainer: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
    overflow: "hidden"
  },
  chip: {
    margin: theme.spacing(0.5, 0.25)
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === "light"
        ? theme.palette.grey[300]
        : theme.palette.grey[700],
      0.08
    )
  }
}));

export default multiSelectStyles;
