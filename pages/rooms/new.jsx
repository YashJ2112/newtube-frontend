import React from "react";
import Head from "next/head";
import { Content, Header } from "../../components";
import styles from "../../styles/pages/new.module.css";
const NewRoom = () => {
  const [videoTime, setVideoTime] = React.useState("00:00");
  const [controlsState, setControlsState] = React.useState("paused");
  React.useEffect(() => {
    setTimeout(() => setVideoTime("00:01"), 4000);
  }, []);

  const start = () => {
    setControlsState("synchronizing");
    setTimeout(() => setControlsState("playing"), 2000);
  };
  const pause = () => {
    setControlsState("synchronizing");
    setTimeout(() => setControlsState("paused"), 2000);
  };
  return (
    <React.Fragment>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        {/* <!-- <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" /> --> */}
        {/* <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    --> */}
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />

        {/* <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    --> */}
        <title>NewTube - Room</title>
      </Head>
      <Header />
      <Content>
        <React.Fragment>
          <div className={styles["content"]}>
            <div className={styles["video-box"]}>
              <input type="url" name="" id="" />
              <div className={styles["timer"]}>
                <h2>Timer</h2>
                <h3>{videoTime}</h3>
              </div>
              <div className={styles["controls"]}>
                <button onClick={start} disabled={controlsState != "paused"}>
                  Start
                </button>
                <button onClick={pause} disabled={controlsState != "playing"}>
                  Pause
                </button>
                <div>
                  <h2>
                    Current video status: <b >{controlsState}</b>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      </Content>
    </React.Fragment>
  );
};

export default NewRoom;
