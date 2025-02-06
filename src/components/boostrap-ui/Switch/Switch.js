import React from "react";
import { Form } from "react-bootstrap";
import styles from "./Switch.module.css";

const Switch = ({ checked, onChange }) => {
  return (
    <Form.Check
      type="switch"
      id="custom-switch"
      label=""
      checked={checked}
      onChange={onChange}
      className={styles.switch}
    />
  );
};

export default Switch;
