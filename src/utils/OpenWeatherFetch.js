export function getWeather(citySearch) {
  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${citySearch}&units=metric&appid=886d3852a40cc28c819dfcb6e2ae6402`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject();
      }
    })
    .then(result => {
      setWeatherDisplay(result);
      setCityName(result.city.name);
      setLoading(false);
      console.log("Fetch done", result);
    });
}
export default getWeather;
