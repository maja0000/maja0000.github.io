const fetchWeather = async  => {
  const response = await fetch(`http://ip-api.com/json/`);
  const jsonData = response.json();
  if (!response.ok) {
    throw new Error(jsonData, response.statusCode);
    // this is a custom exception class that stores JSON data
  }
  return jsonData;
};
