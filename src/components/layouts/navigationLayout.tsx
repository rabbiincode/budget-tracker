import { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Box } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

export default function NavigationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <BrowserRouter>
      <Sidebar isOpen={sidebarOpen} />

      <Header toggleSidebar={() => setSidebarOpen((prev) => !prev)} />

      <Box
        sx={{
          ml: sidebarOpen ? "250px" : 0,
          transition: "all 0.2s ease",
          p: '2rem',
        }}
      >
        {children}
      </Box>
    </BrowserRouter>
  );
}