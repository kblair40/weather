import React, { useRef, useContext } from "react";
import Card from "react-card-component";

// import WeatherCard from "./WeatherCard";
import { WeatherInfoContext } from "../../store/contexts/WeatherInfoContext";
import classes from "./ZipInput.module.css";

const ZipInput = () => {
  const weatherCtx = useContext(WeatherInfoContext);
  const zipInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const zip = zipInputRef.current.value;
    weatherCtx.getData(zip);

    zipInputRef.current.value = "";
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className={classes.zipForm}>
        <Card className={classes.card} glass>
          <input
            className={classes.zipInput}
            placeholder="Search..."
            ref={zipInputRef}
            id="zip-code"
            name="zip-code"
          />
        </Card>
        {/* <button type="submit">Submit</button> */}
      </form>
    </React.Fragment>
  );
};

export default ZipInput;
