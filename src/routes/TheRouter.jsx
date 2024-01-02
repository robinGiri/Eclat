import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import TheNavbar from "../components/specificComponents/TheNavbar";
import TheHome from "../pages/TheHome";
import TheCustomize from "../pages/TheCustomize";
import TheMen from "../pages/TheMen";
import TheWomen from "../pages/TheWomen";
import TheKids from "../pages/TheKids";
import TheSale from "../pages/TheSale";
import TheCart from "../pages/TheCart";
import TheProductDetails from "../pages/TheProductDetails";
import TheLogin from "../pages/TheLogin";
import TheRegistration from "../pages/TheRegistration";
import TheCartPlaceOrder from "../components/checkout/TheCartPlaceOrder";

const routes = [
  { path: "/", element: <TheHome /> },
  { path: "/customize/:productID", element: <TheCustomize/> },
  { path: "/men", element: <TheMen /> },
  { path: "/women", element: <TheWomen /> },
  { path: "/kids", element: <TheKids /> },
  { path: "/sale", element: <TheSale /> },
  { path: "/cart", element: <TheCart /> },
  { path: "/product_details/:productId", element: <TheProductDetails /> },
  { path: "/login", element: <TheLogin /> },
  { path: "/registration", element: <TheRegistration /> },
  { path: "/cart/place-order", element: <TheCartPlaceOrder/> },
];

export default function TheRouter() {
  const location = useLocation();
  const isAdminPage =
    location.pathname.includes("/admin") ||
    location.pathname.includes("/admin-dashboard") ||
    location.pathname.includes("/admin-analytics") ||
    location.pathname.includes("/admin-products") ||
    location.pathname.includes("/admin-payment") ||
    location.pathname.includes("/admin-orders") ||
    location.pathname.includes("/admin-enquiry") ||
    location.pathname.includes("/admin-marketing") ||
    location.pathname.includes("/admin-setting") ||
    location.pathname.includes("/admin-user") ||
    location.pathname.includes("/admin-logout");

    return (
      <div className="flex flex-col">
        {!isAdminPage && (
          <div>
            <TheNavbar />
          </div>
        )}
        <div>
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </div>
      </div>
    );
  }
