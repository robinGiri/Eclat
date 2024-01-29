import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import TheTopNavbarOne from "../components/specificComponents/TheTopNavbarOne";
import TheFooter from "../components/specificComponents/TheFooter";
import { useNavigate, Link } from "react-router-dom";
import { setAccessToken } from "../services/localStorage";
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
    // setAccessToken(data.token);

    const {
      userdetail: { role },
    } = data;
    if (role == "ADMIN") {
      handleAdminDashboardClick();
    } else {
      handleHomeClick();
    }
  };

  const handleAdminDashboardClick = () => {
    navigate("/admin-dashboard");
  };
  const handleHomeClick = () => {
    navigate("/home");
  };

  return (
    <div className="h-[100vh] bg-white flex flex-col justify-between">
      <div>
        <TheTopNavbarOne />
      </div>
      <div className="flex justify-center mb-5">
        <div className="w-[45%]">
          <div className="flex flex-col justify-center items-center py-2 px-2">
            <p className="text-2xl text-neutral-500">Welcome,</p>
          </div>
          <div className="flex justify-end mb-2">
            <p className="text-xs text-gray-500">
              New member?{" "}
              <span className="text-sky-500 cursor-pointer">
                <Link
                  to="/registration"
                  onClick={handleRegisterClick}
                  className="font-semibold text-yellow-600 hover:text-yellow-500"
                >
                  Register
                </Link>
              </span>{" "}
              here.
            </p>
          </div>
          <div className="bg-neutral-50 flex flex-col items-center rounded-md justify-center gap-8 p-10">
            <div className="w-[50%]">
              <div>
                <p className="text-xs mb-2 font-medium">
                  Phone Number or Email*
                </p>
                <input
                  type="text"
                  className="border-b-2 w-full p-2 mb-6 text-sm focus:outline-none"
                  placeholder="Enter your Phone Number or Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative mt-5">
                <p className="text-xs mb-2 font-medium">Password*</p>
                <input
                  type={showPassword ? "text" : "password"}
                  className="border-b-2 w-full p-2 mb-4 text-sm focus:outline-none pr-8"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showPassword ? (
                  <FiEye
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-8 text-gray-500 text-lg cursor-pointer"
                  />
                ) : (
                  <FiEyeOff
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-8 text-gray-500 text-lg cursor-pointer"
                  />
                )}
              </div>
              <div>
                <p className="text-xs float-left text-neutral-400 hover:text-red-900 cursor-pointer">
                  Forgot password?
                </p>
              </div>
            </div>
            <div className="w-[45%] py-2">
              <div>
                <div>
                  <button
                    className="w-full p-3 mb-2 border border-lime-500 bg-transparent text-lime-700 text-sm rounded-md hover:bg-lime-600 hover:text-white transition duration-200 ease-in-out"
                    onClick={handleLogin}
                  >
                    Login
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
