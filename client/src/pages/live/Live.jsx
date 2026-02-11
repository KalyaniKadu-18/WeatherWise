import React from 'react';
import styles from './Live.module.css';
import bgimg from '../../assets/BackgroundImage.webp';
import { FaCloudSun,FaTemperatureHigh ,FaWind ,FaCloud   } from "react-icons/fa";

function Live() {
  return (
    <div className={styles.container}>
       <img src={bgimg} className={styles.bgimg}></img>  
       <div className={styles.LiveContainer}>
        <h2 className={styles.heading}>
               <FaCloudSun className={styles.icon} /> Weather Today
             </h2>
             <hr className={styles.line}/>
             <p className={styles.para}>Stay updated with real-time weather conditions in your city.
          Get accurate temperature, humidity, wind speed, and forecasts to plan your day better.</p>
             </div>
             <div className={styles.messageBox}>
          <p className={styles.message}> <FaTemperatureHigh/>Temperature: 28°C</p>
          <p className={styles.message}> <FaCloud/>Humidity: 65%</p>
          <p className={styles.message}> <FaWind/>Wind Speed: 12 km/h</p>
          <p className={styles.message}> <FaCloud/>Condition: Partly Cloudy</p>
          </div>
    </div>
  )
}

export default Live;
