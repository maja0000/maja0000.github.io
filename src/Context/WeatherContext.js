import { createContext } from "react";

const WeatherContext = createContext(
  {
    weather: [],
    loading: true
  },
  () => {}
);

export default WeatherContext;
