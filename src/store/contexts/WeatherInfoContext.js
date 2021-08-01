import { createContext, useState } from "react";
import axios from "axios";

const API_KEY = "e1585421744fc4476c33c4487249f7ab";

export const WeatherInfoContext = createContext();

export const WeatherInfoProvider = (props) => {
  const [weatherInfo, setWeatherInfo] = useState({
    cityName: "",
    weather: {},
    wind: "",
    temps: {},
  });
  const [inputError, setInputError] = useState(false);

  const getData = async (zip) => {
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather/",
        {
          params: {
            zip: parseInt(zip),
            units: "imperial",
            appid: API_KEY,
          },
        }
      );
      setInputError(false);
      const data = response.data;
      console.log("DATA RETRIEVED:", data);
      setWeatherInfo({
        cityName: data.name,
        weather: data.weather[0],
        temps: data.main,
        wind: data.wind,
      });
      // return response.data;
    } catch (e) {
      setInputError(true);
      console.log("ERROR:", e);
    }
  };

  return (
    <WeatherInfoContext.Provider value={{ weatherInfo, getData, inputError }}>
      {props.children}
    </WeatherInfoContext.Provider>
  );
};
