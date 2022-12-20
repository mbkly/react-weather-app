import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Zürich</h1>
      <ul>
        <li>Monday 16:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              className="float-left"
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Partly Cloudy"
            />
            <span className="float-left">
              <span className="temperature">2</span>
              <span className="units">°C</span>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 2%</li>
            <li>Humidity: 82%</li>
            <li>Wind: 2 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
