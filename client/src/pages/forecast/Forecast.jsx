import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Forecast.module.css";
import bgimg from "../../assets/BackgroundImage.webp";

function Forecast({ city }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [weather, setWeather] = useState({
    city: "",
    condition: "",
    temp: "",
    min: "",
    max: "",
    humidity: "",
    wind: "",
    sunrise: "",
    sunset: "",
    hourly: [],
    forecast: [],
  });

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(
          `http://localhost:8000/weather/forecast?city=${city}`
        );

        setWeather(response.data);
      } catch (err) {
        setError("City not found or server error");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className={styles.container}>
      <img src={bgimg} className={styles.bgimg} alt="bg" />

      <div className={styles.heroContent}>

        {loading && <h2>Loading...</h2>}
        {error && <h2 className={styles.error}>{error}</h2>}

        {!loading && !error && (
          <>
            <div className={styles.weatherHeroCard}>
              <div className={styles.heroLeft}>
                <h2>{weather.city}</h2>
                <h1>{weather.temp}°C</h1>
                <p>{weather.condition}</p>
                <p>
                  Min: {weather.min}°C | Max: {weather.max}°C
                </p>
                <p>Humidity: {weather.humidity}%</p>
                <p>Wind: {weather.wind} km/h</p>
                <p>Sunrise: {weather.sunrise}</p>
                <p>Sunset: {weather.sunset}</p>
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
                    <img src={hour.icon} alt="icon" />
                    <h4>{hour.temp}°</h4>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.dailySection}>
              <h3>5 Day Forecast</h3>

              <div className={styles.dailyRow}>
                {weather.forecast?.map((day, index) => (
                  <div className={styles.dayCard} key={index}>
                    <p>{day.date}</p>
                    <img src={day.icon} alt="icon" />
                    <p>{day.condition}</p>
                    <p>Min: {day.min}°C</p>
                    <p>Max: {day.max}°C</p>
                    <p>Rain: {day.rainChance}%</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Forecast;