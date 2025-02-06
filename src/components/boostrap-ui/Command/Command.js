import React from "react";
import { InputGroup, FormControl, Button, ListGroup } from "react-bootstrap";
import styles from "./Command.module.css";

const Command = ({
  label = "Command Center",
  placeholder = "Type a command...",
  commands = [],
  onExecute,
}) => {
  const handleCommandClick = (command) => {
    if (onExecute) onExecute(command);
  };

  return (
    <div className={styles.commandContainer}>
      {label && <h5 className={styles.label}>{label}</h5>}
      <InputGroup className={styles.inputGroup}>
        <FormControl
          placeholder={placeholder}
          aria-label="Command Input"
          className={styles.commandInput}
        />
        <Button variant="primary" className={styles.commandButton}>
          Run
        </Button>
      </InputGroup>
      <ListGroup className={styles.commandList}>
        {commands.map((command, index) => (
          <ListGroup.Item
            key={index}
            onClick={() => handleCommandClick(command)}
            className={styles.commandItem}
          >
            {command}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Command;
