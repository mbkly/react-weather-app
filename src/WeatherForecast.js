import React from "react";
import axios from "axios";
import "./WeatherForecast.css";
// import "./FormattedDate";
import "./Weather";
// import "./WeatherInfo";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);
  const apiKey = "d5ca172f8c821o9ab51c3t4f02fab6fa";
  var lon = props.data.lon;
  var lat = props.data.lat;
  var unit = "metric";
  var apiURL = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=${unit}`;
  axios.get(apiURL).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="container-md text-center">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Monday</div>
            <WeatherIcon
              className= "icon"
              url={props.data.icon_url}
              description={props.data.description}
            />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-min">20</span>
              <span className="WeatherForecast-temperature-max">25</span>
            </div>
          </div>
          <div className="col">
            Tuesday
            <WeatherIcon
              url={props.data.icon_url}
              description={props.data.description}
            />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-min">20</span>
              <span className="WeatherForecast-temperature-max">25</span>
            </div>
          </div>
          <div className="col">
            Wednesday
            <WeatherIcon
              url={props.data.icon_url}
              description={props.data.description}
            />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-min">20</span>
              <span className="WeatherForecast-temperature-max">25</span>
            </div>
          </div>
          <div className="col">
            Thursday
            <WeatherIcon
              url={props.data.icon_url}
              description={props.data.description}
            />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-min">20</span>
              <span className="WeatherForecast-temperature-max">25</span>
            </div>
          </div>
          <div className="col">
            Friday
            <WeatherIcon
              url={props.data.icon_url}
              description={props.data.description}
            />
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-min">20</span>
              <span className="WeatherForecast-temperature-max">25</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
