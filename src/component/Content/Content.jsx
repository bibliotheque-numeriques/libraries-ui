import React from "react";
import ContentHeader from "../ContentHeader/ContentHeader";
import { Box } from "@mui/material";
import ContentBody from "../ContentBody/ContentBody";

function Content() {
  return (
    <Box
      sx={{
        maxHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <ContentHeader />
      <ContentBody />
    </Box>
  );
}

export default Content;
