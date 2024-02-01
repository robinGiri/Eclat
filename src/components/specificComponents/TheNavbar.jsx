import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import SearchComponent from "../sharedComponents/SearchComponent";
import { navbarList } from "../../data/TheNavbarConfig";
import { PiUserCircleLight, PiUserCirclePlusLight } from "react-icons/pi";
import "../../admin/admin-pages/product-components/TheRecentInvoice.css";
import logo from "../../assets/logo.png";

function TheSidebar() {
  const initialActiveTab = localStorage.getItem("activeTab") || "Home";
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const [focusedIndex, setFocusedIndex] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const routes = {
    Profile: "/username",
    Home: "/",
    Men: "/men",
    Women: "/women",
    Kids: "/kids",
    Sale: "/sale",
  };

  const handleTabClick = (title, index) => {
    setActiveTab(title);
    localStorage.setItem("activeTab", title);
    setFocusedIndex(index);

    if (routes[title]) {
      navigate(routes[title]);
    } else if (title === "Logo") {
      navigate(routes["Home"]);
      setActiveTab("Home");
    }
  };

  const handleKeyDown = (event, index) => {
    let newIndex;
    switch (event.key) {
      case "ArrowLeft":
        newIndex = (index - 1 + navbarList.length) % navbarList.length;
        break;
      case "ArrowRight":
        newIndex = (index + 1) % navbarList.length;
        break;
      default:
        return;
    }

    handleTabClick(navbarList[newIndex].title, newIndex);
  };

  useEffect(() => {
    const pathname = location.pathname;
    const tabFromURL = Object.keys(routes).find(
      (key) => routes[key] === pathname
    );
    if (tabFromURL) {
      setActiveTab(tabFromURL);
      localStorage.setItem("activeTab", tabFromURL);
    }
  }, [location.pathname]);

  if (
    location.pathname === "/order-detail"
  ) {
    return null;
  }

  const handleLogoClick = () => {
    navigate("/");
  };
  const handleLoginPage = () => {
    navigate("/login");
  };

  const handleRegistrationPage = () => {
    navigate("/registration");
  };

  return (
    <div>
      <div className="hidden lg:block md:block">
        <div
          className="flex"
          onKeyDown={(e) => handleKeyDown(e, focusedIndex)}
          tabIndex={0}
        >
          <div className="flex h-[6vh] lg:h-[12vh] lg:justify-evenly items-center w-full lg:gap-4 shadow-custom-nav-shadow">
            <div className="w-full flex lg:justify-end">
              <div className="flex items-center w-[70%]">
                {navbarList.map((item, index) => (
                  <div
                    key={item.title}
                    className={`flex text-sm w-full items-center ${
                      activeTab === item.title ? "text-[#B88E72]" : ""
                    }`}
                    onClick={() => handleTabClick(item.title, index)}
                    tabIndex={index}
                    onFocus={() => setFocusedIndex(index)}
                  >
                    {activeTab === item.title ? item.activeIcon : item.icon}
                    <p
                      className={`stylish-border cursor-pointer transition-all duration-100 ease-in hover:text-[#B88E72] ${
                        activeTab === item.title
                          ? "border-b border-[#B88E72] hover:border-none"
                          : ""
                      }`}
                    >
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src={logo}
                alt="Logo"
                onClick={handleLogoClick}
                className="cursor-pointer"
              />
            </div>
            <div className=" w-full">
              <div className="flex w-[70%] ml-[2rem]">
                <div className="w-[95%] flex justify-between items-center">
                  <div className="flex">
                    <div className="hidden md:block lg:block ml-[15%]">
                      <SearchComponent />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 ml-[8%]">
                    <div>
                      <Link to="/cart">
                        <CiShoppingCart className="text-[#B88E72] text-2xl" />
                      </Link>
                    </div>

                    <div>
                      <CiHeart className="text-[#B88E72] text-2xl" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center">
                      <div className="flex justify-between items-center w-[115px] ml-[9%]">
                        <button
                          className="text-xs stylish-border cursor-pointer transition-all duration-100 ease-in hover:text-[#B88E72]"
                          onClick={handleLoginPage}
                        >
                          Login
                        </button>
                        <p className="mx-1">|</p>
                        <button
                          className="text-xs stylish-border cursor-pointer transition-all duration-100 ease-in hover:text-[#B88E72]"
                          onClick={handleRegistrationPage}
                        >
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden md:hidden">
        <div className="flex items-center py-2 shadow-custom-nav-shadow">
          <div>
            <img
              src={logo}
              alt="Logo"
              className="w-[110px]"
              onClick={handleLogoClick}
            />
          </div>
          <div className="flex w-full  items-center gap-2 pr-2">
            {navbarList.map((item, index) => (
              <div
                key={item.title}
                className={`flex justify-around text-xs w-full items-center ${
                  activeTab === item.title ? "text-[#B88E72]" : ""
                }`}
                onClick={() => handleTabClick(item.title, index)}
                tabIndex={index}
                onFocus={() => setFocusedIndex(index)}
              >
                {activeTab === item.title ? item.activeIcon : item.icon}
                <p
                  className={`stylish-border cursor-pointer transition-all duration-100 ease-in hover:text-[#B88E72] ${
                    activeTab === item.title
                      ? "border-b border-[#B88E72] hover:border-none"
                      : ""
                  }`}
                >
                  {item.title}
                </p>
              </div>
            ))}
            <div>
              <div className="flex items-center">
                <div className="flex justify-evenly items-center w-[70px]">
                  <div className="flex">
                    <button onClick={handleLoginPage}>
                      <PiUserCircleLight className="text-xl text-[#B88E72]" />
                    </button>
                    <p className="mx-2 text-gray-300 rounded-full">|</p>
                    <button onClick={handleRegistrationPage}>
                      <PiUserCirclePlusLight className="text-xl text-[#B88E72]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheSidebar;
