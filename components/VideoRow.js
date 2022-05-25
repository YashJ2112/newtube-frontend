// import React from "react";
// import Video from "./Video";

// const VideoRow = (props) => {
//   const { type, label, videos } = props;
//   const renderRowLabel = () => {
//     if (type === "normal") {
//       return <h3 className="videos-row-label">{label}</h3>;
//     }

//     if (type === "channel") {
//       return (
//         <div className="videos-row-label-channel">
//           <div className="left">
//             <img src="" className="avatar" />
//             <h3 className="video-row-label">Channel name</h3>
//             <span className="small-text">Recommended channel for you</span>
//           </div>
//           <div className="right">
//             <button className="subscribe-btn">Subscribe</button>
//           </div>
//         </div>
//       );
//     }
//   };
//   return (
//     <div className="videos-row-container">
//       <div className="row">
//         <div className="video-label-container">{renderRowLabel()}</div>
//         <div className="videos-row-item">
//           {videos.map((video) => (
//             <Video video={video} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoRow;

import React from "react";
import styles from "./VideoRow.module.css";

const VideoRow = ({ views, description, timestamp, channel, title, image }) => {
  return (
    <div className={styles["videorow"]}>
      <img src={image} alt="" />
      <div className={styles["videorow__text"]}>
        <h3>{title}</h3>
        <p className={styles["videorow__headline"]}>
          {channel} • {views} views • {timestamp}
        </p>
        <p className={styles["videorow__description"]}>{description}</p>
      </div>
    </div>
  );
};

export default VideoRow;
