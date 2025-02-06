import React from "react";
import styles from "./Text.module.css";

export default function Text(props) {
  const {
    text,
    size = "md",
    color = "black",
    weight = "regular",
    tag = "div",
    width,
    justify = false,
    center = false,
    font,
  } = props;
  const Tag = tag;

  const classNames = [
    styles.text,
    styles[size],
    styles[color],
    styles[weight],
    styles[width],
    styles[font],
    justify && styles.justify,
    center && styles.center,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      {Tag ? (
        <Tag className={classNames}>{text}</Tag>
      ) : (
        <div
          className={classNames}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}
    </>
  );
}
