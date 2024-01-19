import React, { useState, useEffect } from "react";
import { AdminSidebarList, AdminSidebarListSecond } from "./TheAdminNavConfig";
import { useNavigate, useLocation, Link } from "react-router-dom";

export default function TheAdminNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const adminRoutes = {
    Admin: "/admin",
    Dashboard: "/admin-dashboard",
    Analytics: "/admin-analytics",
    Products: "/admin-products",
    Payment: "/admin-payment",
    Orders: "/admin-orders",
    Enquiry: "/admin-enquiry",
    Marketing: "/admin-marketing",
    Setting: "/admin-setting",
    User: "/admin-user",
    Logout: "/admin-logout",
  };
  if (
    location.pathname === "/"
  ) {
    return;
  }

  const initialActiveTab = localStorage.getItem("activeTab") || "Admin";
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  const handleTabClick = (title) => {
    setActiveTab(title);
    localStorage.setItem("activeTab", title);

    if (adminRoutes[title]) {
      navigate(adminRoutes[title]);
    }
  };

  useEffect(() => {
    const { pathname } = location;
    const tabFromURL = Object.keys(adminRoutes).find(
      (key) => adminRoutes[key] === pathname
    );

    if (pathname === adminRoutes.Home) {
      navigate(adminRoutes.Dashboard);
      setActiveTab("Dashboard");
      localStorage.setItem("activeTab", "Dashboard");
    } else if (tabFromURL) {
      setActiveTab(tabFromURL);
      localStorage.setItem("activeTab", tabFromURL);
    }
  }, [location]);

  const handleKeyPress = (event, title) => {
    if (event.key === "Enter") {
      handleTabClick(title);
    }
  };

  const handleHomePageClick = () => {
    navigate("/home");
  };

  const renderSidebarItem = (item) => {
    return (
      <div
        onClick={() => handleTabClick(item.title)}
        onKeyDown={(e) => handleKeyPress(e, item.title)}
        key={item.title}
        className={`mt-2 cursor-pointer p-2 pl-4 rounded-md flex justify-start items-center hover:bg-blue-400 hover:text-white hover:opacity-50 ${
          activeTab === item.title ? "bg-admin-blue text-white" : ""
        }`}
        tabIndex={0}
      >
        {item.icon}
        <p
          className={`${
            activeTab === item.title ? "font-semibold text-sm" : "text-sm"
          } ml-2`}
        >
          {item.title}
        </p>
      </div>
    );
  };

  return (
    <div className="h-[100vh]">
      <div className=" flex flex-col justify-center items-center h-[100px]">
        <Link to="/home" onClick={handleHomePageClick}>
          <h1 className="font-bold text-3xl cursor-pointer">Eclat</h1>
        </Link>
      </div>
      <div className="flex flex-col mt-[5px] m-[10%]">
        {AdminSidebarList.map((item) => renderSidebarItem(item))}
      </div>
      <div className="border-t-2 mt-[40px]">
        <div className="flex flex-col m-[10%] -mt-0">
          {AdminSidebarListSecond.map((item) => renderSidebarItem(item))}
        </div>
      </div>
    </div>
  );
}
