import React from "react";
import styles from "./FormControl.module.css";

const FormControl = ({ id, label, type, value, onChange, error, button }) => {
  return (
    <div className={styles.formControl}>
      <label htmlFor={id}>{label}</label>
      <div className={styles.inputWrapper}>
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          className={error ? styles.inputError : ""}
        />
        {button && <div className={styles.inputButton}>{button}</div>}
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default FormControl;
