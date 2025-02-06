import React, { useState } from "react";
import { Form, Dropdown } from "react-bootstrap";
import styles from "./Combobox.module.css";

const Combobox = ({
  label = "Select an option",
  options = [],
  placeholder = "Search...",
  onSelect,
  defaultValue = "",
}) => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(defaultValue);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (value) => {
    setSelected(value);
    setSearch("");
    if (onSelect) onSelect(value);
  };

  return (
    <div className={styles.combobox}>
      {label && <label className={styles.label}>{label}</label>}
      <Dropdown>
        <Dropdown.Toggle
          variant="light"
          className={styles.dropdownToggle}
          id="combobox-dropdown"
        >
          {selected || placeholder}
        </Dropdown.Toggle>
        <Dropdown.Menu className={styles.dropdownMenu}>
          <Form.Control
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={placeholder}
            className={styles.searchInput}
          />
          <div className={styles.options}>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <Dropdown.Item
                  key={index}
                  onClick={() => handleSelect(option)}
                  className={styles.dropdownItem}
                >
                  {option}
                </Dropdown.Item>
              ))
            ) : (
              <Dropdown.Item className={styles.noOptions}>
                No options found
              </Dropdown.Item>
            )}
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Combobox;
