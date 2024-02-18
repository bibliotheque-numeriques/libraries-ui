import React, { useState, useEffect } from "react";
import "./AddBook.css";
import { Button } from "@mui/material";
import axios from "axios";
function AddBook() {
  const [formData, setFormData] = useState({
    title: "",
    page: "",
    language: "",
    description: "",
    date: "",
    file: "",
    category: "",
    author: "",
  });
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    // Récupérer les catégories depuis la base de données
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/category`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });

    // Récupérer les auteurs depuis la base de données
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date(formData.date);
    const formattedDate = date.toISOString().split("T")[0];
    const formDataToSend = {
      ...formData,
      page: parseInt(formData.page),
      date: formattedDate,
      category: parseInt(formData.category), // Convertir en entier
      author: parseInt(formData.author), // Convertir en entier
    };

    try {
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/book`,
        formDataToSend
      );
      // Réinitialisez le formulaire après l'envoi réussi
      setFormData({
        title: "",
        page: "",
        language: "",
        description: "",
        date: "",
        file: "",
        category: "",
        author: "",
      });
    } catch (err) {
      console.error("Error adding book:", err);
    }
  };
  return (
    <div className="addBookContainer">
      <form className="addbookForm">
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
            name="language"
            id="language"
            placeholder="book language"
            value={formData.language}
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            name="description"
            id="description"
            placeholder="book description"
          />
        </div>
        <div>
          <input
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div>
          {/* <label for="file">Choose a files</label> */}
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div>
          <select
            name="category"
            id="Categorie"
            value={3}
            onChange={handleChange}
          >
            <option value="">Category</option>
            {Object.values(categories).map((category) => (
              <option key={category.id_category} value={3}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            name="author"
            id="Author"
            value={formData.author}
            onChange={handleChange}
          >
            <option value="">Author</option>
            {Object.values(authors).map((author) => (
              <option
                key={author.id_author}
                value={author.id_author}
                className="options"
              >
                {author.name + " " + author.first_name}
              </option>
            ))}
          </select>
        </div>
      </form>
      <Button
        variant="contained"
        sx={{
          marginTop: "2vh",
          position: "absolute",
          right: "8vw",
          bottom: 0,
        }}
        onClick={handleSubmit}
      >
        Add Book
      </Button>
    </div>
  );
}

export default AddBook;
