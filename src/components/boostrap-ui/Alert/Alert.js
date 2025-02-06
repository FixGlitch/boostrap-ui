import React from "react";
import styles from "./Alert.module.css";

export default function Alert({
  variant = "primary",
  message,
  onClose,
  dismissible = true,
  icon,
  title,
  action,
  position = "top-right",
}) {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return styles.primary;
      case "danger":
        return styles.danger;
      case "success":
        return styles.success;
      case "warning":
        return styles.warning;
      default:
        return styles.primary;
    }
  };

  const getPositionClass = () => {
    switch (position) {
      case "top-left":
        return styles.topLeft;
      case "bottom-right":
        return styles.bottomRight;
      case "bottom-left":
        return styles.bottomLeft;
      default:
        return styles.topRight;
    }
  };

  return (
    <div
      className={`${styles.alert} ${getVariantStyles()} ${getPositionClass()}`}
      role="alert"
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <div className={styles.content}>
        {title && <strong className={styles.title}>{title}</strong>}
        <span className={styles.message}>{message}</span>
      </div>
      {action && <div className={styles.action}>{action}</div>}
      {dismissible && (
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
      )}
    </div>
  );
}
