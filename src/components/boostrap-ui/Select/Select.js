import React from "react";
import { Form } from "react-bootstrap";
import styles from "./Select.module.css";

const Select = ({
  label,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  customClass = "",
}) => {
  return (
    <Form.Group
      controlId="select"
      className={`${styles.formGroup} ${customClass}`}
    >
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        as="select"
        value={value}
        onChange={onChange}
        className={styles.selectControl}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default Select;
