import React, { useState } from "react";
import { navbarList } from "../../data/TheNavbarConfig";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";

// dynamically apply classes based on conditions, such as whether a tab is active or not.
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// routes____________________________________________________________________________________
export default function TheSidebar() {
  const [activeTab, setActiveTab] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
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
    }
  };

  const handleCartClick = () => {
    setActiveTab("Cart"); // Update activeTab when cart is clicked
    navigate("/cart");
  };

  const handleLogoClick = () => {
    // Reset activeTab to empty string when the logo is clicked
    setActiveTab("");
    navigate("/");
  };

  const handleKeyPress = (event, title) => {
    if (event.key === "Enter") {
      handleTabClick(title);
    }
  };

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      {/* navbar */}
      <div className="flex justify-between items-center p-10 mt-2 bg-neutral-50 max-h-12 w-full">
        <div className="w-[20%]">
          {/* Add an onClick event for the logo */}
          <Link to="/" onClick={handleLogoClick}>
            <p className="items-center p-1 flex text-black font-serif text-5xl">
              Eclat
            </p>
          </Link>
        </div>

        <div className="flex flex-row py-4 justify-center w-[30%]">
          {navbarList.map((item) => (
            <div
              onClick={() => handleTabClick(item.title)}
              onKeyDown={(e) => handleKeyPress(e, item.title)}
              key={item.title}
              className="flex text-black items-center cursor-pointer "
              tabIndex={0}
            >
              {/* navbar elements */}
              {activeTab === item.title ? item.activeIcon : item.icon}
              <p
                className={`duration-0 ease-linear ${
                  activeTab === item.title
                    ? "font-bold text-sm "
                    : "font-normal text-sm"
                } p-4
              hover:duration-100 hover:font-bold hover:text-sm`}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>


        {/* navbar icons and search */}

        <div className="flex flex-row items-center justify-evenly">
          {/* Search Bar */}
          <div className="flex felx-row items-center mr-2">
          <FaSearch className="absolute text-neutral-600 justify-center text-lg items-end mx-[25vh]" />
            <input
              type="text"
              placeholder="Search..."
              className={`p-2 rounded-md bg-neutral-200 focus:outline-none focus:bg-neutral-100 focus:text-neutral-600 focus:text-normal text-sm transition-all duration-300`}
            />
            <button
              onClick={handleSearchToggle}
              className=" px-2 py-1.5 focus:outline-none focus:text-black"
            ></button>
          </div>

          <div className="ml-7">
            <Link to="/cart" onClick={handleCartClick}>
              <FaShoppingCart className=" text-neutral-800 text-md cursor-pointer transition duration-300 hover:text-green-500" />
            </Link>
          </div>

          {/* Heart Icon */}
          <div className="ml-7">
            <FaHeart className="text-neutral-600 text-md cursor-pointer transition duration-300 hover:text-red-500 hover:text-lg" />
          </div>

          {/* not logged in == red icon, logged in == green icon */}
          <FaUser className="ml-8 text-red-300 text-md cursor-pointer transition duration-300 hover:text-black" />
        </div>
      </div>
    </>
  );
}
