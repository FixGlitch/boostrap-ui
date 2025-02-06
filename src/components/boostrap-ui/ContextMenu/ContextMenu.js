import React, { useState, useRef } from "react";
import { Dropdown } from "react-bootstrap";
import styles from "./ContextMenu.module.css";

const ContextMenu = ({
  options = [],
  onOptionClick,
  triggerLabel = "Right Click Here",
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef(null);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setMenuPosition({ x: e.clientX, y: e.clientY });
    setShowMenu(true);
  };

  const handleOptionClick = (option) => {
    if (onOptionClick) onOptionClick(option);
    setShowMenu(false);
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setShowMenu(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.contextContainer} onContextMenu={handleContextMenu}>
      <div className={styles.trigger}>{triggerLabel}</div>
      {showMenu && (
        <Dropdown.Menu
          ref={menuRef}
          style={{
            top: `${menuPosition.y}px`,
            left: `${menuPosition.x}px`,
            position: "absolute",
          }}
          className={styles.contextMenu}
        >
          {options.map((option, index) => (
            <Dropdown.Item
              key={index}
              onClick={() => handleOptionClick(option)}
              className={styles.contextMenuItem}
            >
              {option.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      )}
    </div>
  );
};

export default ContextMenu;
