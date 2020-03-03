import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import "./LocationSearchBar.css";
import Button from "@material-ui/core/Button";
import { useStyles } from "./useStyles";

export default function SearchBar({ updateCity, weather }) {
  // const { citySearch, setCitySearch, getWeather } = useContext(WeatherContext);
  const [search, setSearch] = useState("");

  const handleKeyPress = event => {
    if (event.key === "Enter") {
      updateCity(search);
    }
  };

  const classes = useStyles();

  return (
    <div className="searchBarBox">
      <div className={classes.search}>
        <Button variant="contained" onClick={() => updateCity(search)}>
          <SearchIcon />
        </Button>
        <div className={classes.searchIcon}></div>
        <InputBase
          placeholder="Location…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          onInput={e => setSearch(e.target.value)}
          onKeyPress={event => {
            handleKeyPress(event);
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </div>
  );
}
