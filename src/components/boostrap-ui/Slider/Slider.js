import React from "react";
import { Form } from "react-bootstrap";
import styles from "./Slider.module.css";

const Slider = ({ value, onChange, min = 0, max = 100, step = 1 }) => {
  return (
    <Form.Group controlId="formSlider" className={styles.slider}>
      <Form.Control
        type="range"
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
      />
      <div className={styles.value}>{value}</div>
    </Form.Group>
  );
};

export default Slider;
