import React from "react";
import ContentHeader from "../ContentHeader/ContentHeader";
import ListContent from "../ListContent/ListContent";
import AddBook from "../AddBook/AddBook";
import Filter from "../Filterbar/Filter";

function Content() {
  return (
    <div className="content">
      <ContentHeader />
      <AddBook />
      <Filter />
      <ListContent />
    </div>
  );
}

export default Content;
