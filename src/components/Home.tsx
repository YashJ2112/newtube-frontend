import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth0 } from "../contexts/auth0-context";

function Home(): JSX.Element {
  let history = useHistory();
  const { isAuthenticated, getIdTokenClaims, user } = useAuth0();
  const [uploads, setUploads] = useState([]);

  const deleteUpload = async (id: string) => {
    const accessToken = await getIdTokenClaims();
    await fetch(
      `${process.env.REACT_APP_SERVER_BASE_URL}/content/delete?uploadID=${id}`,
      {
        method: "delete",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
          authorization: `Bearer ${accessToken.__raw}`,
        }),
      }
    );
    _removeUploadFromView(id);
    history.push("/");
  };

  const _removeUploadFromView = (id: string) => {
    const index = uploads.findIndex(
      (upload: { _id: string }) => upload._id === id
    );
    uploads.splice(index, 1);
  };

  useEffect(() => {
    const fetchUploads = async (): Promise<any> => {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_BASE_URL}/content/uploads`
      );
      const json = await response.json();
      setUploads(json);
    };
    fetchUploads();
  }, []);

  return (
    <section className="content-area section">
      <div className="container">
        <div className="row">
          {uploads &&
            uploads.map(
              (upload: { title: React.ReactNode; _id: any; author: any }) => (
                <div className="col-lg-4 col-md-6" key={upload._id}>
                  <div className="card h-100">
                    <div className="single-upload upload-style-1">
                      <div className="content-image">
                        <img
                          src="https://images.ctfassets.net/23aumh6u8s0i/7stduDuP1cBQXQpmzaBMTd/6f589aa58fe112ced6e1a3901a9c3dad/blog-image_psvipq"
                          alt="NewTube"
                        />
                      </div>
                      <span className="avatar">
                        <img
                          src="https://images.ctfassets.net/23aumh6u8s0i/5RgCRgruCESPZUobN5RL6G/a8082500f2e6dc7fb4007c0cdfd0cbe3/WEB_FREAK_50PX-01_yaqxg7"
                          alt="Profile"
                        />
                      </span>
                      <div className="content-info">
                        <h4 className="title">
                          <span>
                            <b>{upload.title}</b>
                          </span>
                        </h4>
                      </div>
                    </div>
                    <ul className="upload-footer">
                      <li>
                        <Link
                          to={`/upload/${upload._id}`}
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View Upload{" "}
                        </Link>
                      </li>
                      <li>
                        {isAuthenticated && user.name === upload.author && (
                          <Link
                            to={`/edit/${upload._id}`}
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Edit Upload{" "}
                          </Link>
                        )}
                      </li>
                      <li>
                        {isAuthenticated && user.name === upload.author && (
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => deleteUpload(upload._id)}
                          >
                            Delete Upload
                          </button>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    </section>
  );
}
export default Home;
