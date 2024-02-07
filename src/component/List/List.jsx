import React from "react";
import "./List.css";
function List({ title, page, author, category, Parution, langage }) {
  return (
    <div className="list-item">
      <p>{title}</p>
      <p>{page}</p>
      <p>{author}</p>
      <p>{category} </p>
      <p>{Parution}</p>
      <p>{langage} </p>
    </div>
  );
}

export default List;
