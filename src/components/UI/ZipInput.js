import React, { useState, useContext } from "react";
import Card from "react-card-component";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { makeStyles } from "@material-ui/core/styles";

import { WeatherInfoContext } from "../../store/contexts/WeatherInfoContext";

const useStyles = makeStyles((theme) => ({
  zipForm: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    width: "40vh",
    minWidth: "12rem",
    maxWidth: "16rem",
    padding: 0,
    margin: 0,
    borderRadius: "10px",
    overflow: "hidden",
  },
  zipInput: {
    "& .MuiInputBase-root": {
      border: "none",
    },
    "& svg": {
      color: "white",
    },
  },
  inputRoot: {
    color: "white",
  },
  searchButton: {
    "&:hover": {
      background: "transparent",
    },
  },
}));

const ZipInput = () => {
  const weatherCtx = useContext(WeatherInfoContext);
  const [zipInput, setZipInput] = useState("");
  const classes = useStyles();

  const handleChange = (e) => {
    setZipInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    weatherCtx.getData(zipInput);

    setZipInput("");
  };

  return (
    <form onSubmit={handleSubmit} className={classes.zipForm}>
      <Card className={classes.card} glass>
        <TextField
          className={classes.zipInput}
          id="zip-code"
          name="zip-code"
          placeholder="Search..."
          type="text"
          onChange={handleChange}
          value={zipInput}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  classes={{ root: classes.searchButton }}
                  onClick={handleSubmit}
                  disableFocusRipple
                  disableRipple
                >
                  <SearchOutlinedIcon />
                </IconButton>
              </InputAdornment>
            ),
            disableUnderline: true,
            classes: {
              root: classes.inputRoot,
            },
          }}
        />
      </Card>
    </form>
  );
};

export default ZipInput;
