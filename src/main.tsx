import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import MuiThemeProvider from "./ThemeProvider.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </StrictMode>
);
