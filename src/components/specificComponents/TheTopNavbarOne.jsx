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
           <img src="assets/logo.png" alt="Logo" />
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
