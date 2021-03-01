import React from "react";
import "./Drawer.css";

function Drawer() {
  return (
    <div className="drawer">
      <div className="drawer__header">
                <div className="drawer__logo">
                <img
                    src="https://www.humanrightslogo.net/sites/default/files/HRLogoCMYKsmallRGB.png"
                    alt="Logo"
                    width="50"
                    height="50"
                />
                </div>
                <div className="drawer__brandname">TwitHR</div>
      </div>

      <div className="drawer__buttons">
                <a href="#">Dashboard</a>
                <a href="#">Recruitment</a>
                <a href="#">Onboarding</a>
                <a href="#">Reports</a>
                <a href="#">Calender</a>
                <a href="#">Settings</a>
      </div>
    </div>
  );
}

export default Drawer;
