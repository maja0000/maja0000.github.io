import React, { useState } from "react";

import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import "./LocationSearchBar.css";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
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

const useInput = (className, defaultState) => {
  const [state, setState] = useState(defaultState);
  const id = `use-input-${className}`;
  const classes = useStyles();

  const SearchBar = () => (
    <div className={`searchBarBox ${className}`}>
      <div className={classes.search}>
        <Button variant="contained" onClick={onSearch}>
          <SearchIcon />
        </Button>
        <div className={classes.searchIcon}></div>
        <InputBase
          placeholder="Location…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          onInput={handleChange}
          onKeyPress={handleKeyPress}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </div>
  );

  return [state, SearchBar, setState];
};

export default useInput;
