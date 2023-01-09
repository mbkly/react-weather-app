import React from "react";
import "./Weather";

export default function WeatherIcon(props) {
  return <img src={props.url} alt={props.description} />;
}
