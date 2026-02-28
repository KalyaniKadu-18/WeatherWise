import React, { useState } from "react";
import styles from "./Navbar.module.css";
import img from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";

function Navbar({ setCity }) {

  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim() !== "") {
      setCity(input.trim());
      setInput(""); 
    }
  };

  return (
    <div className={styles.container}>
      
      <div className={styles.leftNav}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={img} alt="logo" />
          </Link>
        </div>
      </div>

      {/* MIDDLE SECTION (SEARCH) */}
      <div className={styles.midNav}>
        <div className={styles.searchBox}>
          <input
            className={styles.searchBar}
            type="text"
            placeholder="Search city..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <span
            className={styles.searchIcon}
            onClick={handleSearch}
          >
            <MdSearch />
          </span>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className={styles.rightNav}>
        <Link className={styles.Link1} to="/liveweather">
          Live Weather
        </Link>
        <Link className={styles.Link1} to="/forecast">
          Forecast
        </Link>
        <Link className={styles.Link1} to="/alerts">
          Alerts
        </Link>
      </div>

    </div>
  );
}

export default Navbar;