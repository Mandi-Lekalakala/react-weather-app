import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const longitude = props.coordinates.longitude;
  const latitude = props.coordinates.latitude;
  const apiKey = `cfabea60f0eoe0t3bb3e16a70e85e14b`;
  const apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
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
