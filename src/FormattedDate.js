import React from "react";

export default function FormattedDate(props) {
  var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const day = days[props.date.getDay()];
  var hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  var minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}
