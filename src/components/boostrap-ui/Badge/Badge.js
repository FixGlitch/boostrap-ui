"use client";
import styles from "./Badge.module.css";
import Text from "../Text/Text";

const Badge = ({
  text,
  textProps = { size: "", color: "", weight: "", tag: "" },
  variant = "primary",
  size = "md",
  pill = false,
  className = "",
  style = {},
  ...props
}) => {
  const sizeClass = styles[size] || styles.md;
  const pillClass = pill ? styles.pill : "";

  return (
    <div
      className={`${styles.badge} ${styles[variant]} ${sizeClass} ${pillClass} ${className}`}
      style={style}
      {...props}
    >
      <Text text={text} {...textProps} />
    </div>
  );
};

export default Badge;
