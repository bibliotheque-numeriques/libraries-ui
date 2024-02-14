import { Box, Button, Typography } from "@mui/material";
import React from "react";

function BookAds() {
  return (
    <Box
      sx={{
        width: "25%",
        height: "96%",
        marginBlock: "2vh",
        marginInlineEnd: "1.5vw",
        backgroundColor: "#fff",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBlock: "4vh",
        gap: "1vh",
      }}
    >
      <Box sx={{ width: "15vw", height: "35vh" }}>
        <img src="" alt="book cover image" />
      </Box>
      <Typography sx={{ fontSize: "1.4rem", fontWeight: "700" }}>
        Book title
      </Typography>
      <Typography>Author</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1vw",
        }}
      >
        <Typography
          sx={{
            fontSize: "0.9rem",
            opacity: "0.5",
          }}
        >
          144 pages
        </Typography>
        <Typography
          sx={{
            fontSize: "0.9rem",
            opacity: "0.5",
          }}
        >
          10/05/2005
        </Typography>
      </Box>
      <Typography sx={{ padding: "1.3vw", textAlign: "justify" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vitae
        doloribus excepturi voluptate, dignissimos odio.excepturi voluptate,
        dignissimos odio.
      </Typography>
      <Button variant="contained" sx={{ width: "7vw" }}>
        Read
      </Button>
    </Box>
  );
}

export default BookAds;
