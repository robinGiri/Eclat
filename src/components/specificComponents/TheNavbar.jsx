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

  if (
    location.pathname === "/login" ||
    location.pathname === "/registration" ||
    location.pathname === "/cart" ||
    location.pathname === "/cart/place-order" ||
    location.pathname === "/order-detail"
  ) {
    return;
  }

  const handleBurgerMenuClick = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <>
      <div>
        <TheTopNavbarOne />
      </div>
      {/* Navbar */}
      <div className="mt-5 h-[12vh]">
        <div className="flex mx-[7%] p-1  justify-between">
          {/* Navbar items */}
          <div className="flex items-center">
            {navbarList.map((item) => (
              <div
                key={item.title}
                className={`flex text-black items-center w-full cursor-pointer ${
                  activeTab === item.title
                    ? "font-bold text-sm"
                    : "font-normal text-sm"
                } p-4 hover:font-bold hover:text-sm`}
                onClick={() => handleTabClick(item.title)}
              >
                {/* Navbar elements */}
                {activeTab === item.title ? item.activeIcon : item.icon}
                <p className="p-1">{item.title}</p>
              </div>
            ))}
          </div>

          {/* Navbar icons and search */}

          <div className="flex mx-[12%]">
            {/* Search Bar */}
            <div className="flex items-center mx-[5%]">
              <SearchComponent />
            </div>

            <div className="flex items-center gap-4 mx-[10%]">
              {/* Cart Icon */}
              <div className="">
                <Link to="/cart" onClick={handleCartClick}>
                  <FaShoppingCart className="text-neutral-800 text-lg cursor-pointer transition duration-300 hover:text-green-900" />
                </Link>
              </div>

              {/* Heart Icon */}
              <div>
                <FaHeart className="text-neutral-600 text-lg cursor-pointer transition duration-300 hover:text-red-500 hover:text-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TheSidebar;
