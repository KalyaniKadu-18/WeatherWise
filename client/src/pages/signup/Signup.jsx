import React from "react";
import styles from "./Signup.module.css";
import Button from "../../components/button/Button";

function Signup() {
  return (
    <div className={styles.container}>
      {/* <img src={bgimg} className={styles.bgimg}></img> */}
      <input className={styles.input} placeholder="Username" type="text" />

      <input className={styles.input} placeholder="Email" type="email" />

      <input className={styles.input} placeholder="Password" type="password" />

      <Button>Signup</Button>
    </div>
  );
}

export default Signup;
