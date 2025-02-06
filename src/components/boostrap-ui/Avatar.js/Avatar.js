"use client";
import styles from "./Avatar.module.css";
import Image from "next/image";

export default function Avatar({
  src,
  alt = "Avatar",
  size = "md",
  rounded = false,
  border = false,
  className = "",
  style = {},
  fallback = "😊",
  ...props
}) {
  const sizeClass = styles[size] || styles.md;
  const roundedClass = rounded ? styles.rounded : "";
  const borderClass = border ? styles.border : "";

  return (
    <div
      className={`${styles.avatar} ${sizeClass} ${roundedClass} ${borderClass} ${className}`}
      style={style}
      {...props}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          className={styles.image}
          onError={(e) => {
            e.target.src = "";
            e.target.alt = alt;
          }}
        />
      ) : (
        <span className={styles.fallback}>{fallback}</span>
      )}
    </div>
  );
}
