import React from "react";
import { Form } from "react-bootstrap";
import styles from "./Textarea.module.css";

const Textarea = ({ value, onChange, placeholder }) => {
  return (
    <Form.Group controlId="formTextarea" className={styles.textarea}>
      <Form.Control
        as="textarea"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Form.Group>
  );
};

export default Textarea;
