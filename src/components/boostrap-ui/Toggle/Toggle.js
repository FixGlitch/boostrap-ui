import React from "react";
import { ToggleButton } from "react-bootstrap";
import styles from "./Toggle.module.css";

const Toggle = ({ checked, onChange }) => {
  return (
    <ToggleButton
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className={styles.toggle}
    >
      Toggle
    </ToggleButton>
  );
};

export default Toggle;
