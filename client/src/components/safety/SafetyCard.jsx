import React from "react";
import styles from "./SafetyCard.module.css";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaCircleCheck } from "react-icons/fa6";

function SafetyCard({ heading, messages }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        {" "}
        <AiFillSafetyCertificate className={styles.icon} />
        {heading}
      </h2>

      <div className={styles.list}>
        {messages.map((msg, index) => (
          <p key={index} className={styles.messages}>
            <FaCircleCheck className={styles.checkIcon} /> {msg}
          </p>
        ))}
      </div>
    </div>
  );
}

export default SafetyCard;
