import React from "react";
import ContentHeader from "../ContentHeader/ContentHeader";
import ListContent from "../ListContent/ListContent";
import AddBook from "../AddBook/AddBook";
import Filter from "../Filterbar/Filter";
import { Box } from "@mui/material";

function Content() {
  return (
    <Box
      sx={{
        maxHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <ContentHeader />
      <AddBook />
      <Filter />
      <ListContent />
    </Box>
  );
}

export default Content;
