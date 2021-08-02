import React, { useContext } from "react";

import { WeatherInfoContext } from "../store/contexts/WeatherInfoContext";
import Icon from "./UI/Icon";
import CurrentWeather from "./CurrentWeather";
import classes from "./WeatherData.module.css";

const WeatherData = () => {
  const weatherCtx = useContext(WeatherInfoContext);
  const { cityName, weather, temps } = weatherCtx.weatherInfo;

  return (
    <section className={classes.container}>
      <CurrentWeather />
    </section>
  );
};

export default WeatherData;
