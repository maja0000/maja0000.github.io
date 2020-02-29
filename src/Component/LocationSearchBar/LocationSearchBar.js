import React, { useContext } from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import "./LocationSearchBar.css";
import Button from "@material-ui/core/Button";
import WeatherContext from "../../Context/WeatherContext";
import { useStyles } from "./useStyles";

export default function SearchBar({ onSearch, handleChange }) {
  const { citySearch, setCitySearch, getWeather } = useContext(WeatherContext);

  const handleKeyPress = event => {
    if (event.key === "Enter") {
      getWeather();
    }
  };

  const classes = useStyles();

  return (
    <div className="searchBarBox">
      <div className={classes.search}>
        <Button variant="contained" onClick={() => getWeather()}>
          <SearchIcon />
        </Button>
        <div className={classes.searchIcon}></div>
        <InputBase
          placeholder="Location…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          onInput={e => setCitySearch(e.target.value)}
          onKeyPress={event => {
            handleKeyPress(event);
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </div>
  );
}
