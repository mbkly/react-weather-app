import "./App.css";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <footer>
        This project is coded by{" "}
        <a
          href="https://mary-buckley-portfolio.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Mary Buckley
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/mbkly/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
