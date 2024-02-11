import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  Input,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import { Add } from "@mui/icons-material";
import axios from "axios";
function AddBook() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [bookData, setBookData] = useState({
    title: "",
    page: 0,
    langage: "",
    description: "",
    parution_date: "",
    id_category: "",
    id_author: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === "page" ? parseInt(value, 10) : value;
    setBookData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleAddBook = () => {
    axios
      .post("http://localhost:8080/book", bookData)
      .then((response) => {
        // Traiter la réponse
        console.log("Book added successfully");
      })
      .catch((error) => {
        // Gérer les erreurs
        console.error("Error adding book:", error);
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: "10vh",
        py: "1vh",
        px: "2vw",
      }}
    >
      <Typography sx={{ fontSize: "1.5rem", color: "#4481eb" }}>
        Book list
      </Typography>
      <Add
        onClick={handleOpen}
        sx={{
          bgcolor: "#4481eb",
          fontSize: "2rem",
          padding: "5px",
          borderRadius: "50%",
        }}
      />
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Add a new book</DialogTitle>
        <DialogContent
          sx={{
            width: "40vw",
            height: "50vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "3vh",
          }}
        >
          <FormControl
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Input
              variant="solid"
              placeholder="Book Title"
              onChange={handleChange}
            />
            <Input
              type="number"
              variant="solid"
              placeholder="Page"
              onChange={handleChange}
            />
            <Input
              variant="solid"
              placeholder="Language"
              onChange={handleChange}
            />
            <Input
              type="text"
              variant="solid"
              placeholder="description"
              onChange={handleChange}
            />
            <Input
              variant="solid"
              placeholder="parution date"
              onChange={handleChange}
            />
            <Input
              variant="solid"
              placeholder="id category"
              onChange={handleChange}
            />
            <Input
              variant="solid"
              placeholder="id author "
              onChange={handleChange}
            />
          </FormControl>
          <Button variant="contained" onClick={handleAddBook}>
            Add
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default AddBook;
