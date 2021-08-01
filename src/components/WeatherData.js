import React, { useContext } from "react";

import { WeatherInfoContext } from "../store/contexts/WeatherInfoContext";
import Icon from "./Icon";
import classes from "./WeatherData.module.css";

const WeatherData = () => {
  const weatherCtx = useContext(WeatherInfoContext);
  const { cityName, weather, temps } = weatherCtx.weatherInfo;
  const inputHasError = weatherCtx.inputError;
  console.log("INPUT HAS ERROR:", inputHasError);

  return (
    <section className={classes.container}>
      <h2 className={classes.cityName}>{cityName}</h2>
      <div className={classes.dataDisplay}>
        <div className={classes.temp}>
          Current Temp: {temps && temps.temp}
          <sup>o</sup>
        </div>
        <div className={classes.weather}>{weather && weather.description}</div>
        {weather && (
          <div className={classes.icon}>
            <Icon icon={weather.icon} />
          </div>
        )}
      </div>
    </section>
  );
};

export default WeatherData;
