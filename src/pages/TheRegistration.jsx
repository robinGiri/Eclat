import { useState } from "react";
import { FaFacebookSquare, FaGooglePlus } from "react-icons/fa";
import { PiEyeClosedThin, PiEye } from "react-icons/pi";
import TheTopNavbarOne from "../components/specificComponents/TheTopNavbarOne";
import TheFooter from "../components/specificComponents/TheFooter";
import { useNavigate, Link } from "react-router-dom";

function TheRegistration() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    } else {
      setPasswordsMatch(true);
      console.log("Passwords Match!");
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="h-[100vh] bg-slate-100 flex flex-col justify-between">
      <div>
        <TheTopNavbarOne />
      </div>
      <div className="flex justify-center">
        <div className="w-[50%]">
          <div className="flex justify-between items-center py-7 px-5">
            <p className="text-2xl">Create your Eclat Account</p>
            <p className="text-xs text-gray-500">
              Already?{" "}
              <span className="text-sky-500 cursor-pointer ">
                <Link to="/login" onClick={handleLoginClick}>
                  Login
                </Link>
              </span>{" "}
              here.
            </p>
          </div>
          <div className="border-2 border-white bg-white flex justify-between gap-9 py-7 px-5 mb-10">
            <div className="w-[55%]">
              <div>
                <p className="text-xs mb-1">Phone Number*</p>
                <input
                  type="text"
                  className="border w-full p-2 mb-6 text-sm focus:outline-none"
                  placeholder="Please enter your Phone Number"
                />
              </div>
              <div>
                <p className="text-xs mb-1">Email*</p>
                <input
                  type="text"
                  className="border w-full p-2 mb-6 text-sm focus:outline-none"
                  placeholder="Please enter your Email"
                />
              </div>{" "}
              <div>
                <p className="text-xs mb-1">Address*</p>
                <input
                  type="text"
                  className="border w-full p-2 mb-6 text-sm focus:outline-none"
                  placeholder="Enter your Address"
                />
              </div>
              <div className="relative">
                <p className="text-xs mb-1">Password*</p>
                <input
                  type={showPassword ? "text" : "password"}
                  className="border w-full p-2 mb-4 text-sm focus:outline-none pr-8"
                  placeholder="Please enter your password"
                  value={password}
                  onChange={handlePasswordChange}
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
              <div className="relative">
                <p className="text-xs mb-1">Confirm password*</p>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="border w-full p-2 mb-4 text-sm focus:outline-none pr-8"
                  placeholder="Please confirm your password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                {showConfirmPassword ? (
                  <PiEye
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute right-3 top-7 text-gray-500 text-2xl cursor-pointer"
                  />
                ) : (
                  <PiEyeClosedThin
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute right-3 top-7 text-gray-500 text-2xl cursor-pointer"
                  />
                )}
              </div>
              {!passwordsMatch && (
                <p className="text-red-500 text-xs fixed -mt-3">
                  Passwords do not match
                </p>
              )}
              <div>
                <p className="text-xs float-right text-sky-500 cursor-pointer">
                  Reset your password
                </p>
              </div>
            </div>
            <div className="w-[45%] py-2">
              <div>
                <div>
                  <p className="text-xs mb-1">Full name*</p>
                  <input
                    type="text"
                    className="border w-full p-2 mb-6 text-sm focus:outline-none"
                    placeholder="Enter your first and last name"
                  />
                </div>
                <div className="flex items-top gap-2 mb-5">
                  <input
                    type="checkbox"
                    id="agreeCheckbox"
                    name="agreement"
                    value="agree"
                    className="transition h-5 w-5 duration-900 ease-in-out"
                  />
                  <p className="text-xs text-gray-500">
                    I'd like to receive exclusive offers and promotions via SMS
                  </p>
                </div>
                <div>
                  <button
                    onClick={handleSubmit}
                    className="w-full p-3 mb-2 bg-orange-500 text-white text-sm rounded-sm hover:bg-orange-600 transition duration-500 ease-in-out"
                  >
                    SIGN UP
                  </button>
                  <p className="text-xs text-gray-500">
                    By clicking “SIGN UP”, I agree to Eclat's Terms of Use and
                    Privacy Policy
                  </p>
                </div>
                <div className="text-xs mb-2 pt-5 text-gray-500">
                  or Sign Up with
                </div>
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

export default TheRegistration;
