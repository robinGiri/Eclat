import React, { useState } from "react";
import { FaFacebookSquare, FaGooglePlus } from "react-icons/fa";
import { PiEyeClosedThin, PiEye } from "react-icons/pi";
import TheTopNavbarOne from "../components/specificComponents/TheTopNavbarOne";
import TheFooter from "../components/specificComponents/TheFooter";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
const loginUrl = "http://localhost:4000/api/v1/user/login";

function TheLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegisterClick = () => {
    navigate("/registration");
  };
  const handleLogin = async () => {
    const login = { email: email, password: password };
    const { data } = await axios.post(loginUrl, login);
    const { code } = data;
    if (code == 200) {
      handleAdminDashboardClick();
    }
  };

  const handleAdminDashboardClick = () => {
    navigate("/admin-dashboard");
  };

  return (
    <div className="h-[100vh] bg-slate-100 flex flex-col justify-between">
      <div>
        <TheTopNavbarOne />
      </div>
      <div className="flex justify-center">
        <div className="w-[50%]">
          <div className="flex justify-between items-center py-7 px-5">
            <p className="text-2xl">Welcome to Eclat! Please login.</p>
            <p className="text-xs text-gray-500">
              New member?{" "}
              <span className="text-sky-500 cursor-pointer">
                <Link to="/registration" onClick={handleRegisterClick}>
                  Register
                </Link>
              </span>{" "}
              here.
            </p>
          </div>
          <div className="border-2 border-white bg-white flex justify-between gap-9 py-7 px-5">
            <div className="w-[55%]">
              <div>
                <p className="text-xs mb-1">Phone Number or Email*</p>
                <input
                  type="text"
                  className="border w-full p-2 mb-6 text-sm focus:outline-none"
                  placeholder="Please enter your Phone Number or Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative">
                <p className="text-xs mb-1">password*</p>
                <input
                  type={showPassword ? "text" : "password"}
                  className="border w-full p-2 mb-4 text-sm focus:outline-none pr-8"
                  placeholder="Please enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showPassword ? (
                  <PiEye
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-7 text-gray-500 text-2xl cursor-pointer"
                  />
                ) : (
                  <PiEyeClosedThin
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-7 text-gray-500 text-2xl cursor-pointer"
                  />
                )}
              </div>
              <div>
                <p className="text-xs float-right text-sky-500 cursor-pointer">
                  Reset your password
                </p>
              </div>
            </div>
            <div className="w-[45%] py-2">
              <div>
                <div>
                  <button
                    className="w-full p-3 mb-2 bg-orange-500 text-white text-sm rounded-sm hover:bg-orange-600 transition duration-500 ease-in-out"
                    onClick={handleLogin}
                  >
                    LOGIN
                  </button>
                </div>
                <div className="text-xs mb-2 text-gray-500">or login with</div>
                <div className="flex flex-col gap-1">
                  <button className="w-full p-2 mb-2 bg-blue-900 text-white rounded-sm flex justify-center items-center gap-3">
                    <FaFacebookSquare className="text-2xl" />
                    Facebook
                  </button>
                  <button className="w-full p-2 mb-2 bg-red-800 text-white rounded-sm flex justify-center items-center gap-3">
                    <FaGooglePlus className="text-2xl" />
                    Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <TheFooter />
      </div>
    </div>
  );
}

export default TheLogin;
