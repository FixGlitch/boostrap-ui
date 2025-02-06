import React from "react";
import { ProgressBar } from "react-bootstrap";
import styles from "./Progress.module.css";

const ProgressComponent = ({ now, label, variant = "success" }) => {
  return (
    <div className={styles.progressContainer}>
      {label && <div className={styles.label}>{label}</div>}
      <ProgressBar
        now={now}
        label={`${now}%`}
        variant={variant}
        className={styles.progressBar}
      />
    </div>
  );
};

export default ProgressComponent;
