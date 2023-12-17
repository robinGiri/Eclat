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
    navigate("/login");
  };

  const handleRegistrationPage = () => {
    navigate("/registration");
  };

  return (
    <div>
      <div className="flex justify-center items-center bg-gradient-to-t from-white to-neutral-100 text-neutral-600">
        <div className="translate-x-[50%] h-[10vh] flex justify-center items-center">
          <Link to="/" onClick={handleLogoClick} className="relative">
            <p className="items-center flex text-neutral-800 font-peignot text-5xl relative z-10">
              Eclat
            </p>
            <div className="absolute inset-0">
              <span className="absolute -translate-x-21 translate-y-3 rounded-full inset-1 bg-gradient-to-bl from-yellow-100 h-10 to-transparent opacity-40"></span>
              <span className="absolute rounded-md inset-1 bg-gradient-to-b from-yellow-100 h-10 to-transparent opacity-20"></span>
              <span className="absolute -translate-x-8 -translate-y-5 rounded-full inset-1 bg-gradient-to-tr from-yellow-100 h-16 to-transparent opacity-40"></span>
              <span className="absolute translate-x-10 -translate-y-3 rounded-full inset-1 bg-gradient-to-tr from-yellow-100 h-15 to-transparent opacity-40"></span>
            </div>
          </Link>
        </div>
        <div className="flex translate-x-[350%] items-center  gap-2">
          <div className="flex items-center gap-2">
            <FaUser
              onClick={handleLoginPage}
              className="text-red-500 text-md cursor-pointer transition duration-300 hover:text-black "
            />
            <button className="text-xs" onClick={handleLoginPage}>
              Login
            </button>
            <p className="mx-1">|</p>
            <button className="text-xs" onClick={handleRegistrationPage}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheTopNavbarOne;
