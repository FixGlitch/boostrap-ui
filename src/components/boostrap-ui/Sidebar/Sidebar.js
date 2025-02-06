"use client";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <h3>BoostrapUi</h3>
      </div>
      <nav className={styles.sidebarNav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="/accordion" className={styles.navLink}>
              Accordion
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/alert" className={styles.navLink}>
              Alert
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/alert-dialog" className={styles.navLink}>
              Alert Dialog
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/avatar" className={styles.navLink}>
              Avatar
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/badge" className={styles.navLink}>
              Badge
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/button" className={styles.navLink}>
              Button
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/hero" className={styles.navLink}>
              Hero
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
