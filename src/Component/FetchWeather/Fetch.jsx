import React from "react";
import useFetcher from "./FetchWeather";

const Fetcher = ({ action, children }) => {
  const [data, loading, error] = useFetcher(action);

  if (loading) return <h1>Waiting</h1>;
  if (error) return <h1>ERROR</h1>;
  if (!data) return null;
  return children(data);
};
export default Fetcher;
