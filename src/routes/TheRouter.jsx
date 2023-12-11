import { Route, Routes, useLocation } from "react-router-dom";
import TheNavbar from "../components/specificComponents/TheNavbar";
import TheHome from "../pages/TheHome";
import TheCustomize from "../pages/TheCustomize";
import TheRequestProduct from "../pages/TheRequestProduct";
import TheMen from "../pages/TheMen";
import TheWomen from "../pages/TheWomen";
import TheKids from "../pages/TheKids";
import TheSale from "../pages/TheSale";
import TheCart from "../pages/TheCart";
import TheProductDetails from "../pages/TheProductDetails";

const routes = [
  { path: "/", element: <TheHome /> },
  { path: "/customize", element: <TheCustomize /> },
  { path: "/request-products", element: <TheRequestProduct /> },
  { path: "/men", element: <TheMen /> },
  { path: "/women", element: <TheWomen /> },
  { path: "/kids", element: <TheKids /> },
  { path: "/sale", element: <TheSale /> },
  { path: "/cart", element: <TheCart /> },
  { path: "/product_details", element: <TheProductDetails /> },
];

export default function TheRouter() {
  const location = useLocation();
  const isAdminPage =
    location.pathname.includes("/admin") ||
    location.pathname.includes("/admin-dashboard") ||
    location.pathname.includes("/analytics") ||
    location.pathname.includes("/products") ||
    location.pathname.includes("/payment") ||
    location.pathname.includes("/orders") ||
    location.pathname.includes("/enquiry") ||
    location.pathname.includes("/marketing") ||
    location.pathname.includes("/setting") ||
    location.pathname.includes("/user") ||
    location.pathname.includes("/logout");

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
