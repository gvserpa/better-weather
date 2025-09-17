import temp from "../../assets/temp-cold.png";
import search from "../../assets/search-.png";
import "./index.css";

function Menu({cities, setCities, handleSubmit, weather}) {

  return (
    <header>
      <div className="menu">
        <div className="menu-title">
          <div className="menu-search">
            <img src={temp} />
            <input onChange={(e) => setCities(e.target.value)} placeholder="Search for a city..." value={cities} />
            <button onClick={handleSubmit} >
              <img src={search} />
            </button>
          </div>
          <hr />
        </div>

        <div className="main-cities">
          <ul>
            <li onClick={() => {setCities('Sydney'); handleSubmit()}}>Sydney</li>
            <li onClick={() => {setCities('New York'); handleSubmit()}}>New York</li>
            <li onClick={() => {setCities('Rio de Janeiro'); handleSubmit()}}>Rio de Janeiro</li>
            <li onClick={() => {setCities('London'); handleSubmit()}}>London</li>
          </ul>
          <hr />
        </div>
        <div className="weather-details">
          <h3>Weather Details</h3>
          <div className="cloudy">
            <p>Cloudy</p>
            <p>
              <span>{weather ? `${weather.clouds.all}` : "--"}%</span>
            </p>
          </div>
          <div className="cloudy">
            <p>Humidity</p>
            <p>
              <span>{weather ? `${weather.main.humidity}` : "--"}%</span>
            </p>
          </div>
          <div className="cloudy">
            <p>Wind</p>
            <p>
              <span>{weather ? `${weather.wind.speed}` : "--"}km/h</span>
            </p>
          </div>
          <div className="cloudy">
            <p>Max</p>
            <p>
              <span>{weather ? Math.round(weather.main.temp_max) : "--"}°C</span>
            </p>
          </div>
                    <div className="cloudy">
            <p>Min</p>
            <p>
              <span>{weather ? Math.round(weather.main.temp_min) : "--"}°C</span>
            </p>
          </div>
                  <hr />
        </div>

      </div>
    </header>
  );
}

export default Menu;
