import React from 'react';
import styles from './Live.module.css';
import bgimg from '../../assets/BackgroundImage.webp'

function Live() {
  return (
    <div className={styles.container}>
       <img src={bgimg} className={styles.bgimg}></img>  
    </div>
  )
}

export default Live;