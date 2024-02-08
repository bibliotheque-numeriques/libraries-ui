import React, { useEffect, useState } from "react";
import "./ListContent.css";
import List from "../List/List";
import axios from "axios";
import { Add } from "@mui/icons-material";
function ListContent() {
  const [list, setlists] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/book")
      .then((response) => setlists(response.data.booksWithAuthorsAndCategories))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="Listcontent">
      <div className="head">
        <h3>Book List </h3>
        <Add
          sx={{
            bgcolor: "#4481eb",
            fontSize: "2rem",
            padding: "5px",
            borderRadius: "50%",
          }}
        />
      </div>
      <div className="list-head">
        <p>Title</p>
        <p>Page</p>
        <p>Author</p>
        <p>Category</p>
        <p>Parution date</p>
        <p>Language</p>
      </div>
      <div className="all-list">
        {list.map((book) => {
          return (
            <List
              key={book.id_book}
              title={book.title}
              page={book.page}
              author={book.author.name + " " + book.author.first_name}
              category={book.category.type}
              Parution={new Date(book.parution_date).toLocaleDateString()}
              langage={book.langage}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ListContent;
