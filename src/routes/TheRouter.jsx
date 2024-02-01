import React from "react";
import { Route, Routes } from "react-router-dom";
import TheNavbar from "../components/specificComponents/TheNavbar";
import TheHome from "../pages/TheHome";
import TheCustomize from "../pages/TheCustomize"
import TheMen from "../pages/TheMen";
import TheWomen from "../pages/TheWomen";
import TheKids from "../pages/TheKids";
import TheSale from "../pages/TheSale";
import TheCart from "../pages/TheCart";
import TheProfile from "../pages/TheProfile";
import TheProductDetails from "../pages/TheProductDetails";
import TheLogin from "../pages/TheLogin";
import TheRegistration from "../pages/TheRegistration";
import TheCartPlaceOrder from "../components/checkout/TheCartPlaceOrder";
import TheOrderDetail from "../pages/TheOrderDetail";
import "../admin/admin-pages/product-components/TheRecentInvoice.css";
import TheError from "../pages/TheError";

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
  { path: "/cart/place-order", element: <TheCartPlaceOrder /> },
  { path: "/userprofile", element: <TheProfile /> },
  { path: "/cart/place-order", element: <TheCartPlaceOrder /> },
  { path: "/order-detail", element: <TheOrderDetail /> },
];

export default function TheRouter() {

  return (
    <div className="flex flex-col">
        <div className="sticky top-0 bg-white z-[99999999]">
          <TheNavbar />
        </div>
      <div>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
         <Route path="*" element={<TheError />} />
        </Routes>
      </div>
    </div>
  );
}
