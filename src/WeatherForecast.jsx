import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Mon</div>
          <WeatherIcon code="clear-sky-day" size={40} />
          <div className="forecast-temps">
            <span className="forecast-max">25°</span>{" "}
            <span className="forecast-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
