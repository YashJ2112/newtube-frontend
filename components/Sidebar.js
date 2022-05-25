import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const mainMenus = [
    { text: "Home", icon: "fas fa-home" },
    { text: "Trending", icon: "fas fa-chart-line" },
    { text: "Subscriptions", icon: "fas fa-bookmark" },
  ];
  const libraryMenus = [
    { text: "History", icon: "fas fa-history" },
    { text: "Watch later", icon: "fas fa-clock" },
    { text: "Liked videos", icon: "fas fa-thumbs-up" },
    { text: "Show more", icon: "fas fa-arrows-alt" },
  ];
  const bestMenus = [
    { text: "Music", icon: "fas fa-music" },
    { text: "Sport", icon: "fas fa-basketball-ball" },
    { text: "Gaming", icon: "fas fa-gamepad" },
    { text: "Films", icon: "fas fa-film" },
    { text: "TV shows", icon: "fas fa-tv" },
    { text: "News", icon: "fas fa-newspaper" },
    { text: "Live", icon: "fas fa-broadcast-tower" },
  ];
  return (
    <div className={styles["sidebar"]}>
      <ul className={styles["menu-group"]}>
        {mainMenus.map((menu) => (
          <li key={menu.text} className={styles["menu-item"]}>
            <i className={menu.icon}></i>
            <span className={styles["text"]}>{menu.text}</span>
          </li>
        ))}
      </ul>
      <h4 className={styles["menu-group-label"]}>Library</h4>
      <ul className={styles["menu-group"]}>
        {libraryMenus.map((menu) => (
          <li key={menu.text} className={styles["menu-item"]}>
            <i className={menu.icon}></i>
            <span className={styles["text"]}>{menu.text}</span>
          </li>
        ))}
      </ul>
      <h4 className={styles["menu-group-label"]}>Best of Youtube</h4>
      <ul className={styles["menu-group"]}>
        {bestMenus.map((menu) => (
          <li key={menu.text} className={styles["menu-item"]}>
            <i className={menu.icon}></i>
            <span className={styles["text"]}>{menu.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
