import React, { useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import styles from "./NavigationMenu.module.css";

const NavigationMenu = ({ brand, items, brandUrl, className, style }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      className={`${styles.navbar} ${className}`}
      style={style}
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href={brandUrl} className={styles.brand}>
          {brand}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {items.map((item, index) => (
              <Nav.Item key={index} className={styles.navItem}>
                <Nav.Link href={item.href} className={styles.navLink}>
                  {item.text}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationMenu;
