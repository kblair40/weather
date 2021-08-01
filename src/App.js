import React, { useState, useContext } from "react";

import { getData } from "./helpers";
import {
  WeatherInfoProvider,
  WeatherInfoContext,
} from "./store/contexts/WeatherInfoContext";
import ZipInput from "./components/ZipInput";
import WeatherData from "./components/WeatherData";
import "./App.css";

function App() {
  return (
    <WeatherInfoProvider>
      <div className="App">
        <h1>Weather</h1>
        <ZipInput />
        <WeatherData />
      </div>
    </WeatherInfoProvider>
  );
}

export default App;
