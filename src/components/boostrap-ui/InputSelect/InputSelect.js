import React from "react";
import { Form } from "react-bootstrap";
import styles from "./InputSelect.module.css";

const InputSelect = ({
  label,
  options = [],
  value,
  onChange,
  onBlur,
  isInvalid,
  errorMessage,
  selectStyle,
  labelStyle,
  ...rest
}) => {
  return (
    <Form.Group className={styles.selectGroup}>
      {label && (
        <Form.Label className={styles.label} style={labelStyle}>
          {label}
        </Form.Label>
      )}
      <Form.Select
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        isInvalid={isInvalid}
        className={styles.select}
        style={selectStyle}
        {...rest}
      >
        <option value="" disabled>
          -- Select an option --
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Select>
      {isInvalid && (
        <Form.Control.Feedback type="invalid" className={styles.error}>
          {errorMessage}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export default InputSelect;
