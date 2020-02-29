import { fade, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  search: {
    display: "flex",
    justifyContent: "space-between",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "200px"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    // position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {},
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    alignItems: "flex-start",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));
