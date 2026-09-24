import { useState } from "react";
import "./Weather.css";
import axios from "axios";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      date: "Wednesday 19:00",
      description: response.data.condition.description,
      iconUrl:
        "https://www.gstatic.com/weather/conditions/v1/svg/mostly_cloudy_night_light.svg",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        {/* Search Bar & Button */}

        <form className="row">
          <div className="col-10">
            <input
              type="search"
              placeholder="Enter a city.."
              className="search-input"
              autoFocus
            />
          </div>
          <div className="col-2">
            <input type="submit" value="Search" className="search-button" />
          </div>
        </form>

        {/* Current Location and Info */}

        <div className="row weather-card align-items-center">
          <div className="col-9">
            <h1>{weatherData.city}</h1>
            <p className="weather-date text-capitalize">
              {weatherData.date}, {weatherData.description}
            </p>
          </div>
          <div className="col-3 text-center">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="weather-icon"
            />
            <div className="weather-temp">
              {Math.round(weatherData.temperature)}
              <span className="weather-unit">°C</span>
            </div>
          </div>
        </div>

        {/* Current Weather Stats */}

        <div className="weather-stats">
          <div className="stat-card text-center">
            <p className="stat-label">Humidity</p>
            <p className="stat-value">{Math.round(weatherData.humidity)}%</p>
          </div>
          {/* <div className="stat-card text-center">
            <p className="stat-label">Precipitation</p>
            <p className="stat-value">15%</p>
          </div> */}
          <div className="stat-card text-center">
            <p className="stat-label">Wind</p>
            <p className="stat-value">{Math.round(weatherData.wind)} km/h</p>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "cfabea60f0eoe0t3bb3e16a70e85e14b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading....";
  }
}
