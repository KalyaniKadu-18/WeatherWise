import React from 'react';
import styles from './Home.module.css';
import bgimg from '../../assets/BackgroundImage.webp';
import HomeCard from '../../components/homepgcomponents/homeCard/HomeCard';
import logo from '../../assets/logo.png';

function Home({ city }) {

  const cityWeather = {
    Pune: {
      temp: "72°F",
      condition: "Sunny",
      high: "78°",
      low: "50°",
      hourly: [
        { time: 'Now', temperature: '20°' },
        { time: '1 PM', temperature: '22°' },
        { time: '2 PM', temperature: '23°' },
        { time: '3 PM', temperature: '24°' },
        { time: '4 PM', temperature: '25°' },
      ]
    },
    Mumbai: {
      temp: "84°F",
      condition: "Humid",
      high: "88°",
      low: "70°",
      hourly: [
        { time: 'Now', temperature: '28°' },
        { time: '1 PM', temperature: '30°' },
        { time: '2 PM', temperature: '31°' },
        { time: '3 PM', temperature: '32°' },
        { time: '4 PM', temperature: '33°' },
      ]
    },
    Delhi: {
      temp: "90°F",
      condition: "Hot",
      high: "95°",
      low: "75°",
      hourly: [
        { time: 'Now', temperature: '35°' },
        { time: '1 PM', temperature: '36°' },
        { time: '2 PM', temperature: '38°' },
        { time: '3 PM', temperature: '39°' },
        { time: '4 PM', temperature: '40°' },
      ]
    }
  };

  const data = cityWeather[city] || cityWeather["Pune"];

  return (
    <div className={styles.container}>
      
      <img 
        className={styles.heroBackgroundImg} 
        src={bgimg} 
        alt="background"
      />

      <div className={styles.heroContent}>

        <div className={styles.weatherHeroCard}>
          <div className={styles.heroLeft}>
            <h2>{city || "Pune"}</h2>
            <p>Tuesday, April 23</p>
            <h1>{data.temp}</h1>
            <p>{data.condition}</p>
            <span>H: {data.high}  L: {data.low}</span>
          </div>

          <div className={styles.heroRight}>
            <img className={styles.logo} src={logo}/>
          </div>
        </div>

        <div className={styles.hourlySection}>
          <h3>Hourly Forecast</h3>

          <div className={styles.hourlyRow}>
            {data.hourly.map((item, index) => (
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
