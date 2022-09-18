import React from "react";
import { Box } from "@mui/material";
import { Header, Footer, DisplayQuote } from "./components";

const App = () => {
  return (
    <Box>
      <Header />
      <DisplayQuote />
      <Footer />
    </Box>
  );
};

export default App;
