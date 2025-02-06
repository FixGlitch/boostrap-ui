import React from "react";
import styles from "./AlertDialog.module.css";
import Text from "../Text/Text";

const AlertDialog = ({
  variant = "primary",
  size = "md",
  rounded = "md",
  show,
  title = "Alert",
  message = "Are you sure?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  confirmVariant = "primary",
  cancelVariant = "secondary",
  headerText = { size: "xs", color: "black", weight: "bold", tag: "" },
  className = "",
  confirmStyle,
  cancelStyle,
  modalStyle,
  headerStyle,
  bodyStyle,
  footerStyle,
  closeButton = true,
  centered = true,
  backdrop = true,
  children,
}) => {
  if (!show) return null;

  return (
    <>
      {backdrop && <div className={styles.backdrop} onClick={onCancel}></div>}

      <div
        className={`${styles.modal} ${styles[size]} ${styles[rounded]} ${
          centered ? styles.centered : ""
        } ${modalStyle || ""} ${styles[variant]} ${className}`}
      >
        <div className={`${styles.header} ${headerStyle || ""}`}>
          <Text text={title} {...headerText} />
          {closeButton && (
            <button
              className={styles.closeButton}
              onClick={onCancel}
              aria-label="Close"
            >
              &times;
            </button>
          )}
        </div>

        <div className={`${styles.body} ${bodyStyle || ""}`}>
          {children || <p>{message}</p>}
        </div>

        <div className={`${styles.footer} ${footerStyle || ""}`}>
          <button
            className={`${styles.button} ${styles[cancelVariant]} ${
              cancelStyle || ""
            }`}
            onClick={onCancel}
          >
            {cancelText}
          </button>
          <button
            className={`${styles.button} ${styles[confirmVariant]} ${
              confirmStyle || ""
            }`}
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </>
  );
};

export default AlertDialog;
