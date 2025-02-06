import React from "react";
import { Card, Tooltip, OverlayTrigger } from "react-bootstrap";
import styles from "./HoverCard.module.css";

const HoverCard = ({ title, text, hoverContent, cardStyle, tooltipStyle }) => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={
        <Tooltip className={styles.tooltip} style={tooltipStyle}>
          {hoverContent}
        </Tooltip>
      }
    >
      <Card className={`${styles.card}`} style={cardStyle}>
        <Card.Body>
          <Card.Title className={styles.title}>{title}</Card.Title>
          <Card.Text className={styles.text}>{text}</Card.Text>
        </Card.Body>
      </Card>
    </OverlayTrigger>
  );
};

export default HoverCard;
