import React from "react";
import Avatar from "@material-ui/core/Avatar";
import styles from "./VideoCard.module.css";

const VideoCard = (props) => {
  const {
    image,
    title,
    channel,
    views,
    timestamp,
    channelImage,
  } = props;
  return (
    <div href={props.href} onClick={props.onClick} ref={props.ref} className={styles["videocard"]}>
      <img className={styles["videocard__image"]} src={image} alt="" />
      <div className={styles["videocard__info"]}>
        <Avatar
          className={styles["videocard__avatar"]}
          alt={channel}
          src={channelImage}
        />
        <div className={styles["videocard__text"]}>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} views • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
