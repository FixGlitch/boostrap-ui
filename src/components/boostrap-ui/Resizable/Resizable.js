import React, { useState, useRef } from "react";
import { Button, Row, Col } from "react-bootstrap";
import styles from "./Resizable.module.css";

const Resizable = () => {
  const [width, setWidth] = useState(300);
  const resizableRef = useRef(null);
  const isResizing = useRef(false);
  const lastX = useRef(0);

  const startResize = (e) => {
    isResizing.current = true;
    lastX.current = e.clientX;
  };

  const stopResize = () => {
    isResizing.current = false;
  };

  const handleResize = (e) => {
    if (!isResizing.current) return;

    const dx = e.clientX - lastX.current;
    setWidth((prevWidth) => Math.max(100, prevWidth + dx));
    lastX.current = e.clientX;
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      setWidth((prevWidth) => Math.max(100, prevWidth - 10));
    } else if (e.key === "ArrowRight") {
      setWidth((prevWidth) => prevWidth + 10);
    }
  };

  return (
    <div
      className={styles.resizableContainer}
      onMouseMove={handleResize}
      onMouseUp={stopResize}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <Row>
        <Col
          style={{ width: `${width}px`, transition: "width 0.2s" }}
          ref={resizableRef}
        >
          <div className={styles.panelContent}>
            <h5>Resizable Panel</h5>
            <p>This panel can be resized using the mouse or keyboard.</p>
          </div>
        </Col>
        <Col>
          <div className={styles.resizer} onMouseDown={startResize}></div>
        </Col>
      </Row>
    </div>
  );
};

export default Resizable;
