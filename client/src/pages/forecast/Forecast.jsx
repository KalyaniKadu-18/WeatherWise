import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Forecast.module.css";
import bgimg from '../../assets/BackgroundImage.webp';

function Forecast() {

  const [city, setCity] = useState("");

  const [weather, setWeather] = useState({
    city: "",
    condition: "",
    temp: "",
    min: "",
    max: "",
    humidity: "",
    wind: "",
    rainChance: "",
    sunrise: "",
    sunset: "",
    hourly: []
  });

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/weather/forecast?city=${city}`
        );

        const data = response.data;

        setWeather({
          city: data.city,
          condition: data.condition,
          temp: data.temp,
          min: data.min,
          max: data.max,
          humidity: data.humidity,
          wind: data.wind,
          rainChance: data.rainChance,
          sunrise: data.sunrise,
          sunset: data.sunset,
          hourly: data.hourly
        });

      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className={styles.container}>

      <img src={bgimg} className={styles.bgimg} alt="bg" />

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
            {weather.hourly?.map((hour, index) => (
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