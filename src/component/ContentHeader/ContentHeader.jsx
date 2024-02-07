import { Notifications, Search } from "@mui/icons-material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import "./ContentHeader.css";
function ContentHeader() {
  return (
    <div className="content--header">
      <div className="search-box">
        <Search sx={{ cursor: "pointer" }} />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search anithing here"
        />
      </div>
      <div className="notify">
        <Notifications />
        <Avatar sx={{ bgcolor: "#4481eb" }}>J</Avatar>
        <span>John Doe </span>
      </div>
    </div>
  );
}

export default ContentHeader;
