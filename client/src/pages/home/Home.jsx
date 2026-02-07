import React from 'react';
import styles from './Home.module.css';
import sunimg from '../../assets/overlayImg1.jpg';
import bgimg from '../../assets/BackgroundImage.webp';
import HomeCard from '../../components/homepgcomponents/homeCard/HomeCard';

function Home() {

  const hourlyData = [
    { time: 'Now', temperature: '20' },
    { time: '1 PM', temperature: '22' },
    { time: '2 PM', temperature: '23' },
    { time: '3 PM', temperature: '24' },
    { time: '4 PM', temperature: '25' },
  ];

  return (
    <div className={styles.container}>
      
      {/* Background Image */}
      <img 
        className={styles.heroBackgroundImg} 
        src={bgimg} 
        alt="background"
        loading="lazy" 
      />

      <div className={styles.heroContent}>

        {/* Weather Hero Card */}
        <div className={styles.weatherHeroCard}>
          <div className={styles.heroLeft}>
            <h2>Pune</h2>
            <p>Tuesday, April 23</p>
            <h1>72°F</h1>
            <p>Sunny</p>
            <span>H: 78°  L: 50°  Feels like 73°</span>
          </div>

          <div className={styles.heroRight}>
            <img className={styles.sunimg} src={sunimg} alt="sun" />
          </div>
        </div>

        {/* Hourly Forecast Section */}
        <div className={styles.hourlySection}>
          <h3>Hourly Forecast</h3>

          <div className={styles.hourlyRow}>
            {hourlyData.map((item, index) => (
              <HomeCard 
                key={index}
                time={item.time}
                temperature={item.temperature}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
