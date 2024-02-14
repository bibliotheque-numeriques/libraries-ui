import { Box } from "@mui/material";
import React from "react";

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
      <Box
        sx={{
          width: "25%",
          height: "96%",
          marginBlock: "2vh",
          marginInlineEnd: "1.5vw",
          border: "1px solid red",
          backgroundColor: "#fff",
          borderRadius: "10px",
        }}
      ></Box>
    </Box>
  );
}

export default ContentBody;
