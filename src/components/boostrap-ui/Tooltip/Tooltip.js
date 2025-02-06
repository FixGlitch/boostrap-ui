import React from "react";
import { Tooltip as BootstrapTooltip, OverlayTrigger } from "react-bootstrap";
import styles from "./Tooltip.module.css";

const Tooltip = ({ target, content }) => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={<BootstrapTooltip id="tooltip">{content}</BootstrapTooltip>}
    >
      <span className={styles.tooltip}>{target}</span>
    </OverlayTrigger>
  );
};

export default Tooltip;
