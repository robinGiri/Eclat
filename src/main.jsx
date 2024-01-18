import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TheRouter from "./routes/TheRouter";
import "./index.css";
import TheAdminRouter from "./admin/admin-routes/TheAdminRouter";
import { CartProvider } from "./custom-hooks/context/TheCartContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="*" element={<TheRouter />} />
        </Routes>
        <TheAdminRouter />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
