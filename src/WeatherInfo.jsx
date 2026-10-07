import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      {/* Current Location and Info */}

      <div className="row weather-card align-items-center">
        <div className="col-9">
          <h1>{props.data.city}</h1>
          <p className="weather-date text-capitalize">
            <FormattedDate date={props.data.date} />, {props.data.description}
          </p>
        </div>
        <div className="col-3 text-center">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="weather-icon"
          />
          <div className="weather-temp">
            {Math.round(props.data.temperature)}
            <span className="weather-unit">°C</span>
          </div>
        </div>
      </div>

      {/* Current Weather Stats */}

      <div className="weather-stats">
        <div className="stat-card text-center">
          <p className="stat-label">Humidity</p>
          <p className="stat-value">{Math.round(props.data.humidity)}%</p>
        </div>
        {/* <div className="stat-card text-center">
            <p className="stat-label">Precipitation</p>
            <p className="stat-value">15%</p>
          </div> */}
        <div className="stat-card text-center">
          <p className="stat-label">Wind</p>
          <p className="stat-value">{Math.round(props.data.wind)} km/h</p>
        </div>
      </div>
    </div>
  );
}
