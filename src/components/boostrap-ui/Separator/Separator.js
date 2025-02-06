import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./Separator.module.css";

const Separator = ({ label }) => {
  return (
    <Row className={styles.separator}>
      <Col>
        <hr />
        {label && <span className={styles.label}>{label}</span>}
      </Col>
    </Row>
  );
};

export default Separator;
