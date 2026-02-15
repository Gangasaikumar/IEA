import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./routes/router.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { LanguageProvider } from "./context/LanguageContext.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
);
