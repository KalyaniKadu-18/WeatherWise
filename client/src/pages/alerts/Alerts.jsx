import React from "react";
import styles from "./Alerts.module.css";
import bgimg from "../../assets/BackgroundImage.webp";
import AlertCard from "../../components/alertOverlay/alertCard";
import SafetyCard from "../../components/safety/SafetyCard";
import { GoAlertFill } from "react-icons/go";
import { FaCircleCheck } from "react-icons/fa6";

function Alerts() {
  const alertData = {
    type: "thunderstorm",
    location: "Mumbai",
    severity: "High",
    message: "Heavy rain and lightning expected in the next 3 hours.",
    advice: "Stay indoors and avoid open areas.",
  };

const safetyData = {
  heading: "Safety Tips",
  messages: [
    "Avoid open areas and tall trees",
    "Stay indoors during thunderstorms",
    "Do not travel unless absolutely necessary",
    "Avoid flooded roads and low-lying areas",
  ],
};


  return (
    <div className={styles.container}>
      <img src={bgimg} className={styles.bgimg}></img>
      <div className={styles.AlertsOverlay}>
        <h2 className={styles.message}><GoAlertFill className={styles.alerticon}/>Weather Alerts</h2>
        <p className={styles.message}>Stay updated with important weather warnings in your areas</p>
        <div className={styles.AlertCards}>
        <AlertCard {...alertData} />
        <SafetyCard {...safetyData}/>
        </div>
        <div >
          <p className={styles.submessage}><FaCircleCheck className={styles.icon}/> No active alerts right now. Enjoy your Day!</p>
        </div>
      </div>
    </div>
  );
}

export default Alerts;
