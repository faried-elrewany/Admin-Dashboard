import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Theme";
import Topbar from "./Views/Global/Topbar";
export default function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main>
            <Topbar />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
