import {
  AutoStories,
  Help,
  Home,
  Message,
  QueryStats,
  Report,
  Task,
} from "@mui/icons-material";
import React from "react";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="menu">
      <div className="logo">
        <AutoStories className="logo-icon" />
        <h2>E-library</h2>
      </div>
      <div className="menu--list">
        <a href="#" className="item">
          <Home className="icon" />
          Dashboard
        </a>
        <a href="#" className="item">
          <Task className="icon" />
          Assignment
        </a>
        <a href="#" className="item">
          <Report className="icon" />
          Report
        </a>
        <a href="#" className="item">
          <QueryStats className="icon" />
          Stats
        </a>
        <a href="#" className="item">
          <Message className="icon" />
          Message
        </a>
        <a href="#" className="item">
          <Help className="icon" />
          Help
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
