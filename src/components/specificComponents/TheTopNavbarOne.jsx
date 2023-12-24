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
    <div className="flex justify-center ">
      <div className="flex flex-col sm:flex-row items-center justify-between text-neutral-600 w-full sm:w-[95%]">
      <div className="hidden sm:flex">
        <p className="sm:none px-3 py-1 text-sm cursor-pointer hover:font-semibold">
          help
        </p>
      </div>
        <div className="flex w-[150px] pt-4 justify-center items-center">
          <Link to="/" onClick={handleLogoClick} className="relative">
            <img src="src/assets/logo.png" alt="Logo"></img>
          </Link>
        </div>
        <div className="items-center gap-2 pr-5 ml-auto sm:ml-0">
          <div className="flex items-center gap-2">
            <FaUser
              onClick={handleLoginPage}
              className="text-red-500 text-md cursor-pointer transition duration-300 hover:text-black ml-auto "
            />
            <button className="text-xs hidden sm:inline" onClick={handleLoginPage}>
              Login
            </button>
            <p className="hidden sm:inline">|</p>
            <button className="text-xs hidden sm:inline" onClick={handleRegistrationPage}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheTopNavbarOne;
