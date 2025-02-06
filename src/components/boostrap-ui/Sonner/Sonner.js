import React, { useState } from "react";
import { Toast } from "react-bootstrap";
import styles from "./Sonner.module.css";

const Sonner = ({ message, variant = "success" }) => {
  const [show, setShow] = useState(true);

  return (
    <Toast
      onClose={() => setShow(false)}
      show={show}
      delay={3000}
      autohide
      className={`${styles.sonner} bg-${variant}`}
    >
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};

export default Sonner;
