import React from "react";
import Form from "react-bootstrap/Form";
import styles from "./Checkbox.module.css";

const Checkbox = ({
  id,
  label,
  checked = false,
  disabled = false,
  onChange,
  className = "",
}) => {
  return (
    <Form.Check
      type="checkbox"
      id={id}
      className={`${styles.checkbox} ${className}`}
      checked={checked}
      disabled={disabled}
      onChange={(e) => onChange && onChange(e.target.checked)}
      label={label}
    />
  );
};

export default Checkbox;
