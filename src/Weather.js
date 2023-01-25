import axios from "axios";
import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
      icon: response.data.condition.icon,
      icon_url: response.data.condition.icon_url,
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: Math.round(response.data.wind.speed),
    });
  }

  function search() {
    const apiKey = "d5ca172f8c821o9ab51c3t4f02fab6fa";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <a
          href="https://www.shecodes.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://www.weather.shecodes.io/images/logo.png"
            class="logo"
            alt="SheCodes Logo"
          ></img>
        </a>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn w-100" />
            </div>
          </div>
        </form>
        <hr />
        <WeatherInfo data={weatherData} />
        <WeatherForecast data={weatherData} />
        <hr />
        <footer>
          This project is coded by{" "}
          <a
            href="https://mary-buckley-portfolio.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="footer"
          >
            Mary Buckley
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/mbkly/react-weather-app"
            target="_blank"
            rel="noreferrer"
            className="footer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://mb-react-weather-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="footer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
