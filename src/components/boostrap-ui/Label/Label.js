import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import styles from "./Label.module.css";

const Label = ({ text, htmlFor, size, color, className, style, ...props }) => {
  const labelClasses = `${styles.label} ${styles[size] || ""} ${
    styles[color] || ""
  } ${className || ""}`;

  return (
    <Form.Label
      htmlFor={htmlFor}
      className={labelClasses}
      style={style}
      {...props}
    >
      {text}
    </Form.Label>
  );
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]),
  className: PropTypes.string,
  style: PropTypes.object,
};

Label.defaultProps = {
  size: "medium",
  color: "dark",
  className: "",
  style: {},
};

export default Label;
