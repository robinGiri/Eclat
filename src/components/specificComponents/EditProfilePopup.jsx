import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiEye, FiEyeOff } from "react-icons/fi";

function EditProfilePopup({
  onClose,
  onSaveChanges,
  username,
  setUsername,
  setMobile,
  mobile,
  setEmail,
  email,
  setStreet,
  street,
  setArea,
  area,
  setCity,
  city,
  setProvince,
  province,
  oldPassword,
  setOldPassword,
  newPassword,
  setNewPassword,
  confirmNewPassword,
  setConfirmNewPassword,
}) {
  const [password, setPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleOldPasswordVisibility = () => {
    setShowOldPassword(!showOldPassword);
  };
  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showOldPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showOldPassword);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // if (password !== confirmPassword) {
  //   setPasswordsMatch(false);
  //   return;
  // } else {
  //   setPasswordsMatch(true);
  //   console.log("Passwords Match!");
  // }

  return (
    <div className="overlay fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-20">
      <div className="flex gap-10 bg-white w-[70%] p-10 rounded-md shadow-md">
        {/* contact details */}
        <div className="flex flex-col items-start">
          <h1 className="font-bold mb-5">Contact</h1>

          <div className="flex flex-col m-2">
            <label htmlFor="username" className="font-medium pt-2 pb-2">
              Username:
            </label>
            <input
              type="text"
              className="border-b-2 focus:outline-none"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
          </div>

          <div className="flex flex-col m-2">
            <label htmlFor="mobile" className="font-medium pt-2 pb-2 ">
              Mobile:
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              className="border-b-2 focus:outline-none"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <br />
          </div>

          <div className="flex flex-col m-2">
            <label htmlFor="email" className="font-medium pt-2 pb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border-b-2 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
          </div>
        </div>

        {/* Address details*/}

        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-start">
            <h1 className="font-bold mb-5">Address</h1>

            <div className="flex flex-col m-2">
              <label htmlFor="street" className="font-medium pt-2 pb-2">
                Street:
              </label>
              <input
                type="text"
                id="street"
                name="street"
                className="border-b-2 focus:outline-none"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
              <br />
            </div>

            <div className="flex flex-col m-2">
              <label htmlFor="area" className="font-medium pt-2 pb-2">
                Area:
              </label>
              <input
                type="text"
                id="area"
                name="area"
                className="border-b-2 focus:outline-none"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
              <br />
            </div>

            <div className="flex flex-col m-2">
              <label htmlFor="city" className="font-medium pt-2 pb-2">
                City:
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="border-b-2 focus:outline-none"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <br />
            </div>

            <div className="flex flex-col m-2">
              <label htmlFor="province" className="font-medium pt-2 pb-2">
                Province:
              </label>
              <input
                type="text"
                id="province"
                name="province"
                className="border-b-2 focus:outline-none"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
              />
              <br />
            </div>
          </div>
        </div>

        {/* Change Password Section */}
        <div className="px-10 w-auto">
          <div className="flex flex-col items-start mx-2">
            <h2 className="font-bold mb-4">Change Password</h2>

            <div className="flex flex-col m-2 relative">
              <label htmlFor="oldPassword" className="font-medium pt-2">
                Old Password:
              </label>
              <input
                type="password"
                id="oldPassword"
                name="oldPassword"
                className="border-b-2 mt-2 focus:outline-none"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              {showOldPassword ? (
                <FiEye
                  onClick={toggleOldPasswordVisibility}
                  className="absolute right-3 top-8 text-gray-500 text-lg cursor-pointer"
                />
              ) : (
                <FiEyeOff
                  onClick={toggleOldPasswordVisibility}
                  className="absolute right-3 top-8 text-gray-500 text-lg cursor-pointer"
                />
              )}
              <br />
            </div>

            <div className="flex flex-col m-2 relative">
              <label htmlFor="newPassword" className="font-medium pt-2">
                New Password:
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                className="border-b-2 mt-2 focus:outline-none"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              {showNewPassword ? (
                <FiEye
                  onClick={toggleNewPasswordVisibility}
                  className="absolute right-3 top-8 text-gray-500 text-lg cursor-pointer"
                />
              ) : (
                <FiEyeOff
                  onClick={toggleNewPasswordVisibility}
                  className="absolute right-3 top-8 text-gray-500 text-lg cursor-pointer"
                />
              )}
              <br />
            </div>

            <div className="flex flex-col m-2 relative">
              <label htmlFor="confirmNewPassword" className="font-medium pt-2">
                Confirm New Password:
              </label>
              <input
                type="password"
                id="confirmNewPassword"
                name="confirmNewPassword"
                className="border-b-2 mt-2 focus:outline-none"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
              {showConfirmPassword ? (
                <FiEye
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-3 top-8 text-gray-500 text-lg cursor-pointer"
                />
              ) : (
                <FiEyeOff
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-3 top-8 text-gray-500 text-lg cursor-pointer"
                />
              )}
              <br />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4 text-sm font-medium pt-2 px-2">
            <button
              onClick={onSaveChanges}
              className="border-2 border-lime-500 p-4  hover:bg-lime-500 hover:text-white rounded-lg text-lime-600 transition duration-200 ease-in-out"
            >
              Save Changes
            </button>
          </div>
        </div>
        <MdClose
          onClick={onClose}
          className="cursor-pointer text-red-600 text-2xl hover:text-red-400"
        />
      </div>
    </div>
  );
}

export default EditProfilePopup;
