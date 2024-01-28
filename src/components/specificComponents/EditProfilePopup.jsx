import React from "react";

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
 

  return (
    <div className="overlay fixed top-0 left-0 w-full h-full flex items-center justify-end bg-black bg-opacity-50 z-20">
      <div className="flex popup bg-white p-10 rounded-l-md shadow-md">
        {/* left column */}
        <div className="flex">
          <div className="flex flex-col">
            <h1 className="font-bold mb-5">Contact</h1>
            

            <div className="flex flex-col m-2">
              <label htmlFor="username" className="font-semibold pb-2">
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
              <label htmlFor="mobile" className="font-semibold pb-2 ">
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
              <label htmlFor="email" className="font-semibold pb-2">
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
        </div>

        {/* ___________________________________________________________ */}

        <div className="flex flex-col px-10">
          <div className="flex flex-col">
            <h1 className="font-bold mb-5">Address</h1>
            <label htmlFor="street" className="font-semibold pb-2">
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
            <label htmlFor="area" className="font-semibold pb-2">
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
            <label htmlFor="city" className="font-semibold pb-2">
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
            <label htmlFor="province" className="font-semibold pb-2">
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

        {/* Change Password Section */}
        <div className="px-10">
          <div className="flex flex-col mx-2">
            <h2 className="font-bold mb-4">Change Password</h2>
            <label htmlFor="oldPassword" className="font-semibold">
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
            <br />
          </div>


            <div className="flex flex-col m-2">
          <label htmlFor="newPassword" className="font-semibold">
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
          <br />
          </div>

          <div className="flex flex-col m-2">
          <label htmlFor="confirmNewPassword" className="font-semibold">
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
          <br />
          </div>
        <div className="flex flex-col justify-center gap-4 text-sm font-semibold">
          <button
            onClick={onSaveChanges}
            className="border-2 border-lime-500 p-4 hover:bg-lime-500 hover:text-white rounded-lg text-lime-600 transition duration-200 ease-in-out"
          >
            Save Changes
          </button>
          <button
            onClick={onClose}
            className="border-2 border-red-500 p-4 hover:bg-red-500 hover:text-white rounded-lg text-red-600 transition duration-200 ease-in-out"
          >
            Cancel
          </button>
        </div>
        </div>

      </div>
    </div>
  );
}

export default EditProfilePopup;
