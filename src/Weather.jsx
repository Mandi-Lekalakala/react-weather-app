import { useState } from "react";
import tzlookup from "tz-lookup";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      iconCode: response.data.condition.icon,
      timezone: tzlookup(
        response.data.coordinates.latitude,
        response.data.coordinates.longitude,
      ),
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
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading....";
  }
}
