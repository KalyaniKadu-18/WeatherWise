import React, { useState } from "react";
import styles from "./Forecast.module.css";
import bgimg from '../../assets/BackgroundImage.webp';

function Forecast() {

  const [weather] = useState({
    city: "Pune",
    condition: "Cloudy",
    temp: 30,
    min: 23,
    max: 30,
    humidity: 60,
    wind: 10,
    rainChance: 25,
    sunrise: "6:10 AM",
    sunset: "6:35 PM",
    hourly: [
      { time: "2 PM", temp: 29, icon: "🌤️" },
      { time: "3 PM", temp: 28, icon: "☁️" },
      { time: "4 PM", temp: 27, icon: "☁️" },
      { time: "5 PM", temp: 26, icon: "🌧️" },
      { time: "6 PM", temp: 25, icon: "☁️" },
      { time: "7 PM", temp: 24, icon: "🌙" },
    ]
  });

  return (
    <div className={styles.container}>

      <img src={bgimg} className={styles.bgimg} />

      <div className={styles.heroContent}>

        <div className={styles.weatherHeroCard}>
          <div className={styles.heroLeft}>
            <h2>{weather.city}</h2>
            <h1>{weather.temp}°C</h1>
            <p>{weather.condition}</p>
            <p>Min: {weather.min}°C | Max: {weather.max}°C</p>
            <p>Humidity: {weather.humidity}% | Wind: {weather.wind} km/h</p>
          </div>

          <div className={styles.heroRight}>
            ☁️
          </div>
        </div>

        <div className={styles.hourlySection}>
          <h3>Hourly Forecast</h3>

          <div className={styles.hourlyRow}>
            {weather.hourly.map((hour, index) => (
              <div className={styles.hourCard} key={index}>
                <p>{hour.time}</p>
                <span>{hour.icon}</span>
                <h4>{hour.temp}°</h4>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}

export default Forecast;
