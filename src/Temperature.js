import React, { useState } from "react";
import "./WeatherInfo";
import "./Weather";

export default function Temperature(props) {
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
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    return (
      <div className="Temperature">
        <span>{props.celsius} </span>
        <span className="units">
          °C |{" "}
          <a href="/" className="unit" onClick={showFahrenheit}>
            <span className="fahrenheitSymbol">°F</span>
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        <span>
          {fahrenheit()} °F |{" "}
          <a href="/" className="unit" onClick={showCelsius}>
            <span className="celsiusSymbol">°C</span>{" "}
          </a>
        </span>
      </div>
    );
  }
}
