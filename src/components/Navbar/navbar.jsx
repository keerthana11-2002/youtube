import React from "react";
import "./navbar.css";
import menu from "../../assets/menu.png";
import search from "../../assets/search.png";
import upload from "../../assets/upload.png";
import more from "../../assets/more.png";
import notification from "../../assets/notification.png";
import profile from "../../assets/user_profile.jpg";
import { Link } from "react-router-dom";
import logo2 from "../../assets/logo2.png";

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          src={menu}
          alt="menu"
          className="menu-icon"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
        />
        <Link to="/">
        <img src={logo2} alt="logo" className="logo"/>
        </Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={search} alt="search" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload} alt="upload-icon" />
        <img src={more} alt="more-icon" />
        <img src={notification} alt="notification" />
        <img src={profile} alt="profiles" className="user-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
