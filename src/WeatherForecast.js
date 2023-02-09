import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import "./Weather";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.data.city]);

  function load() {
    const apiKey = "d5ca172f8c821o9ab51c3t4f02fab6fa";
    var city = props.data.city;
    const unit = "metric";
    const apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${unit}`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="container-md text-center d-none d-sm-block mb-5 mt-3">
          <div className="row">
            {forecast.map(function (dailyForecast, index) {
              if (index < 5) {
                return (
                  <div className="col" key={index}>
                    <WeatherForecastDay data={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  } else {
    load();
  }
}
