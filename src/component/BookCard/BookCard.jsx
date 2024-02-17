import { Box, Typography } from "@mui/material";
import React from "react";

function BookCard({ imgurl, collection, title, author }) {
  return (
    <Box
      sx={{
        width: "24%",
        height: "fit-content",
        padding: "7px",
        position: "relative",
        marginBlock: "2vh",
        boxShadow: "1px 1px 5px black",
      }}
    >
      <Box sx={{ width: "100%", height: "35vh" }}>
        <img
          src={imgurl}
          alt="Book cover image"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </Box>
      <Typography
        sx={{
          position: "absolute",
          top: "1vh",
          left: "1vw",
          fontSize: "0.7rem",
          fontWeight: "600",
          zIndex: "2",
        }}
      >
        {collection}
      </Typography>
      <Typography sx={{ marginTop: "1vh" }}>{title}</Typography>
      <Typography sx={{ opacity: "0.7", fontSize: "0.8rem" }}>
        {author}
      </Typography>
    </Box>
  );
}

export default BookCard;
