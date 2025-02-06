"use client";
import React from "react";
import "../styles/globals.css";
import styles from "./layout.module.css";
import Sidebar from "@/components/boostrap-ui/Sidebar/Sidebar";
import Header from "@/components/boostrap-ui/Header/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={styles.body}>
        <div className={styles.layout}>
          <Sidebar />
          <div className={styles.mainContent}>
            <Header />
            <div className={styles.pageContent}>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
