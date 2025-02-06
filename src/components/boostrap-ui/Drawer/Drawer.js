import React from "react";
import { Offcanvas } from "react-bootstrap";
import styles from "./Drawer.module.css";

const Drawer = ({
  show,
  onClose,
  placement = "start", // "start" (left), "end" (right), "top", or "bottom"
  title = "Drawer Title",
  children,
  footer,
}) => {
  return (
    <Offcanvas
      show={show}
      onHide={onClose}
      placement={placement}
      className={styles.drawer}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className={styles.title}>{title}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className={styles.content}>{children}</div>
      </Offcanvas.Body>
      {footer && <div className={styles.footer}>{footer}</div>}
    </Offcanvas>
  );
};

export default Drawer;
