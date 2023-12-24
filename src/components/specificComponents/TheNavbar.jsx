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

  if (location.pathname === "/login" || location.pathname === "/registration" || location.pathname === "/cart" || location.pathname === "/cart/place-order") {
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
        <p className="px-3 py-1 bg-gradient-to-b cursor-pointer from-white to-neutral-100 text-neutral-600 text-sm hover:font-semibold">
          help
        </p>
      </div>
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
