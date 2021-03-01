import React from "react";
import Header from "./Header.js";
import Banner from "./Banner.js";
import Recruit from "./Recruit.js";
import Candidate from "./Candidate.js";
import Calender from "./Calender.js";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <Header />

        <div className="dashboard__content">
          <div className="second__column">
            <Banner />
            <Recruit />
          </div>

          <div className="third__column">
            <Calender />
            <Candidate />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
