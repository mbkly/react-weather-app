import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./FormattedDate";
import "./WeatherForecast";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    var days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    let date = new Date(props.data.time * 1000);
    let day = days[date.getDay()];
    return `${day}`;
  }

  return (
    <div className="WeatherForecastDay">
      <div className="container-md text-center">
        <div className="row">
          <div className="col">
            <div className="day">{day()}</div>
            <WeatherIcon
              className="icon"
              url={props.data.condition.icon_url}
              description={props.data.condition.description}
            />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-min">
                {minTemperature()}
              </span>
              <span className="WeatherForecast-temperature-max">
                {maxTemperature()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
