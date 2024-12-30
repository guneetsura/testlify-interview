import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import GlobalNav from "./components/GlobalNav/GlobalNav";
import Avatar from "./assets/Avatar.svg";
import menu from "./assets/icons/menu.svg";
import dropdown from "./assets/icons/dropdown.svg";
import leftArrow from "./assets/icons/left-arrow.svg";
import rightArrow from "./assets/icons/right-arrow.svg";
import calender from "./assets/icons/calender.svg";
import { useRef } from "react";
import IssueTracker from "./components/IssueTracker/IssueTracker";

function App() {
  const dateInputRef = useRef(null);

  const handleIconClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker();
    }
  };

  return (
    <div className="app">
      <Navbar />
      <div className="app-content">
        <GlobalNav />
        <div className="app-body">
          <div className="action-bar">
            <a>
              <img src={Avatar} alt="avatar" />
              <span>Divya Shah</span>
            </a>
            <div className="action-btn-bar">
              <button className="days-btn">
                Days
                <img src={dropdown} alt="dropdown" />
              </button>
              <button className="log-time-btn">Log Time</button>
              <button className="menu-btn">
                <img src={menu} alt="menu" />
              </button>
            </div>
          </div>
          <div className="date-container">
            {/* <div classname="date-range-picker"> */}
              <button className="date-btn">
                <img src={leftArrow} alt="left arrow" />
                <img src={calender} alt="calender" className="calender-icon" />
                <input type="date" id="date" name="date" className="date-input" />
                <img src={rightArrow} alt="right arrow" />
              </button>
              
              {/* <button className="arrow-btn">
                
              </button> */}
            {/* </div> */}
            <span className="label">Group by</span>
            <button className="group-btn">
              Issues
              <img src={dropdown} alt="dropdown" />
            </button>
          </div>
          <IssueTracker />
        </div>
      </div>
    </div>
  );
}

export default App;
