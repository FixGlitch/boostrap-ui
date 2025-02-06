import React from "react";
import { Modal } from "react-bootstrap";
import styles from "./Sheet.module.css";

const Sheet = ({ show, onHide, children }) => {
  return (
    <Modal show={show} onHide={onHide} className={styles.sheet}>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default Sheet;
