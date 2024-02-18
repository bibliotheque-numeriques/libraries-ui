import React, { useState, useEffect } from "react";
import "./AddBook.css";
import { Button } from "@mui/material";
import axios from "axios";

function AddBook() {
  const [formData, setFormData] = useState({
    title: "",
    page: "",
    langage: "",
    description: "",
    parution_date: "",
    link_image_book:
      "https://cdn.pixabay.com/photo/2023/12/14/05/04/ai-generated-8448187_1280.jpg",
    id_category: 3,
    id_author: 1,
  });
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/category`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/author`)
      .then((response) => {
        setAuthors(response.data);
      })
      .catch((error) => {
        console.error("Error fetching authors:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const parution_date = new Date(formData.parution_date);
    const formattedDate = parution_date.toISOString().split("T")[0];
    const formDataToSend = {
      ...formData,
      page: parseInt(formData.page),
      date: formattedDate,
      category: parseInt(formData.id_category),
      author: parseInt(formData.id_author),
    };

    try {
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/book`,
        formDataToSend
      );
      setFormData({
        title: "",
        page: "",
        langage: "",
        description: "",
        parution_date: "",
        link_image_book: "",
        id_category: "",
        id_author: "",
      });
    } catch (err) {
      console.error("Error adding book:", err);
    }
  };

  return (
    <div className="addBookContainer">
      <form className="addbookForm" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Book title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="number"
            name="page"
            id="page"
            placeholder="book number"
            value={formData.page}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="langage"
            id="langage"
            placeholder="book language"
            value={formData.langage}
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            name="description"
            id="description"
            placeholder="book description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="datetime-local"
            name="parution_date"
            id="parution_date"
            value={formData.parution_date}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="image"
            value={formData.link_image_book}
            onChange={handleChange}
          />
        </div>
        <div>
          <select
            name="category"
            id="Categorie"
            value={formData.id_category}
            onChange={handleChange}
          >
            <option value="">Category</option>
          </select>
        </div>
        <div>
          <select
            name="author"
            id="Author"
            value={formData.id_author}
            onChange={handleChange}
          >
            <option value="">Author</option>
            {Object.values(authors).map((author) => (
              <option
                key={author.id_author}
                value={author.id_author}
                className="options"
              >
                {author.name}
              </option>
            ))}
          </select>
        </div>
        <Button
          type="submit"
          variant="contained"
          sx={{
            marginTop: "2vh",
            position: "absolute",
            right: "8vw",
            bottom: 0,
          }}
        >
          Add Book
        </Button>
      </form>
    </div>
  );
}

export default AddBook;
