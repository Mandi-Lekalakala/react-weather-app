import { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="weather-temp">
        <span>{Math.round(props.celsius)}</span>
        <span className="weather-unit">
          °C fol|{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="weather-temp">
        <span>{Math.round(fahrenheit())}</span>
        <span className="weather-unit">
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
