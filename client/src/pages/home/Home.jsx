import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Home.module.css";
import bgimg from "../../assets/BackgroundImage.webp";
import logo from "../../assets/logo.png";
import { WiThermometer, WiHumidity, WiStrongWind } from "react-icons/wi";
import Footer from "../../components/footer/Footer";

function Home({ city }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/weather/liveweather",
          { params: { city } }
        );

        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
  }, [city]);

  if (!weather) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div className={styles.container}>
      <img
        className={styles.heroBackgroundImg}
        src={bgimg}
        alt="background"
      />

      <div className={styles.heroContent}>
        <div className={styles.weatherHeroCard}>
          
          {/* LEFT SIDE */}
          <div className={styles.heroLeft}>
            <h1 className={styles.heading}>{weather.city}</h1>
            <p>{new Date().toDateString()}</p>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img src={weather.icon} alt="icon" width="40" />
              <p>{weather.condition}</p>
            </div>

            <div className={styles.infoRow}>
              <WiThermometer className={styles.infoIcon} />
              <p className={styles.para}>Feels Like: {weather.feelsLike}°C</p>
            </div>

            <div className={styles.infoRow}>
              <WiHumidity className={styles.infoIcon} />
              <p className={styles.para}>Humidity: {weather.humidity}%</p>
            </div>

            <div className={styles.infoRow}>
              <WiStrongWind className={styles.infoIcon} />
              <p className={styles.para}>Wind Speed: {weather.windSpeed} kph</p>
            </div>
          </div>

          <div className={styles.heroRight}>
            <img className={styles.logo} src={logo} alt="logo" />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;