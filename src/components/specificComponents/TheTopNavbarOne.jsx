import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";


function TheTopNavbarOne() {
  const [activeTab, setActiveTab] = useState("");
  const navigate = useNavigate();

  const handleLogoClick = () => {
    setActiveTab("/");
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
      <div className="flex justify-center items-center bg-white pt-2 text-neutral-600 mt-2 ">
        <div className="translate-x-[50%] h-[10vh] flex justify-center items-center">
          {/* <Link to="/" onClick={handleLogoClick} className="relative">
           <img src="src/assets/logo.png" alt="Logo"  className="border border-black w-[200px]"/>
          </Link> */}
        </div>
        <div className="flex translate-x-[350%] items-center  gap-2">
          {/* <div className="flex items-center gap-2">
          
            <button className="text-xs" onClick={handleLoginPage}>
              Login
            </button>
            <p className="mx-1">|</p>
            <button className="text-xs" onClick={handleRegistrationPage}>
              Sign Up
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default TheTopNavbarOne;
