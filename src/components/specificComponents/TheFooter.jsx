import React from "react";
import { Link } from "react-router-dom";
import darkLogo from "../../assets/logo_dark.png";

export default function TheFooter() {
  return (
    <div>
      <div className="hidden lg:block md:block">
        <footer className="bg-neutral-800 text-white p-4">
          <div className="flex justify-between">
            <div className="flex items-center">
              <Link to="/">
                <img
                  src={darkLogo}
                  alt="Eclat Logo"
                  className="w-[100px] pb-2"
                />
              </Link>
            </div>
            <div className="flex text-sm gap-5 items-center">
              <Link to="/">
                <p>
                  <span className="stylish-border cursor-pointer transition-all duration-100 ease-in hover:text-[#B88E72]">
                    Home
                  </span>
                </p>
              </Link>
              <p>
                <span className="stylish-border cursor-pointer transition-all duration-100 ease-in hover:text-[#B88E72]">
                  About Us
                </span>
              </p>
              <p>
                <span className="stylish-border cursor-pointer transition-all duration-100 ease-in hover:text-[#B88E72]">
                  Contact
                </span>
              </p>
            </div>
          </div>
        </footer>
      </div>

      <div className="lg:hidden">
        <footer className="bg-neutral-800 text-white p-4">
          <div className="flex justify-between">
            <div className="flex items-center">
              <Link to="/">
                <img
                  src={darkLogo}
                  alt="Eclat Logo"
                  className="w-[100px] pb-2"
                />
              </Link>
            </div>
            <div className="flex text-sm gap-5 items-center">
              <Link to="/">
                <p>
                  <span className="stylish-border cursor-pointer transition-all duration-100 ease-in hover:text-[#B88E72]">
                    Home
                  </span>
                </p>
              </Link>
              <p>
                <span className="stylish-border cursor-pointer transition-all duration-100 ease-in hover:text-[#B88E72]">
                  About Us
                </span>
              </p>
              <p>
                <span className="stylish-border cursor-pointer transition-all duration-100 ease-in hover:text-[#B88E72]">
                  Contact
                </span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
