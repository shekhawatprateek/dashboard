import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Header() {
  return (
    <>
      <div className="main__header">
        <div className="header__name">
          <h2>Dashboard</h2>
        </div>
        <div className="icons">
          <div className="search__icon">
            <SearchIcon />
          </div>
          <div className="mail__icon">
            <MailOutlineIcon />
          </div>
          <div className="notify__icon">
            <NotificationsIcon />
          </div>
        </div>
        <div className="candidate__details">
          <div className="candidate__name">
            <p>Mr. Shekhawat</p>
          </div>
          <div className="candidate__photo">
            <AccountCircleIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
