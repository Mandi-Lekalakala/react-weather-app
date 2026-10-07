import { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      iconUrl:
        "https://www.gstatic.com/weather/conditions/v1/svg/mostly_cloudy_night_light.svg",
    });
  }

  function search() {
    // city
    const apiKey = "cfabea60f0eoe0t3bb3e16a70e85e14b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // search for a cityy //
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        {/* Search Bar & Button */}

        <form className="row" onSubmit={handleSubmit}>
          <div className="col-10">
            <input
              type="search"
              placeholder="Enter a city.."
              className="search-input"
              autoFocus
              onChange={handleCityChange}
            />
          </div>
          <div className="col-2">
            <input type="submit" value="Search" className="search-button" />
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading....";
  }
}
