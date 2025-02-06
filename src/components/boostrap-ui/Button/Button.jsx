"use client";
import styles from "./Button.module.css";
import Link from "next/link";
import Image from "next/image";
import Text from "../Text/Text";

export default function Button({
  text,
  textProps = { size: "xs", color: "", weight: "bold", tag: "" },
  path = "#",
  onClick,
  href,
  target,
  icon,
  iconFirst = false,
  iconWidth = 14,
  iconHeight = 14,
  variant = "primary",
  size = "md",
  radius = "radius-sm",
  fullWidth = false,
  rounded = false,
}) {
  const handleClick = href === "" ? onClick : onClick;

  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    styles[radius],
    rounded && styles.rounded,
    fullWidth && styles.fullWidth,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link
      href={path || href || "#"}
      target={target ? "_blank" : undefined}
      onClick={handleClick}
      className={buttonClasses}
      aria-label={text}
    >
      {icon && iconFirst && (
        <Image
          src={icon}
          className={`${styles.icon} ${iconFirst && styles.iconFirst}`}
          alt="icon"
          width={iconWidth}
          height={iconHeight}
        />
      )}
      <Text text={text} {...textProps} />
      {icon && !iconFirst && (
        <Image
          src={icon}
          className={styles.icon}
          alt="icon"
          width={iconWidth}
          height={iconHeight}
        />
      )}
    </Link>
  );
}
