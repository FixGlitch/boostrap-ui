"use client";

import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import Text from "../Text/Text";
import Button from "../Button/Button";

const Hero = ({
  backgroundHero,
  heroMobile,
  title,
  description,
  label,
  url,
  target,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={styles.heroContainer}
      style={{
        backgroundImage:
          isMobile && heroMobile
            ? `url(${heroMobile})`
            : `url(${backgroundHero})`,
        backgroundColor: "var(--primary-black)",
      }}
    >
      {/* Overlay */}
      <div className={styles.overlay} />

      {/* Contenido */}
      <div className={styles.content}>
        {/* Título */}
        <div className={styles.titleWrapper}>
          <h1
            dangerouslySetInnerHTML={{ __html: title }}
            className={styles.titleText}
          />
        </div>

        {/* Descripción */}
        <Text tag="p" text={description} color="grey-600" size="xs" />

        {/* Botón */}
        {label && url && (
          <div className={styles.buttonWrapper}>
            <Button
              text={label}
              href={url}
              target={target}
              textSize="lg"
              size="md-tertiary"
              style="primary"
              radius="radius-sm"
              fullWidth={false}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
