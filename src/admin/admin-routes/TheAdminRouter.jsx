import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useRef } from "react";
import TheDashboard from "../admin-pages/TheDashboard";
import TheAnalytics from "../admin-pages/TheAnalytics";
import TheAdminNavbar from "../admin-components/TheAdminNavbar";
import TheProducts from "../admin-pages/TheProducts";
import ThePayment from "../admin-pages/ThePayment";
import TheOrders from "../admin-pages/TheOrders";
import TheEnquiry from "../admin-pages/TheEnquiry";
import TheMarketing from "../admin-pages/TheMarketing";
import TheSetting from "../admin-pages/TheSetting";
import "./TheAdminRouter.css";
import TheTopAdminNav from "../admin-components/TheTopAdminNav";
import TheUser from "../admin-pages/TheUser";
import TheLogout from "../admin-pages/TheLogout";

const adminRoutes = [
  { path: "/admin-dashboard", element: <TheDashboard /> },
  { path: "/admin-analytics", element: <TheAnalytics /> },
  { path: "/admin-products", element: <TheProducts /> },
  { path: "/admin-payment", element: <ThePayment /> },
  { path: "/admin-orders", element: <TheOrders /> },
  { path: "/admin-enquiry", element: <TheEnquiry /> },
  { path: "/admin-marketing", element: <TheMarketing /> },
  { path: "/admin-setting", element: <TheSetting /> },
  { path: "/admin-user", element: <TheUser /> },
  { path: "/admin-logout", element: <TheLogout /> },
];

export default function TheAdminRouter() {
  const adminLocation = useLocation();
  const nodeRef = useRef(null);
  const isUserPage =
    location.pathname.includes("/customize") ||
    location.pathname.includes("/request-products") ||
    location.pathname.includes("/men") ||
    location.pathname.includes("/women") ||
    location.pathname.includes("/kids") ||
    location.pathname.includes("/sale") ||
    location.pathname.includes("/cart") ||
    location.pathname.includes("/product_details") ||
    location.pathname.includes("/order-detail");

  return (
    <div className="flex">
      {!isUserPage && (
        <div className=" w-[14rem] border-2 border-l-slate-500 fixed bg-white">
          <TheAdminNavbar />
        </div>
      )}

      <div className="ml-[14.7%]">
        {!isUserPage && (
          <div className="fixed w-[90%] bg-white border-b-2 h-[5rem] flex items-center">
            <TheTopAdminNav />
          </div>
        )}

        <TransitionGroup>
          <CSSTransition
            key={adminLocation.key}
            classNames="fade"
            timeout={300}
            nodeRef={nodeRef}
          >
            <Routes adminLocation={adminLocation}>
              {adminRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}
