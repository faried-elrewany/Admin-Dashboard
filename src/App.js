import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Theme";
import Topbar from "./Views/Global/Topbar";
import Layout from "./Views/Global/Layout";
import { ProSidebarProvider } from "react-pro-sidebar";

export default function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main>
            {/* <Topbar /> */}
            <ProSidebarProvider>
              <Layout />
            </ProSidebarProvider>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
