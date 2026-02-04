import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/logo.png';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footbar() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSubContainer}>
        <img className={styles.logo} src={logo}></img>
        <h2>Weather Wise</h2>
      </div>
      <div className={styles.rightSubContainer}>
        <div className={styles.icons}><FaGithub/></div>
        <div className={styles.icons}><FaLinkedin/></div>
        <div className={styles.icons}><SiGmail/></div>
      </div>
    </div>
  )
}

export default Footbar