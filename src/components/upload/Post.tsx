import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

function Post() {
  let { uploadId } = useParams();
  const [upload, setUpload] = useState<any>({});

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_BASE_URL}/content/upload/${uploadId}`
      );
      const json = await response.json();
      setUpload(json);
    };
    fetchData();
  }, [uploadId]);

  return (
    <section className="upload-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-md-0" />
          <div className="col-lg-10 col-md-12">
            {upload && (
              <div className="main-upload">
                <div className="upload-top-area">
                  <h5 className="pre-title">Nest React Content</h5>
                  <h3 className="title">
                    <span>
                      <b>{upload.title}</b>
                    </span>
                  </h3>
                  <p className="para">{upload.body}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Post;
