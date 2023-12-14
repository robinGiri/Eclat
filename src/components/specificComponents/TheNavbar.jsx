import React, { useState } from "react";
import { navbarList } from "../../data/TheNavbarConfig";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
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
      <div className=" bg-gradient-to-t from-white to-neutral-100 opacity-100">
        <p className="w-full py-2 px-5 text-neutral-600 text-sm hover:font-semibold">help</p>
      </div>

      <div className="flex justify-center w-full h-[12vh]  bg-gradient-to-t from-neutral-100 to-white opacity-100">
        <Link to="/" onClick={handleLogoClick} className="relative">
          <p className="items-center p-2 text-black font-peignot text-5xl relative z-10">
            Eclat
          </p>
          <div className="absolute inset-0">
            {/* Faded yellow layer */}
            <span className="absolute -translate-x-10 -translate-y-5 rounded-full inset-0 bg-gradient-to-bl from-yellow-100 h-20 to-transparent opacity-30"></span>
            <span className="absolute -translate-x-14 -translate-y-1 rounded-full inset-0 bg-gradient-to-bl from-yellow-200 h-20 to-transparent opacity-20"></span>
            <span className="absolute rounded-full translate-x-0 -translate-y-10 inset-1 bg-gradient-to-tr from-yellow-200 h-20 to-transparent opacity-20"></span>
            <span className="absolute rounded-full translate-x-0 translate-y-0 inset-1 bg-gradient-to-br from-yellow-50 h-20 to-transparent opacity-30"></span>
            <span className="absolute translate-x-0 translate-y-0 rounded-full inset-1 bg-gradient-to-bl from-yellow-200 h-20 to-transparent opacity-30"></span>
            <span className="absolute translate-x-10 -translate-y-1 rounded-full inset-1 bg-gradient-to-bl from-yellow-200 h-20 to-transparent opacity-30"></span>
            <span className="absolute translate-x-10 translate-y-5 rounded-full inset-1 bg-gradient-to-bl from-yellow-200 h-20 to-transparent opacity-20"></span>

          </div>
        </Link>

        {/* User Icon */}
        <FaUser className="text-red-500  text-md cursor-pointer transition duration-300 hover:text-black translate-x-[70vh] translate-y-5" />
      </div>

      {/* Navbar */}
      <div className="flex p-0 drop-shadow-sm max-h-18 w-full bg-neutral-100">
        {/* Navbar items */}
        <div className="flex flex-row py-4 justify-center ml-[12%] ">
          {navbarList.map((item) => (
            <div
              key={item.title}
              className={`flex text-black items-center w-full cursor-pointer ${
                activeTab === item.title
                  ? "font-bold text-sm"
                  : "font-light text-sm"
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
