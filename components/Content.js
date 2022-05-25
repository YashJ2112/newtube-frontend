import React from "react";
import Sidebar from "./Sidebar";
import styles from "./Content.module.css";

const Content = (props) => {
  return (
    <div className={styles["content"]}>
      <Sidebar />
      {props.children}
    </div>
  );
};

export default Content;
