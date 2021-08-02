import React from "react";
import Card from "react-card-component";

import classes from "./WeatherCard.module.css";

const WeatherCard = (props) => {
  return (
    <Card className={classes.container} glass>
      {props.children}
    </Card>
  );
};

export default WeatherCard;
