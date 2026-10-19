export default function WeatherTemperature(props) {
  return (
    <div className="weather-temp">
      <span>{Math.round(props.celsius)}</span>
      <span className="weather-unit">°</span>
    </div>
  );
}
