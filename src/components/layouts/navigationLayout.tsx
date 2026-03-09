import { useState } from "react";
import Home from "../Pages/Home";
import { Header } from "./Header";
import Pages from "../Pages/Pages";
import { Sidebar } from "./Sidebar";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";

const NavigationLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <Sidebar isOpen={sidebarOpen} />

      <Header toggleSidebar={() => setSidebarOpen((prev) => !prev)} />

      <Box
        sx={{
          ml: sidebarOpen ? "250px" : 0,
          transition: "all 0.2s ease",
          p: "2rem",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<Pages />} />
          <Route path="/savings" element={<Pages />} />
          <Route path="/money-rules" element={<Pages />} />
        </Routes>
      </Box>
    </>
  );
}

export default NavigationLayout
