"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Accordion.module.css";
import Text from "../Text/Text";

export default function Accordion({
  items,
  defaultActiveKey = "0",
  variant = "primary",
  size = "md",
  rounded = "md",
  fullWidth = false,
  iconUp = null,
  iconDown = null,
  iconWidth = 20,
  iconHeight = 20,
  headerText = { size: "", color: "", weight: "", tag: "" },
  bodyText = { size: "", color: "", weight: "", tag: "" },
  footerText = { size: "", color: "", weight: "", tag: "" },
  className = "",
  cardStyle = "",
  headerStyle = "",
  bodyStyle = "",
  footerStyle = "",
}) {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);

  const toggleItem = (key) => {
    setActiveKey((prevKey) => (prevKey === key ? null : key));
  };

  return (
    <div
      className={`${styles.accordion} ${styles[size]} ${styles[rounded]} ${
        fullWidth ? styles.fullWidth : ""
      } ${styles[variant]} ${className}`}
    >
      {items.map((item, index) => (
        <div className={`${styles.card} ${cardStyle}`} key={index}>
          <div
            onClick={() => toggleItem(String(index))}
            className={`${styles.cardHeader} ${headerStyle}`}
          >
            <div
              className={`${styles.headerContent} ${
                activeKey === String(index) ? styles.activeHeader : ""
              }`}
            >
              <Text text={item.title} {...headerText} />
              {iconDown && activeKey !== String(index) && (
                <Image
                  src={iconDown}
                  className={styles.icon}
                  alt="icon"
                  width={iconWidth}
                  height={iconHeight}
                />
              )}
              {iconUp && activeKey === String(index) && (
                <Image
                  src={iconUp}
                  className={styles.icon}
                  alt="icon"
                  width={iconWidth}
                  height={iconHeight}
                />
              )}
            </div>
          </div>

          {activeKey === String(index) && (
            <>
              <div className={`${styles.body} ${bodyStyle}`}>
                <div className={styles.bodyContent}>
                  {item.image && (
                    <div className={styles.imageColumn}>
                      <Image
                        src={item.image}
                        alt="Accordion image"
                        width={200}
                        height={200}
                        className={styles.image}
                        priority
                      />
                    </div>
                  )}

                  {item.isHtmlContent ? (
                    <div
                      className={styles.bodyGlobal}
                      dangerouslySetInnerHTML={{
                        __html: item.content,
                      }}
                    />
                  ) : (
                    <Text text={item.content} {...bodyText} />
                  )}
                </div>
              </div>

              {item.footer && (
                <div className={`${styles.footer} ${footerStyle}`}>
                  <Text text={item.footer} {...footerText} />
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
