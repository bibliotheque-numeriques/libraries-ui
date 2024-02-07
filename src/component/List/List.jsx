import React from "react";
import "./List.css";
function List(title, page, Langage, Parution) {
  return (
    <div className="list-item">
      <p>{title}</p>
      <p>{page}</p>
      <p>{Langage}</p>
      <p>{Parution}</p>
    </div>
  );
}

export default List;
