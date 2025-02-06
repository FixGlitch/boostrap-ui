import React from "react";
import { Tab, Nav } from "react-bootstrap";
import styles from "./Tabs.module.css";

const CustomTabs = ({ defaultActiveKey, tabs }) => {
  return (
    <Tab.Container defaultActiveKey={defaultActiveKey} className={styles.tabs}>
      <Nav variant="pills">
        {tabs.map((tab, index) => (
          <Nav.Item key={index}>
            <Nav.Link eventKey={tab.eventKey}>{tab.title}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <Tab.Content>
        {tabs.map((tab, index) => (
          <Tab.Pane eventKey={tab.eventKey} key={index}>
            {tab.content}
          </Tab.Pane>
        ))}
      </Tab.Content>
    </Tab.Container>
  );
};

export default CustomTabs;
