import React from "react";

import LocationSearchBar from "../LocationSearchBar/LocationSearchBar";
import MeteoDisplay from "./MeteoDisplay";

function WeatherCardHeader({ weather }) {
  return (
    <div className="weatherCard-header">
      <MeteoDisplay weather={weather} />
    </div>
  );
}
export default WeatherCardHeader;
