import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

function TheTopNavbarOne() {
  const [activeTab, setActiveTab] = useState("");
  const navigate = useNavigate();

  const handleLogoClick = () => {
    setActiveTab("");
    navigate("/");
  };
  const handleLoginPage = () => {
    window.location.href = "/login";
  };

  const handleRegistrationPage = () => {
    window.location.href = "/registration";
  };

  return (
    <div className="pt-7 bg-white">
      <div className="flex flex-row justify-center w-full h-[10vh] bg-[#fafafa]">
        <div className="border-red-500 w-[50%] flex justify-end items-center">
          <Link to="/" onClick={handleLogoClick} className="relative">
            <p className="drop-shadow items-center p-1 flex text-neutral-800 font-peignot text-5xl relative z-10">
              Eclat
            </p>
            <div className="absolute inset-0">
              <span className="absolute -translate-x-21 -translate-y-5 rounded-full inset-1 bg-gradient-to-bl from-yellow-100 h-20 to-transparent opacity-40"></span>
              <span className="absolute rounded-full inset-1 bg-gradient-to-b from-yellow-100 h-20 to-transparent opacity-40"></span>
              <span className="absolute translate-x-24 translate-y-5 rounded-full inset-1 bg-gradient-to-tr from-neutral-50 h-20 to-transparent opacity-40"></span>
              <span className="absolute translate-x-20 -translate-y-10 rounded-full inset-1 bg-gradient-to-tr from-yellow-100 h-20 to-transparent opacity-40"></span>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-5 pl-[25%] w-[50%]">
          <div className="flex items-center gap-2">
            <FaUser
              onClick={handleLoginPage}
              className="text-red-500  text-md cursor-pointer transition duration-300 hover:text-black "
            />
            <button className="text-sm" onClick={handleLoginPage}>
              Login
            </button>
            <p className="mx-2">|</p>
            <button className="text-sm" onClick={handleRegistrationPage}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheTopNavbarOne;
