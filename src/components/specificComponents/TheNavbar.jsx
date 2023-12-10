import React, { useState } from "react";
import { navbarList } from "../../data/TheNavbarConfig";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

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
    setActiveTab("Cart");  // Update activeTab when cart is clicked
    navigate('/cart');
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
      <div className="flex justify-between items-center p-8 bg-neutral-900 h-8 w-full">
        <div className="w-[7%]">
          {/* Add an onClick event for the logo */}
          <Link to="/" onClick={handleLogoClick}>
            <p className="items-center p-1 mx-1 my-5 flex text-white font-serif text-3xl">
              Eclat
            </p>
          </Link>
        </div>

        <div className="flex py-1 flex-row justify-normal w-[30%]">
          {navbarList.map((item) => (
            <div
              onClick={() => handleTabClick(item.title)}
              onKeyDown={(e) => handleKeyPress(e, item.title)}
              key={item.title}
              className="flex text-white items-center cursor-pointer focus:outline-none"
              tabIndex={0}
            >
              {/* navbar elements */}
              {activeTab === item.title ? item.activeIcon : item.icon}
              <p
                className={`duration-0 ease-linear ${activeTab === item.title
                    ? "font-bold text-xs "
                    : "font-normal text-xs"
                  } ml-2 p-1
              hover:duration-100 hover:font-bold hover:text-xs`}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center ml-8">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className={`${isSearchOpen ? "w-40" : "w-0"
                } my-0 px-4 py-1 rounded-full bg-neutral-200 focus:outline-none focus:bg-neutral-500 focus:text-white focus:text-normal text-sm transition-all duration-300`}
            />
            <button
              onClick={handleSearchToggle}
              className="absolute right-0 px-2 py-1.5 focus:outline-none focus:text-white"
            >
              <FaSearch className="text-neutral-600" />
            </button>
          </div>

          <div className="ml-7">
            <Link to="/cart" onClick={handleCartClick}>
              <FaShoppingCart className="text-slate-50 text-xs cursor-pointer transition duration-300 hover:text-green-500" />
            </Link>
          </div>

          {/* Heart Icon */}
          <div className="ml-7">
            <FaHeart className="text-slate-50 text-xs cursor-pointer transition duration-300 hover:text-red-500" />
          </div>

          {/* not logged in == red icon, logged in == green icon */}
          <FaUser className="ml-8 text-red-300 text-xs cursor-pointer transition duration-300 hover:text-white" />
        </div>
      </div>
    </>
  );
}
