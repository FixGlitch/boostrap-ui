import React, { useState } from "react";
import { Collapse, Button } from "react-bootstrap";
import styles from "./Collapsible.module.css";

const Collapsible = ({
  title,
  children,
  defaultOpen = false,
  buttonClassName = "",
  contentClassName = "",
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.collapsible}>
      <Button
        onClick={handleToggle}
        aria-expanded={isOpen}
        className={`${styles.toggleButton} ${buttonClassName}`}
      >
        {title}
      </Button>
      <Collapse in={isOpen}>
        <div className={`${styles.content} ${contentClassName}`}>
          {children}
        </div>
      </Collapse>
    </div>
  );
};

export default Collapsible;
