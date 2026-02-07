import React from 'react';
import styles from './Navbar.module.css';
import img from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { MdSearch } from "react-icons/md";

function Navbar() {
  return (
    <div className={styles.container}>
      
      {/* Left - Logo */}
      <div className={styles.leftNav}>
        <div className={styles.logo}>
          <Link to={'/'}><img src={img} alt='logo' /></Link>
        </div>
      </div>

      {/* Middle - Search Bar */}
      <div className={styles.midNav}>
        <div className={styles.searchBox}>
          <input 
            className={styles.searchBar}
            type="text" 
            placeholder="Search city..."
          />
          <span className={styles.searchIcon}><MdSearch/></span>
        </div>
      </div>

      {/* Right - Nav Links */}
      <div className={styles.rightNav}>
        <Link className={styles.Link1} to={'/liveweather'}>Live Weather</Link>
        <Link className={styles.Link1} to={'/forecast'}>Forecast</Link>
        <Link className={styles.Link1} to={'/alerts'}>Alerts</Link>
        <Link className={styles.Link1} to={'/signup'}>Signup</Link>
        <Link className={styles.Link1} to={'/login'}>Login</Link>
      </div>
    </div>
  );
}

export default Navbar;
