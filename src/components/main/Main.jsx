import "./index.css";

import { memo } from "react";

const Main = ({weather}) => {

  if (!weather) return <div className="main">Please search for a city.</div>;

  
  return (
    <div className="main">
      <div className="logo">
        <h1>better.weather</h1>
      </div>
      <div className="temp">
        <h2>{Math.round(weather.main.temp)}°C</h2>
        <div className="city">
            <h3>{weather.name}, {weather.sys.country}</h3>
            <p>Feels like: {Math.round(weather.main.feels_like)}°C | {(weather.weather[0].main).toUpperCase()} | {(weather.weather[0].description).toUpperCase()}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(Main);
