import React from "react";
import { Toast as BootstrapToast } from "react-bootstrap";
import styles from "./Toast.module.css";

const CustomToast = ({ message, onClose, show }) => {
  return (
    <BootstrapToast show={show} onClose={onClose} className={styles.toast}>
      <BootstrapToast.Body>{message}</BootstrapToast.Body>
    </BootstrapToast>
  );
};

export default CustomToast;
