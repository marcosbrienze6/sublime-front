import React from "react";
import styles from "./FormControl.module.css";

const FormControl = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
  button,
}) => {
  return (
    <div className={styles.formControl}>
      <label htmlFor={id}>{label}</label>
      <div className={styles.inputWrapper}>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={error ? styles.inputError : ""}
        />
      </div>

      <div className={styles.inputButton}> {button}</div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default FormControl;
