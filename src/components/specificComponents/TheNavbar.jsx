import React, { useState } from "react";
import { navbarList } from "../../data/TheNavbarConfig";
import { useNavigate, Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import getSearchData from "../../services/search_api";
import SearchComponent from "../sharedComponents/SearchComponent";
import TheTopNavbarOne from "./TheTopNavbarOne";

// dynamically apply classes based on conditions, such as whether a tab is active or not.
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// routes____________________________________________________________________________________
export default function TheSidebar() {
  const [activeTab, setActiveTab] = useState("");

  // search mechanism
  const [search, setSearch] = useState("");
  const [products, setProduct] = useState("");

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

  if (location.pathname === "/login" || location.pathname === "/registration") {
    return;
  }

  const handleKeyPress = (event, title) => {
    if (event.key === "Enter") {
      handleTabClick(title);
    }
  };

  // const searchHandler = () =>{
  //   const data = getSearchData(search);
  //   console.log(data);
  // }

  return (
    <>
      <div>
        <p className="mt-2 mx-10 py-2 text-neutral-600 text-sm hover:font-semibold">
          help
        </p>
      </div>

      <TheTopNavbarOne />

      {/* Navbar */}
      <div className="flex flex-row p-0 mt-1 max-h-18 w-full bg-gradient-to-b from-neutral-100 h-20 to-transparent opacity-80">
        {/* Navbar items */}
        <div className="flex flex-row py-4 justify-center ml-[12%] ">
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
              <p className="m-1">{item.title}</p>
            </div>
          ))}
        </div>

        {/* Navbar icons and search */}

        {/* Search Bar */}
        <div className="m-1 translate-x-[70%] p-3">
          <SearchComponent />
        </div>

        <div className="flex flex-row items-center translate-x-[15rem] gap-6">
          {/* Cart Icon */}
          <div className="ml-5">
            <Link to="/cart" onClick={handleCartClick}>
              <FaShoppingCart className="text-neutral-800 text-md cursor-pointer transition duration-300 hover:text-green-900" />
            </Link>
          </div>

          {/* Heart Icon */}
          <div className="ml-4">
            <FaHeart className="text-neutral-600 text-md cursor-pointer transition duration-300 hover:text-red-500 hover:text-lg" />
          </div>
        </div>
      </div>
    </>
  );
}
