import React, { useState } from "react";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import styles from "./Popover.module.css";

const PopoverComponent = ({ triggerText, popoverTitle, popoverContent }) => {
  const [show, setShow] = useState(false);

  const popover = (
    <Popover id="popover-basic" className={styles.popover}>
      <Popover.Header as="h3">{popoverTitle}</Popover.Header>
      <Popover.Body>{popoverContent}</Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger
      trigger="click"
      placement="right"
      overlay={popover}
      onEnter={() => setShow(true)}
      onExited={() => setShow(false)}
    >
      <Button variant="secondary" className={styles.triggerButton}>
        {triggerText}
      </Button>
    </OverlayTrigger>
  );
};

export default PopoverComponent;
