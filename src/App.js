import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
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
    </div>
  );
}
