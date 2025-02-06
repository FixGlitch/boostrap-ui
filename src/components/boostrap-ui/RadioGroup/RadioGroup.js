import React, { useState } from "react";
import { Form } from "react-bootstrap";
import styles from "./RadioGroup.module.css";

const RadioGroup = ({ options, name, label, onChange }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <Form.Group className={styles.radioGroup}>
      {label && <Form.Label>{label}</Form.Label>}
      {options.map((option) => (
        <Form.Check
          key={option.value}
          type="radio"
          label={option.label}
          value={option.value}
          name={name}
          checked={selectedOption === option.value}
          onChange={handleChange}
          className={styles.radioItem}
        />
      ))}
    </Form.Group>
  );
};

export default RadioGroup;
