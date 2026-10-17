import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
            size={75}
          />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
    </div>
  );
}
