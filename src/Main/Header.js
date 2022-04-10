import React from "react";
import newTubeLogo from "../images/NewTube_Logo.png";
import userAvatar from "../images/user_avatar.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      {/* <div className="flex align-center px-6 py-4"> */}
      <div className="header-left">
        <i className="fas fa-bars"></i>
        <img className="logo" src={newTubeLogo} alt="NewTube_Logo"></img>{" "}
      </div>{" "}
      <div className="header-center">
        <div className="search">
          <input type="text" placeholder="Search" className="search-box" />
          <button className="search-btn">
            <i className="fas fa-search"></i>
          </button>
        </div>{" "}
      </div>{" "}
      <div className="header-right">
        <div className="user-info">
          <i className="fas fa-comment-alt"></i>
          <i className="fas fa-bell"></i>
          <img className="avatar" src={userAvatar} alt="User Avatar"></img>
        </div>
      </div>
      <div className="upload">
        <button className="upload-btn">
          <i className="fas fa-long-arrow-alt-up"></i>
          {"    "} Upload
        </button>
      </div>
    </div>
  );
};

export default Header;
