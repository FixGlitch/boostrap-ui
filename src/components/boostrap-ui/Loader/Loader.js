import React from "react";
import styles from "./Loader.module.css";

const Loader = ({ size = "lg", variant = "primary" }) => {
  const spinnerSizeClass = size === "sm" ? styles.spinnerSm : styles.spinnerLg;
  const spinnerVariantClass = styles[`spinner-${variant}`];

  return (
    <div className={styles.loaderContainer}>
      <div
        className={`${styles.spinner} ${spinnerSizeClass} ${spinnerVariantClass}`}
      />
    </div>
  );
};

export default Loader;
