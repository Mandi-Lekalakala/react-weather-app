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
            <FormattedDate
              date={props.data.date}
              timezone={props.data.timezone}
            />
            , {props.data.description}
          </p>
        </div>
        <div className="col-3 text-center">
          <WeatherIcon
            code={props.data.iconCode}
            alt={props.data.description}
            className="weather-icon"
            size={70}
          />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>

        {/* Current Weather Stats */}

        <div className="weather-stats">
          <div className="stat-card text-center">
            <p className="stat-label">Humidity</p>
            <p className="stat-value">{Math.round(props.data.humidity)}%</p>
          </div>
          <div className="stat-card text-center">
            <p className="stat-label">Wind</p>
            <p className="stat-value">{Math.round(props.data.wind)} km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}
