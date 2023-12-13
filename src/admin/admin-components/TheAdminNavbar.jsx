import { useState, useEffect } from "react";
import { AdminSidebarList, AdminSidebarListSecond } from "./TheAdminNavConfig";
import { useNavigate, useLocation } from "react-router-dom";

export default function TheAdminNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const adminRoutes = {
    Home: "/admin",
    Dashboard: "/admin-dashboard",
    Analytics: "/analytics",
    Products: "/products",
    Payment: "/payment",
    Orders: "/orders",
    Enquiry: "/enquiry",
    Marketing: "/marketing",
    Setting: "/setting",
    User: "/user",
    Logout: "/logout",
  };

  const initialActiveTab = localStorage.getItem("activeTab") || "Home";
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

  const handleEclatClick = () => {
    navigate(adminRoutes.Dashboard);
    setActiveTab("Dashboard");
    localStorage.setItem("activeTab", "Dashboard");
  };
  const renderSidebarItem = (item) => {
    return (
      <div
        onClick={() => handleTabClick(item.title)}
        onKeyDown={(e) => handleKeyPress(e, item.title)}
        key={item.title}
        className={`mt-5 cursor-pointer p-1 rounded-md flex justify-start items-center ${
          activeTab === item.title ? "bg-admin-blue text-white" : ""
        }`}
        tabIndex={0}
      >
        {item.icon}
        <p
          className={`${
            activeTab === item.title ? "font-bold" : "font-semibold"
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
        <h1 className="font-extrabold text-3xl cursor-pointer" onClick={handleEclatClick}>Eclat</h1>
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
