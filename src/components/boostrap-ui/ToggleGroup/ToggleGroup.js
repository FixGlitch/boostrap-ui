import React from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import styles from "./ToggleGroup.module.css";

const ToggleGroup = ({ options, selected, onChange }) => {
  return (
    <ButtonGroup>
      {options.map((option, index) => (
        <ToggleButton
          key={index}
          type="radio"
          name="toggle"
          value={option.value}
          checked={selected === option.value}
          onChange={onChange}
          className={styles.toggleGroup}
        >
          {option.label}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
};

export default ToggleGroup;
