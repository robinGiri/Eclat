import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TheRouter from "./routes/TheRouter";
import "./index.css";
import TheAdminRouter from "./admin/admin-routes/TheAdminRouter";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<TheRouter />} />
      </Routes>
      <TheAdminRouter />
    </BrowserRouter>
  </React.StrictMode>
);
