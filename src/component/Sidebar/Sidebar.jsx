import React, { useState } from "react";
import "./Sidebar.css";
import { Box } from "@mui/material";
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

function Sidebar({ onActionSelect }) {
  const [selectedAction, setSelectedAction] = useState("discover");

  const handleActionClick = (action) => {
    setSelectedAction(action);
    onActionSelect(action);
  };

  return (
    <div className="menu">
      <div className="logo">
        <AutoStories className="logo-icon" />
        <h2>E-library</h2>
      </div>
      <div className="menu--list">
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <a
            href="#"
            className={`item ${selectedAction === "discover" ? "active" : ""}`}
            onClick={() => handleActionClick("discover")}
          >
            <Home className="icon" />
            Discover
          </a>
          <a
            href="#"
            className={`item ${selectedAction === "category" ? "active" : ""}`}
            onClick={() => handleActionClick("category")}
          >
            <Category className="icon" />
            Category
          </a>
          <a
            href="#"
            className={`item ${selectedAction === "addbooks" ? "active" : ""}`}
            onClick={() => handleActionClick("addbooks")}
          >
            <Download className="icon" />
            Add book
          </a>
          <a
            href="#"
            className={`item ${selectedAction === "allBooks" ? "active" : ""}`}
            onClick={() => handleActionClick("allBooks")}
          >
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
