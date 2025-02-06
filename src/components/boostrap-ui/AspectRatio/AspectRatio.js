import React from "react";
import styles from "./AspectRatio.module.css";

export default function AspectRatio({
  ratio = "16:9",
  children,
  className = "",
  style = {},
  asChild = false,
  ...props
}) {
  const [width, height] = ratio.split(":").map(Number);
  const paddingBottom = (height / width) * 100;

  const Container = asChild ? "div" : "section";

  return (
    <Container
      className={`${styles.aspectRatio} ${className}`}
      style={{ paddingBottom: `${paddingBottom}%`, ...style }}
      {...props}
    >
      <div className={styles.content}>{children}</div>
    </Container>
  );
}
