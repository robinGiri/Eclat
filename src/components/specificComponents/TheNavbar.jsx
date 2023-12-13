import React, { useState } from "react";
import { navbarList } from "../../data/TheNavbarConfig";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import getSearchData from "../../services/search_api";
import SearchComponent from "../sharedComponents/SearchComponent";

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

  // const searchHandler = () =>{
  //   const data = getSearchData(search);
  //   console.log(data);
  // }

  return (
    <>
      <div>
        <p className="mt-2 mx-10 py-2 text-neutral-600 text-sm hover:font-semibold">help</p>
      </div>

      <div className="mt-3 flex flex-row justify-center w-full h-[10vh] bg-[#fafafa]">
        <Link to="/" onClick={handleLogoClick} className="relative">
          <p className="drop-shadow items-center p-1 flex text-neutral-800 font-peignot text-5xl relative z-10">
            Eclat
          </p>
          <div className="absolute inset-0">
            {/* Faded yellow layer */}
            <span className="absolute -translate-x-21 -translate-y-5 rounded-full inset-1 bg-gradient-to-bl from-yellow-100 h-20 to-transparent opacity-40"></span>
            <span className="absolute rounded-full inset-1 bg-gradient-to-b from-yellow-100 h-20 to-transparent opacity-40"></span>
            <span className="absolute translate-x-24 translate-y-5 rounded-full inset-1 bg-gradient-to-tr from-neutral-50 h-20 to-transparent opacity-40"></span>
            <span className="absolute translate-x-20 -translate-y-10 rounded-full inset-1 bg-gradient-to-tr from-yellow-100 h-20 to-transparent opacity-40"></span>
          </div>
        </Link>

        {/* User Icon */}
        <FaUser className="text-red-500  text-md cursor-pointer transition duration-300 hover:text-black translate-x-[70vh] translate-y-5" />
      </div>

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
