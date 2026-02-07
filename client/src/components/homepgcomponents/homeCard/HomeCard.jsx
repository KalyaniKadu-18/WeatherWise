import React from 'react';
import styles from './HomeCard.module.css';

function HomeCard({ time, temperature }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{time}</h2>
      <p className={styles.para}>{temperature}</p>
    </div>
  );
}

export default HomeCard;
