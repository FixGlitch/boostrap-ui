import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import styles from "./Menubar.module.css";

const Menubar = ({ brand, items, brandUrl, className, style }) => {
  return (
    <Navbar
      expand="lg"
      className={`${styles.menubar} ${className}`}
      style={style}
    >
      <Container>
        <Navbar.Brand href={brandUrl} className={styles.brand}>
          {brand}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
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

export default Menubar;
