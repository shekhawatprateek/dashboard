import React from "react";
import "./Listitem.css";
import PersonIcon from "@material-ui/icons/Person";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Listitem(props) {
  return (
    <div className="list">
      <div className="list__picname">
        <div className="picname__icon">
          <PersonIcon />
        </div>
        <div className="picname__name">{props.name}</div>
      </div>
      <div className="list__designation">{props.designation}</div>
      <div className="list__status">{props.status}</div>
      <div className="list__more">
        <MoreHorizIcon />
      </div>
    </div>
  );
}

export default Listitem;
