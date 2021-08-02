import React from "react";
import Card from "react-card-component";

import classes from "./WeatherCard.module.css";

const WeatherCard = (props) => {
  return (
    // <div>
    <Card glass>{props.children}</Card>
    // {/* </div> */}
  );
};

export default WeatherCard;
