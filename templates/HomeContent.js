import React from "react";
import {RecommendedVideos} from "../components";
import styles from "./HomeContent.module.css";

const HomeContent = () => {
  return (
    <div className={styles["home-content"]}>
      <RecommendedVideos />
    </div>
  );
};

export default HomeContent;
