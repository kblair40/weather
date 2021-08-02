import React from "react";

import { WeatherInfoProvider } from "./store/contexts/WeatherInfoContext";
import PageContainer from "./components/UI/PageContainer";
import ZipInput from "./components/UI/ZipInput";
import WeatherData from "./components/WeatherData";
import "./App.css";

function App() {
  return (
    <WeatherInfoProvider>
      <div className="App">
        <PageContainer>
          <ZipInput />
          <WeatherData />
        </PageContainer>
      </div>
    </WeatherInfoProvider>
  );
}

export default App;
