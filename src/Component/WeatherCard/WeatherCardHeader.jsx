import React from "react";
import LocationSearchBar from "../LocationSearchBar/LocationSearchBar";
import MeteoDisplay from "./MeteoDisplay";
// import useSearch from "../../Hooks/useSearch";

function WeatherCardHeader(props) {
  // const [meteo, setMeteo] = useSearch("test", "test");
  return (
    <div className="weatherCard-header">
      <LocationSearchBar />
      <MeteoDisplay />
    </div>
  );
}
export default WeatherCardHeader;
