import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Live.module.css";
import bgimg from "../../assets/BackgroundImage.webp";
import {
  FaCloudSun,
  FaTemperatureHigh,
  FaWind,
  FaCloud,
  FaTint
} from "react-icons/fa";

function Live({ city }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/weather/liveweather",
          { params: { city } }
        );

    console.log("API DATA:", response.data);
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
      <img src={bgimg} className={styles.bgimg} alt="background" />

      <div className={styles.LiveContainer}>
        <h2 className={styles.heading}>
          <FaCloudSun className={styles.icon} /> Weather Today - {weather.city}
        </h2>

        <hr className={styles.line} />

        <p className={styles.para}>
          Stay updated with real-time weather conditions in your city.
        </p>
      </div>

      <div className={styles.messageBox}>
        <p className={styles.message}>
          <FaTemperatureHigh /> Temperature: {weather.temp}°C
        </p>

        <p className={styles.message}>
          <FaTint /> Humidity: {weather.humidity}%
        </p>

        <p className={styles.message}>
          <FaWind /> Wind Speed: {weather.windSpeed} km/h
        </p>

        <p className={styles.message}>
          <FaCloud /> Condition: {weather.condition}
        </p>
      </div>
    </div>
  );
}

export default Live;