import React from "react";
import { Modal, Button } from "react-bootstrap";
import styles from "./Dialog.module.css";

const Dialog = ({
  show,
  title = "Dialog Title",
  message = "This is the dialog message.",
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal show={show} onHide={onCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title className={styles.title}>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className={styles.message}>{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={onCancel}
          className={styles.cancelButton}
        >
          {cancelText}
        </Button>
        <Button
          variant="primary"
          onClick={onConfirm}
          className={styles.confirmButton}
        >
          {confirmText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Dialog;
