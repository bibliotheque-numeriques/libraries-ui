import React from "react";
import "./ListContent.css";
import List from "../List/List";
function ListContent() {
  return (
    <div className="Listcontent">
      <div className="list-head">
        <p>Title</p>
        <p>Page</p>
        <p>Langage</p>
        <p>Parution date</p>
      </div>
      <div className="all-list"></div>
    </div>
  );
}

export default ListContent;
