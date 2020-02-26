import React, { useContext } from "react";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import "../css/LocationSearchBar.css";
import Button from "@material-ui/core/Button";
import WeatherContext from "../Component/WeatherContext.jsx";

const useStyles = makeStyles(theme => ({
  //   root: {},
  //   backColor: {
  //     backgroundColor: "#B9BABA"
  //   },

  search: {
    // margin: "14px 0 14px 150px",
    // paddingLeft: "82px",
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

export default function SearchBar({ onSearch, handleChange }) {
  const [citySearch, setCitySearch] = useContext(WeatherContext);
  console.log(onSearch);
  let userInput = "";

  const handleKeyPress = event => {
    if (event.key === "Enter") {
      setCitySearch(userInput);
    }
  };

  const classes = useStyles();

  return (
    <div className="searchBarBox">
      <div className={classes.search}>
        <Button
          variant="contained"
          onClick={() => {
            onSearch(userInput);
          }}
        >
          <SearchIcon />
        </Button>
        <div className={classes.searchIcon}></div>
        <InputBase
          placeholder="Location…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          onInput={e => {
            userInput = e.target.value;
          }}
          onKeyPress={handleKeyPress}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </div>
  );
}
