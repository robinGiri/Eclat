import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import TheTopNavbarOne from "./TheTopNavbarOne";
import SearchComponent from "../sharedComponents/SearchComponent";
import { navbarList } from "../../data/TheNavbarConfig";

function TheSidebar() {
  const [activeTab, setActiveTab] = useState("");
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [isSmallScreen, setSmallScreen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleTabClick = (title) => {
    setActiveTab(title);
    const routes = {
      Profile: "/username",
      Home: "/",
      Customize: "/customize",
      Request: "/request-products",
      Men: "/men",
      Women: "/women",
      Kids: "/kids",
      Sale: "/sale",
    };
    if (routes[title]) {
      navigate(routes[title]);
      setBurgerMenuOpen(false); // Close burger menu after navigating
    }
  };

  const handleCartClick = () => {
    setActiveTab("Cart");
    navigate("/cart");
  };

  const handleBurgerMenuClick = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const handleKeyPress = (event, title) => {
    if (event.key === "Enter") {
      handleTabClick(title);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth <= 640);
    };

    handleResize(); // Set initial screen size

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className=" bg-white">
        <TheTopNavbarOne />
      </div>
      <div className="flex flex-col md:flex-row md:justify-center">
        {/* Burger Menu */}
        <div className={isSmallScreen ? "sm:hidden mx-5" : "hidden"} >
          <button
            className="text-black cursor-pointer focus:outline-none"
            onClick={handleBurgerMenuClick}
          >
            {/* Burger Icon */}
            {isBurgerMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Navbar */}
        <div
          className={`sticky top-0 z-999 flex drop-shadow-2xl ${
            (isSmallScreen && !isBurgerMenuOpen) ? "hidden" : "w-[50%] sm:w-[75%]"
          }`}
        >
          {/* Navbar items */}
          <div className="flex items-center justify-start sm:justify-center w-full">
            {navbarList.map((item) => (
              <div
                key={item.title}
                className={`flex text-black items-center cursor-pointer ${
                  activeTab === item.title
                    ? "font-bold text-sm sm:text-sm"
                    : "font-normal text-sm sm:text-sm"
                } p-4 hover:font-bold hover:text-sm w-full`}
                onClick={() => handleTabClick(item.title)}
                onKeyDown={(e) => handleKeyPress(e, item.title)}
                tabIndex={0}
              >
                {activeTab === item.title ? item.activeIcon : item.icon}
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Burger Menu Items */}
        <div
          className={`flex flex-col items-center justify-start sm:justify-center w-full ${isBurgerMenuOpen ? "w-full" : "hidden"}`}
        >
          {navbarList.map((item) => (
            <div
              key={item.title}
              className={`flex text-black items-center cursor-pointer ${
                activeTab === item.title
                  ? "font-bold text-sm sm:text-sm"
                  : "font-normal text-sm sm:text-sm"
              } p-4 hover:font-bold hover:text-sm w-full`}
              onClick={() => handleTabClick(item.title)}
              onKeyDown={(e) => handleKeyPress(e, item.title)}
              tabIndex={0}
            >
              {activeTab === item.title ? item.activeIcon : item.icon}
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        {/* Navbar icons and search */}
        <div className="flex justify-center w-[75%] items-center gap-6">
          {/* Search Bar */}
          <SearchComponent />

          {/* Cart Icon */}
          <div>
            <Link to="/cart" onClick={handleCartClick}>
              <FaShoppingCart className="text-neutral-800 text-lg cursor-pointer transition duration-100 hover:text-green-900" />
            </Link>
          </div>

          {/* Heart Icon */}
          <div>
            <FaHeart className="text-neutral-600 text-lg cursor-pointer transition duration-100 hover:text-red-500 hover:text-lg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TheSidebar;
