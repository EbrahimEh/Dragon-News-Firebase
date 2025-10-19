import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import router from "./routes/router.jsx";
import AuthProvidor from "./Providor/AuthProvidor.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvidor>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvidor>
  </StrictMode>
);
