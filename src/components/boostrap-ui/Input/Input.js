import React from "react";
import { Form } from "react-bootstrap";
import styles from "./Input.module.css";

const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  isInvalid,
  errorMessage,
  inputStyle,
  labelStyle,
  ...rest
}) => {
  return (
    <Form.Group className={styles.inputGroup}>
      {label && (
        <Form.Label className={styles.label} style={labelStyle}>
          {label}
        </Form.Label>
      )}
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        isInvalid={isInvalid}
        className={styles.input}
        style={inputStyle}
        {...rest}
      />
      {isInvalid && (
        <Form.Control.Feedback type="invalid" className={styles.error}>
          {errorMessage}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export default Input;
