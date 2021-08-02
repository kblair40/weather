import React, { useState, useContext } from "react";

import { getData } from "./helpers";
import {
  WeatherInfoProvider,
  WeatherInfoContext,
} from "./store/contexts/WeatherInfoContext";
import ZipInput from "./components/UI/ZipInput";
import WeatherData from "./components/WeatherData";
import "./App.css";

function App() {
  return (
    <WeatherInfoProvider>
      <div className="App">
        <ZipInput />
        <WeatherData />
      </div>
    </WeatherInfoProvider>
  );
}

export default App;
