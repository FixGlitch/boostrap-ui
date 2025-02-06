import React from "react";
import { Card } from "react-bootstrap";
import styles from "./ScrollArea.module.css";

const ScrollArea = ({
  children,
  height = "300px",
  width = "100%",
  customClass = "",
}) => {
  return (
    <Card className={`${styles.cardContainer} ${customClass}`}>
      <Card.Body>
        <h5>Custom Scroll Area</h5>
        <div
          className={styles.scrollArea}
          style={{ height: height, width: width }}
        >
          {children}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ScrollArea;
