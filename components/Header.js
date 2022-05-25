import React from "react";
// import newTubeLogo from "public/images/NewTube_Logo.png";
// import userAvatar from "public/images/user_avatar.png";
import styles from "./Header.module.css";
import Link from "next/link";
const Header = () => {
  return (
    <div className={styles["header"]}>
      {/* <div className="flex align-center px-6 py-4"> */}
      <div className={styles["header-left"]}>
        <i className="fas fa-bars"></i>
        <Link href="/">
          <a>
            <img
              className={styles["logo"]}
              src="/images/NewTube_Logo.png"
              alt="NewTube_Logo"
            ></img>
          </a>
        </Link>
      </div>{" "}
      <div className={styles["header-center"]}>
        <div className={styles["search"]}>
          <input
            type="text"
            placeholder="Search"
            className={styles["search-box"]}
          />
          <button className={styles["search-btn"]}>
            <i className="fas fa-search"></i>
          </button>
        </div>{" "}
      </div>{" "}
      <div className={styles["header-right"]}>
        <div className={styles["user-info"]}>
          <i className="fas fa-comment-alt"></i>
          <i className="fas fa-bell"></i>
          <img
            className={styles["avatar"]}
            src="/images/user_avatar.png"
            alt="User Avatar"
          ></img>
        </div>
      </div>
      <div className={styles["upload"]}>
        <Link href="/rooms/new">
          <button className={styles["upload-btn"]}>
            {"    "} Open room
            <i className="fa-solid fa-square-plus fa-xl"></i>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
