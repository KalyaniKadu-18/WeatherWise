import React from 'react';
import styles from './Home.module.css';
import bgimg from '../../assets/primaryBackgroundImage.png';
import sunimg from '../../assets/overlayImg1.jpg'

function Home() {
  return (
    <div className={styles.container}>
      
      <img className={styles.heroBackgroundImg} src={bgimg} />

      <div className={styles.heroContent}>

        {/* New York Weather Card */}
        <div className={styles.weatherHeroCard}>
          <div className={styles.heroLeft}>
            <h2>Pune</h2>
            <p>Tuesday, April 23</p>
            <h1>72°F</h1>
            <p>Sunny</p>
            <span>H: 78°  L: 50°  Feels like 73°</span>
          </div>

          <div className={styles.heroRight}>
             <img className={styles.sunimg} src={sunimg}></img>
          </div>
        </div>

        {/* Hourly Forecast */}
        <div className={styles.hourlySection}>
          <h3>Hourly Forecast</h3>

          <div className={styles.hourlyRow}>
            <div className={styles.hourCard}>Now<br />☀️<br />72°</div>
            <div className={styles.hourCard}>1 PM<br />☀️<br />74°</div>
            <div className={styles.hourCard}>2 PM<br />☀️<br />76°</div>
            <div className={styles.hourCard}>3 PM<br />🌤️<br />75°</div>
            <div className={styles.hourCard}>4 PM<br />☁️<br />71°</div>
            <div className={styles.hourCard}>5 PM<br />☁️<br />71°</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
