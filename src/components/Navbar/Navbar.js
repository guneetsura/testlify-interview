import React from "react";
import "./Navbar.scss";
import navicon from "../../assets/icons/nav-icon.svg";
import logo from "../../assets/Jira.svg";
import search from "../../assets/icons/search.svg";
import notification from "../../assets/icons/notification.svg";
import quesCircle from "../../assets/icons/question-circle.svg";
import settings from "../../assets/icons/settings.svg";
import dropdown from "../../assets/icons/dropdown.svg";
import profile from "../../assets/Avatar.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a className="icon">
          <img src={navicon} alt="icon" />
        </a>
        <a className="logo">
          <img src={logo} alt="logo" />
        </a>
        <a>Your Work</a>
        <a>
          Projects<img src={dropdown} />
        </a>
        <a>
          Filters<img src={dropdown} />
        </a>
        <a>
          Dashboards<img src={dropdown} />
        </a>
        <a>People</a>
        <a>
          Apps<img src={dropdown} />
        </a>
        <button className="create-btn">Create</button>
      </div>
      <div className="navbar-right">
        <span className="search-bar">
          <img src={search} alt="search" />
          <input type="text" placeholder="Search" />
        </span>
        <a className="icon">
          <img src={notification} alt="notification" />
        </a>
        <a className="icon">
          <img src={quesCircle} alt="question circle" />
        </a>
        <a className="icon">
          <img src={settings} alt="settings" />
        </a>
        <a className="logo">
          <img src={profile} alt="profile" className="profile-img" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
