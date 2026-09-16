import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a City.."
              className="search-input"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Johannesburg</h1>
      <ul>
        <li>Wednesday 14:20</li>
        <li>Clear sky</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://www.gstatic.com/weather/conditions/v1/svg/mostly_cloudy_day_light.svg"
            alt="Clear sky"
          />
          24°C
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 40%</li>
            <li>Precipitation: 15%</li>
            <li>Wind: 10km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
