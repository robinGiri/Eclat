import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import TheRouter from "./routes/TheRouter";
import "./index.css";
import TheAdminRouter from "./admin/admin-routes/TheAdminRouter";
import { CartProvider } from "./custom-hooks/context/TheCartContext";

const AppRouter = () => {
  const location = useLocation();
  const isAdminRoute =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/admin-");
  return isAdminRoute ? <TheAdminRouter /> : <TheRouter />;
};

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="*" element={<AppRouter />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
