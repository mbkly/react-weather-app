import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import "./Weather";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li className="currentConditions">
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize currentConditions">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div className="float-left">
              <WeatherIcon
                code={props.data.icon}
                description={props.data.description}
                url={props.data.icon_url}
              />
            </div>
            <div className="float-left">
              <span>
                <Temperature celsius={props.data.temperature} />
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <div className="conditions">
                Humidity:{" "}
                <span className="humidity">{props.data.humidity}%</span>{" "}
              </div>
            </li>
            <li>
              <div className="conditions">
                Wind: <span className="wind">{props.data.wind}km/h</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
