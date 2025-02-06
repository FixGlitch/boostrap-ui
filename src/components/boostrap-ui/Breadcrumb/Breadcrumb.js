import React from "react";
import { Breadcrumb as BootstrapBreadcrumb } from "react-bootstrap";
import styles from "./Breadcrumb.module.css";

const Breadcrumb = ({ items, className = "" }) => {
  return (
    <BootstrapBreadcrumb className={`${styles.breadcrumb} ${className}`}>
      {items.map((item, index) => (
        <BootstrapBreadcrumb.Item
          key={index}
          href={item.href}
          active={item.active}
          className={styles.breadcrumbItem}
        >
          {item.label}
        </BootstrapBreadcrumb.Item>
      ))}
    </BootstrapBreadcrumb>
  );
};

export default Breadcrumb;
