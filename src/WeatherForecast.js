import React from "react";
import "./WeatherForecast.css";
import "./FormattedDate";
import "./Weather";
import "./WeatherInfo";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="container-md text-center">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Monday</div>
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
