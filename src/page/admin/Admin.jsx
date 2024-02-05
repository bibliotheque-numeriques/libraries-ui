import React from "react";
import Sidebar from "../../component/Sidebar/Sidebar";
import Content from "../../component/Content/Content";
import "./Admin.css";
function Admin() {
  return (
    <div className="admin-body">
      <div className="dashboard">
        <Sidebar />
        <div className="dashboard--content">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default Admin;
