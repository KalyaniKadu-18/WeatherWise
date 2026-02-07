import React from "react";
import styles from "./Button.module.css";

function Button(Button_name, type = "button") {
  return (
    <div className={styles.container} type={type}>
      <Button>{Button_name}</Button>
    </div>
  );
}

export default Button;
