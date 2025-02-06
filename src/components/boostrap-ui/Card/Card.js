import React from "react";
import { Card as BootstrapCard, Button } from "react-bootstrap";
import styles from "./Card.module.css";

const Card = ({
  title,
  text,
  image,
  buttonText,
  buttonVariant = "primary",
  onButtonClick,
  className = "",
}) => {
  return (
    <BootstrapCard className={`${styles.card} ${className}`}>
      {image && <BootstrapCard.Img variant="top" src={image} alt={title} />}
      <BootstrapCard.Body>
        {title && (
          <BootstrapCard.Title className={styles.cardTitle}>
            {title}
          </BootstrapCard.Title>
        )}
        {text && (
          <BootstrapCard.Text className={styles.cardText}>
            {text}
          </BootstrapCard.Text>
        )}
        {buttonText && (
          <Button
            variant={buttonVariant}
            onClick={onButtonClick}
            className={styles.cardButton}
          >
            {buttonText}
          </Button>
        )}
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
