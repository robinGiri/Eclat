import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import TheTopNavbarOne from "../components/specificComponents/TheTopNavbarOne";
import TheFooter from "../components/specificComponents/TheFooter";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./checkBox.css";
const registerURL = "http://localhost:4000/api/v1/user/signup";

function TheRegistration() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [address, setAddress] = useState(null);
  const [name, setName] = useState(null);
  const navigate = useNavigate();

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    } else {
      setPasswordsMatch(true);
      console.log("Passwords Match!");
    }
    const user = {
      name: name,
      phone: phone,
      address: address,
      email: email,
      password: password,
    };
    const {
      data: { code },
    } = await axios.post(registerURL, user);
    console.log(code);
    if (code == "200") {
      navigate("/login");
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className="hidden lg:block">
        <div className="h-[88vh] bg-white flex flex-col justify-between">
          <div className="flex justify-center bg-white">
            <div className="w-[55%] ">
              <div className="flex justify-between">
                <div className="flex pb-2 py-10 px-2">
                  <p className="text-xl text-neutral-600 font-light">
                    Create your Eclat Account
                  </p>
                </div>
                <div className="flex items-end justify-end mb-2">
                  <p className="text-xs text-gray-500">
                    Already have an account ?{" "}
                    <span className="text-lime-600 font-semibold hover:text-lime-500 cursor-pointer ">
                      <Link to="/login" onClick={handleLoginClick}>
                        Login
                      </Link>
                    </span>{" "}
                    here.
                  </p>
                </div>
              </div>
              <div className="border-2 border-white bg-neutral-50 rounded-md flex justify-between gap-16 p-10 mb-10">
                <div className="w-[65%]">
                  <div>
                    <p className="text-xs mb-2">Full name*</p>
                    <input
                      type="text"
                      className="border-b-2 w-full p-2 mb-6 text-sm focus:outline-none"
                      placeholder="Enter your first and last name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <p className="text-xs mb-2">Phone Number*</p>
                    <input
                      type="text"
                      className="border-b-2 w-full p-2 mb-6 text-sm focus:outline-none"
                      placeholder="Enter your Phone Number"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div>
                    <p className="text-xs mb-2">Email*</p>
                    <input
                      type="email"
                      className="border-b-2 w-full p-2 mb-6 text-sm focus:outline-none"
                      placeholder="Enter your Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>{" "}
                  <div>
                    <p className="text-xs mb-2">Address*</p>
                    <input
                      type="text"
                      className="border-b-2 w-full p-2 mb-6 text-sm focus:outline-none"
                      placeholder="Enter your Address"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
                <div className="w-[65%] py-2">
                  <div>
                    <div className="relative">
                      <p className="text-xs mb-2">Password*</p>
                      <input
                        type={showPassword ? "text" : "password"}
                        className="border-b-2 w-full p-2 mb-4 text-sm focus:outline-none pr-8"
                        placeholder="Enter your password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      {showPassword ? (
                        <FiEye
                          onClick={togglePasswordVisibility}
                          className="absolute right-3 top-7 text-gray-500 text-lg cursor-pointer"
                        />
                      ) : (
                        <FiEyeOff
                          onClick={togglePasswordVisibility}
                          className="absolute right-3 top-7 text-gray-500 text-lg cursor-pointer"
                        />
                      )}
                    </div>
                    <div className="relative">
                      <p className="text-xs mb-2">Confirm password*</p>
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        className="border-b-2 w-full p-2 mb-4 text-sm focus:outline-none pr-8"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                      />
                      {showConfirmPassword ? (
                        <FiEye
                          onClick={toggleConfirmPasswordVisibility}
                          className="absolute right-3 top-7 text-gray-500 text-lg cursor-pointer"
                        />
                      ) : (
                        <FiEyeOff
                          onClick={toggleConfirmPasswordVisibility}
                          className="absolute right-3 top-7 text-gray-500 text-lg cursor-pointer"
                        />
                      )}
                    </div>
                    {!passwordsMatch && (
                      <p className="text-red-500 text-xs fixed -mt-3">
                        Passwords do not match
                      </p>
                    )}

                    <div className="my-1 px-2 flex items-top gap-2 mb-5">
                      <input
                        type="checkbox"
                        id="agreeCheckbox"
                        name="agreement"
                        value="agree"
                        className="transition h-5 w-5 duration-200 ease-in-out focus:bg-yellow-500"
                      />
                      <p className="text-xs text-gray-500">
                        I'd like to receive exclusive offers and promotions via
                        SMS
                      </p>
                    </div>
                    <div>
                      <button
                        onClick={handleSubmit}
                        className="w-full p-3 mb-2 bg-transparent text-yellow-800 border border-yellow-600 text-sm font-medium rounded-md hover:bg-yellow-600 hover:text-white transition duration-500 ease-in-out"
                      >
                        Sign Up
                      </button>
                      <p className="my-2 px-2 text-xs text-gray-400">
                        By clicking “Sign Up”, I agree to Eclat's Terms of Use
                        and Privacy Policy
                      </p>
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
      </div>
      <div>
        <div className="h-[87vh] lg:hidden mt-[3.2rem] flex flex-col justify-between">
          <div className="text-xs p-3 flex flex-col gap-3 border border-white shadow-custom-shadow">
            <div className="flex flex-col gap-2">
              <h1 className="flex justify-center text-sm font-semibold">
                Create your Eclat Account
              </h1>
              <p className="flex justify-end gap-1">
                Already have an account?
                <Link to="/login">
                  <span className="text-[#B88E72]">Login</span>
                </Link>
                <span>here</span>
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3 mx-4">
                <div>
                  <p>Full name*</p>
                  <input
                    type="text"
                    className="w-full border-b h-[3vh] focus:outline-none"
                    placeholder="Enter your first and last name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <p>Phone Number*</p>
                  <input
                    type="text"
                    className="w-full border-b h-[3vh] focus:outline-none"
                    placeholder="Enter your Phone Number"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div>
                  <p>Email*</p>
                  <input
                    type="email"
                    className="w-full border-b h-[3vh] focus:outline-none"
                    placeholder="Enter your Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <p>Address*</p>
                  <input
                    type="text"
                    className="w-full border-b h-[3vh] focus:outline-none"
                    placeholder="Enter your Address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3 mx-4">
                <div>
                  <div className="relative">
                    <p>Password*</p>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full border-b h-[3vh] focus:outline-none"
                      placeholder="Enter your password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    {showPassword ? (
                      <FiEye
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-7 text-gray-500 cursor-pointer"
                      />
                    ) : (
                      <FiEyeOff
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-7 text-gray-500 cursor-pointer"
                      />
                    )}
                  </div>
                </div>
                <div>
                  <div>
                    <div className="relative">
                      <p>Confirm password*</p>
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        className="w-full border-b h-[3vh] focus:outline-none"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                      />
                      {showConfirmPassword ? (
                        <FiEye
                          onClick={toggleConfirmPasswordVisibility}
                          className="absolute right-3 top-7 text-gray-500 cursor-pointer"
                        />
                      ) : (
                        <FiEyeOff
                          onClick={toggleConfirmPasswordVisibility}
                          className="absolute right-3 top-7 text-gray-500 cursor-pointer"
                        />
                      )}
                    </div>
                    {!passwordsMatch && (
                      <p className="text-red-500 text-xs fixed -mt-3">
                        Passwords do not match
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mt-2">
                    <input
                      type="checkbox"
                      id="agreeCheckbox"
                      name="agreement"
                      value="agree"
                      className="h-4 w-4"
                    />
                    <p className="text-xs text-gray-500">
                      I'd like to receive exclusive offers and promotions via
                      SMS
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex justify-center">
                    <button
                      onClick={handleSubmit}
                      className="p-1 py-2 border px-2 border-lime-500 rounded text-lime-700"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="my-2 px-2 text-xs text-gray-400">
                      By clicking “Sign Up”, I agree to Eclat's Terms of Use and
                      Privacy Policy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TheFooter />
        </div>
      </div>
    </div>
  );
}

export default TheRegistration;
