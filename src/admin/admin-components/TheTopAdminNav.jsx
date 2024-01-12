import React from "react";
import { FaRegMessage } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

function TheTopAdminNav() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <div className="flex justify-between  items-center w-[60%] mx-[2%]">
          <div>
            <h1 className="font-semibold text-sm">Welcome, Abhisek</h1>
            <p className="text-xs font-light">
              11 December 2023 | 12:51 PM GMT
            </p>
          </div>
          <div className="hidden sm:flex w-[18%] border-r-2 justify-center items-center p-1 gap-7 mr-[2%]">
            <FaRegMessage />
            <IoNotificationsOutline />
          </div>
        </div>
        <div className="w-[37%]">
          <div className="hidden sm:flex flex-row items-center mr-2 border p-2 w-[70%] rounded-md">
            <FaSearch className="mx-2 cursor-pointer" />
            <input
              type="text"
              placeholder="Search"
              className="h-full w-full mx-1 outline-none p-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheTopAdminNav;
