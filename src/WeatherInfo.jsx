import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

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
          <p className="weather-details">
            Humidity: <strong>{Math.round(props.data.humidity)}%</strong>, Wind:{" "}
            <strong>{Math.round(props.data.wind)} km/h</strong>
          </p>
        </div>
        <div className="col-3 text-center">
          <WeatherIcon
            code={props.data.iconCode}
            alt={props.data.description}
            className="weather-icon"
          />
          <div className="weather-temp">
            {Math.round(props.data.temperature)}
            <span className="weather-unit">°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
