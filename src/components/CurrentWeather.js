import React, { useContext } from "react";

import { WeatherInfoContext } from "../store/contexts/WeatherInfoContext";
import Icon from "./UI/Icon";
import WeatherCard from "./UI/WeatherCard";
import classes from "./CurrentWeather.module.css";

const CurrentWeather = () => {
  const weatherCtx = useContext(WeatherInfoContext);
  const { cityName, weather, temps } = weatherCtx.weatherInfo;
  return (
    <div className={classes.container}>
      <WeatherCard>
        <div className={classes.weatherData}>
          <h2 className={classes.cityName}>{cityName}</h2>
          <div className={classes.dataDisplay}>
            <div className={classes.temp}>
              Current Temp: {temps && temps.temp}
              <sup>o</sup>
            </div>
            <div className={classes.weather}>
              {weather && weather.description}
            </div>
            {weather && (
              <div className={classes.icon}>
                <Icon icon={weather.icon} />
              </div>
            )}
          </div>
        </div>
      </WeatherCard>
    </div>
  );
};

export default CurrentWeather;
