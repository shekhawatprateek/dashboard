import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CallRoundedIcon from "@material-ui/icons/CallRounded";
import MailRoundedIcon from "@material-ui/icons/MailRounded";
import ChatBubbleRoundedIcon from "@material-ui/icons/ChatBubbleRounded";
import "./Candidate.css";

function Candidate() {
  return (
    <div className="candidate__card">
      <div className="candidate__photo">
        <AccountCircleIcon />
      </div>
      <div className="candidate__name">John</div>
      <div className="candidate__designation">Developer</div>
      <div className="candidate__icons">
        <CallRoundedIcon />
        <MailRoundedIcon />
        <ChatBubbleRoundedIcon />
      </div>
      <div className="candidate__details">
        <table className="tble">
          <tr>
            <th>Company</th>
            <td>FoxHr Pvt Ltd.</td>
          </tr>
          <tr>
            <th>Joining Date</th>
            <td>21/07/2020</td>
          </tr>
          <tr>
            <th>Projects</th>
            <td>21 Active</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Candidate;
