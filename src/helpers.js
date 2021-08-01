import axios from "axios";

const API_KEY = "e1585421744fc4476c33c4487249f7ab";

export const getData = async (zip) => {
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
    return response.data;
    // const { name, wind, weather, main } = response.data;
    // setCityName(name);
    // setWind(wind);
    // setWeather(weather[0]);
    // setTemps(main);
    // console.log(
    //   "name:",
    //   name,
    //   "wind:",
    //   wind,
    //   "weather:",
    //   weather,
    //   "main:",
    //   main
    // );
  } catch (e) {
    console.log("ERROR:", e);
  }
};
