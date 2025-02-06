import React from "react";
import { Dropdown } from "react-bootstrap";
import styles from "./DropdownMenu.module.css";

const DropdownMenu = ({ title = "Menu", items = [], onSelect }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" className={styles.toggle}>
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu className={styles.menu}>
        {items.map((item, index) => (
          <Dropdown.Item
            key={index}
            onClick={() => onSelect(item.value)}
            className={styles.item}
          >
            {item.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownMenu;
