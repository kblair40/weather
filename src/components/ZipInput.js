import React, { useRef, useContext } from "react";

import { WeatherInfoContext } from "../store/contexts/WeatherInfoContext";
// import classes from "./ZipInput.module.css";

const ZipInput = () => {
  const zipInputRef = useRef();
  const weatherCtx = useContext(WeatherInfoContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const zip = zipInputRef.current.value;
    weatherCtx.getData(zip);

    zipInputRef.current.value = "";
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <label htmlFor="zip-code">Zip Code: </label>{" "}
        <input ref={zipInputRef} id="zip-code" name="zip-code" type="text" />
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
};

export default ZipInput;
