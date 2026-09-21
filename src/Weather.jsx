import "./Weather.css";

export default function Weather() {
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
          <h1>Johannesburg</h1>
          <p className="weather-date">Wed 14:20, clear sky</p>
        </div>
        <div className="col-3 text-center">
          <img
            src="https://www.gstatic.com/weather/conditions/v1/svg/mostly_cloudy_day_light.svg"
            alt="clear sky"
            className="weather-icon"
          />
          <div className="weather-temp">24°</div>
        </div>
      </div>

      {/* Current Weather Stats */}

      <div className="weather-stats">
        <div className="stat-card text-center">
          <p className="stat-label">Humidity</p>
          <p className="stat-value">40%</p>
        </div>
        <div className="stat-card text-center">
          <p className="stat-label">Precipitation</p>
          <p className="stat-value">15%</p>
        </div>
        <div className="stat-card text-center">
          <p className="stat-label">Wind</p>
          <p className="stat-value">10 km/h</p>
        </div>
      </div>
    </div>
  );
}
