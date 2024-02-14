import { Box } from "@mui/material";
import React from "react";
import BookAds from "../BookAds/BookAds";

function ContentBody() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "88vh",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          width: "70%",
          height: "96%",
          border: "1px solid red",
          marginBlock: "2vh",
          marginInline: "1.5vw",
          backgroundColor: "#fff",
          borderRadius: "10px",
        }}
      ></Box>
      <BookAds />
    </Box>
  );
}

export default ContentBody;
