import React, { useState } from "react";
import Sidebar from "../../component/Sidebar/Sidebar";
import "./Admin.css";
import ContentHeader from "../../component/ContentHeader/ContentHeader";
import BodyMiddle from "../../component/BodyMiddle/BodyMiddle";
import BookAds from "../../component/BookAds/BookAds";

function Admin() {
  const [selectedAction, setSelectedAction] = useState("discover");

  const handleActionSelect = (action) => {
    setSelectedAction(action);
  };
  return (
    <div className="admin-body">
      <div className="dashboard">
        <Sidebar onActionSelect={handleActionSelect} />
        <div className="dashboard--content">
          <ContentHeader />
          <div className="body">
            <BodyMiddle selectedAction={selectedAction} />
            <BookAds />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
