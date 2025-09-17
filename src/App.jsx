import "./App.css";
import Menu from "./components/menu/Menu";
import Main from "./components/main/Main";
import api from "./services/api";
import { useEffect, useState } from "react";

import cloudy from "./assets/cloudy-bhg.jpg";
import clear from "./assets/clear.jpg";
import rainy from "./assets/rainy.png";
import storm from "./assets/storm.png";

function App() {
  const [cities, setCities] = useState("");
  const [weather, setWeather] = useState(null);

  const handleSubmit = async () => {
    if (!cities) return;

    try {
      const response = await api.get("weather", {
        params: { q: cities, units: "metric", lang: "en" },
      });
      setWeather(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("Erro ao buscar clima:", error);
      alert("Cidade não encontrada ou inválida!");
      setWeather(null);
    }
  };

  useEffect(() => {
    if (!weather) return;
    const condition = weather.weather[0].main;
    let bgImage = "";

    switch (condition) {
      case "Clear":
        bgImage = `url(${clear})`;
        break;
      case "Clouds":
        bgImage = `url(${rainy})`;
        break;
      case "Rain":
        bgImage = `url(${cloudy})`;
        break;
      case "Snow":
        bgImage = `url(${snow})`;
        break;
      case "Thunderstorm":
        bgImage = `url(${storm})`;
        break;
      default:
        bgImage = `url(${cloudy})`;
    }

    document.body.style.backgroundImage = bgImage;
  }, [weather]);

  return (
    <div className="app-content">
      <Main weather={weather} />
      <Menu
        weather={weather}
        cities={cities}
        setCities={setCities}
        handleSubmit={handleSubmit} // passa a função para o Menu
      />
    </div>
  );
}

export default App;
