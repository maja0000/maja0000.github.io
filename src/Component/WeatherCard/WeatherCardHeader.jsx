import React from "react";

import LocationSearchBar from "../LocationSearchBar/LocationSearchBar";
import MeteoDisplay from "./MeteoDisplay";

function WeatherCardHeader(props) {
  return (
    <div className="weatherCard-header">
      <LocationSearchBar />
      <MeteoDisplay />
    </div>
  );
}
export default WeatherCardHeader;
