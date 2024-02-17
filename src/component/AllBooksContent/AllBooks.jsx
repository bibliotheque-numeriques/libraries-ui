import axios from "axios";
import BookCard from "../BookCard/BookCard";
import React, { useEffect, useState } from "react";

function AllBooks() {
  const [bookList, SetBooklist] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/book`)
      .then((response) =>
        SetBooklist(response.data.booksWithAuthorsAndCategories),
      )
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      {bookList.map((book) => {
        return (
          <BookCard
            key={book.id_book}
            imgurl={book.link_image_book}
            collection={book.category.type}
            title={book.title}
            author={book.author.name + " " + book.author.first_name}
          />
        );
      })}
    </>
  );
}

export default AllBooks;
