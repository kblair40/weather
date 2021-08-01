import React from "react";

const Icon = ({ icon }) => {
  return <img src={`http://openweathermap.org/img/w/${icon}.png`} />;
};

export default Icon;
