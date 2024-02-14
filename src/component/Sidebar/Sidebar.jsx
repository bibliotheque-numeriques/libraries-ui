import {
  AutoStories,
  Category,
  Download,
  Help,
  Home,
  LibraryBooks,
  Logout,
  Settings,
} from "@mui/icons-material";
import React from "react";
import "./Sidebar.css";
import { Box } from "@mui/material";
function Sidebar() {
  return (
    <div className="menu">
      <div className="logo">
        <AutoStories className="logo-icon" />
        <h2>E-library</h2>
      </div>
      <div className="menu--list">
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <a href="#" className="item">
            <Home className="icon" />
            Discover
          </a>
          <a href="#" className="item">
            <Category className="icon" />
            Catégory
          </a>
          <a href="#" className="item">
            <Download className="icon" />
            Download
          </a>
          <a href="#" className="item">
            <LibraryBooks className="icon" />
            All book
          </a>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2vh",
            justifyContent: "flex-end",
          }}
        >
          <a href="#" className="item">
            <Settings className="icon" />
            Setting
          </a>
          <a href="#" className="item">
            <Help className="icon" />
            Support
          </a>
          <a href="#" className="item">
            <Logout className="icon" />
            Logout
          </a>
        </Box>
      </div>
    </div>
  );
}

export default Sidebar;
