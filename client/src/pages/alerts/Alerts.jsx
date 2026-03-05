import React, { useEffect, useState } from "react";
import styles from "./Alerts.module.css";
import bgimg from "../../assets/BackgroundImage.webp";
import AlertCard from "../../components/alertOverlay/alertCard";
import SafetyCard from "../../components/safety/SafetyCard";
import { GoAlertFill } from "react-icons/go";
import { FaCircleCheck } from "react-icons/fa6";

function Alerts() {

  const [alerts, setAlerts] = useState([]);
  const [city] = useState("Mumbai");
  const [loading, setLoading] = useState(true);

  const safetyData = {
    heading: "Safety Tips",
    messages: [
      "Avoid open areas and tall trees",
      "Stay indoors during thunderstorms",
      "Do not travel unless absolutely necessary",
      "Avoid flooded roads and low-lying areas",
    ],
  };

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const data = await getWeatherAlerts(city);

        if (data.alerts) {
          setAlerts(data.alerts);
        } else {
          setAlerts([]);
        }

      } catch (error) {
        console.error("Error fetching alerts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlerts();
  }, [city]);

  return (
    <div className={styles.container}>
      <img src={bgimg} className={styles.bgimg} alt="background" />

      <div className={styles.AlertsOverlay}>
        <h2 className={styles.message}>
          <GoAlertFill className={styles.alerticon} />
          Weather Alerts
        </h2>

        <p className={styles.message}>
          Stay updated with important weather warnings in your area
        </p>

        <div className={styles.AlertCards}>

          {loading ? (
            <p>Loading alerts...</p>
          ) : alerts.length > 0 ? (

            alerts.map((alert, index) => (
              <AlertCard
                key={index}
                type={alert.category}
                location={city}
                severity={alert.severity}
                message={alert.headline}
                advice={alert.description}
              />
            ))

          ) : (

            <p className={styles.submessage}>
              <FaCircleCheck className={styles.icon} />
              No active alerts right now. Enjoy your Day!
            </p>

          )}

          <SafetyCard {...safetyData} />

        </div>
      </div>
    </div>
  );
}

export default Alerts;