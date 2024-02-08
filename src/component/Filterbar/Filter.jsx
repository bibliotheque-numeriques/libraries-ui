import { Box, Button, Input } from "@mui/material";
import React from "react";
import "./Filter.css";
function Filter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        my: "2vh",
        py: "2vh",
        px: "1vw",
        bgcolor: "#",
      }}
    >
      <Input placeholder="Author name" className="inputFiltre" />
      <Input placeholder="Book Category" className="inputFiltre" />
      <Input placeholder="Book langage" className="inputFiltre" />
      <Button variant="contained" sx={{ bgcolor: "#4481eb" }}>
        Search
      </Button>
    </Box>
  );
}

export default Filter;
