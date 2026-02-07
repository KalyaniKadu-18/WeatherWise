import React from "react";
import styles from "./alertCard.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { GoAlertFill } from "react-icons/go";

function AlertCard({ type, location, severity, message, advice }) {
  const icons = {
    thunderstorm: "⚡",
    flood: "🌊",
    heatwave: "🔥",
    cyclone: "🌪️",
    rain: "🌧️",
  };

  return (
    <div className={styles.alertCardContainer}>
      <h2>{icons[type]} {type.toUpperCase()} ALERT</h2>

      <p><strong><FaLocationDot/>  Location:</strong> {location}</p>
      <p><strong><GoAlertFill/>  Severity:</strong> {severity}</p>
      <p>{message}</p>
      <p className={styles.advice}>{advice}</p>
    </div>
  );
}

export default AlertCard;
