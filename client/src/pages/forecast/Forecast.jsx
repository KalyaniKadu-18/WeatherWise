import React from 'react';
import styles from './Forecast.module.css';
import bgimg from '../../assets/BackgroundImage.webp'

function Forecast() {
  return (
    <div className={styles.container}>
      <img src={bgimg} className={styles.bgimg}></img>
    </div>
  )
}

export default Forecast