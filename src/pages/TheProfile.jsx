import React from "react";
import { MdEdit } from "react-icons/md";
import { useState, useEffect } from "react";
import ActivityTab from "../components/specificComponents/ActivityTab";
import DetailsTab from "../components/specificComponents/DetailsTab";
import "../admin/admin-pages/product-components/TheRecentInvoice.css";
import EditProfilePopup from "../components/specificComponents/EditProfilePopUp";
import EditProfilePicture from "../components/specificComponents/EditProfilePicture";
import { getAccessToken, setAccessToken } from "../services/localStorage";
import axios from "axios";
import { json } from "react-router-dom";

const staticAPI = "http://localhost:4000/api/v1/uploads/";
const API = "http://localhost:4000/api/v1/user/";

function TheProfile() {
  const [currentTab, setCurrentTab] = useState(1);
  const [isEditPopupOpen, setEditPopupOpen] = useState(false);
  const [isEditImageOpen, setEditImageOpen] = useState(false);

  const [userId, setUserId] = useState(0);
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const getUser = async () => {
    const user = JSON.parse(getAccessToken("user"));
    setUsername(user.name);
    setMobile(user.phone);
    setEmail(user.email);
    setArea(user.address);
    setUserId(user.id);
    setProfilePicture(user.image);
  };

  useEffect(() => {
    getUser();
    console.log("username incoming", username);
  }, []);

  const handleTabClick = (id) => {
    setCurrentTab(id);
  };

  const handleImageClick = async () => {
    setEditImageOpen(true);
  };

  const handleEditClick = () => {
    setEditPopupOpen(true);
  };

  const handleCloseEditPopup = () => {
    setEditPopupOpen(false);
    setEditImageOpen(false);
  };

  const handleSaveChanges = async () => {
    // handle saving changes to the backend
    const data = {
      name: username,
      email: email,
      phone: mobile,
      address: street,
    };
    const response = await axios.put(`${API}/${email}`, data);

    setAccessToken("user", JSON.stringify(response.data.userdetail));

    setEditPopupOpen(false); // close edit popup
  };

  const tabs = [
    {
      id: 1,
      tabTitle: "Activity",
      content: <ActivityTab />,
    },
    {
      id: 2,
      tabTitle: "Details",
      content: <DetailsTab />,
    },
  ];

  return (
    <>
      <div className="flex mx-2 relative justify-evenly">
        {/* user demography */}
        <div className="flex flex-col rounded-xl h-[100vh] w-[30%] relative overflow-hidden">
          {/* Circle div with image */}
          <div className="flex p-6 justify-center">
            <div
              className="rounded-lg shadow-sm w-[150px] h-[150px] bg-neutral-100 overflow-hidden relative z-50"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleImageClick}
            >
              <img
                src={staticAPI + profilePicture}
                className="w-[150px] h-[150px] object-cover hover:opacity-40 cursor-pointer"
                alt="Profile picture"
              />
              {isHovered && (
                <MdEdit className="shadow rounded-full text-black text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" />
              )}
            </div>
          </div>

          {/* edit profile */}
          <div className="flex justify-center text-xl font-bold">
            {username}
          </div>
          <div
            className="flex justify-center gap-2 pt-4"
            onClick={handleEditClick}
          >
            <h2 className="text-neutral-400 text-sm hover:font-semibold cursor-pointer">
              Edit Profile
            </h2>
            <MdEdit className="text-neutral-500" />
          </div>

          {/* Demographics div */}
          <div className="w-full h-full rounded-lg hover:shadow-lg hover:shadow-yellow-100 bg-white p-5 relative z-50">
            <div className="flex mt-2 px-9 justify-start pb-4">
              <h1 className="text-neutral-600 font-semibold">Contact</h1>
            </div>

            <div className="flex w-full justify-center items-center">
              <div className="flex flex-col gap-2 items-center px-14 w-[200px] ">
                <h2 className="text-neutral-400 font-medium text-sm">
                  Mobile:
                </h2>
                <h2 className="text-neutral-400 font-medium text-sm">
                  E-mail:
                </h2>
              </div>
              <div className="flex flex-col gap-2 items-start w-[300px]">
                <h2 className="text-black font-medium text-sm">{mobile}</h2>
                <h2 className="text-black font-medium text-sm">{email}</h2>
              </div>
            </div>

            <div className="flex justify-start px-10 mt-7">
              <h2 className="text-neutral-600 font-semibold">Address</h2>
            </div>

            <div className="flex p-2 ">
              <div className="flex flex-col">
                <div className="flex justify-center p-2 w-[300px]">
                  <div className="gap-3 w-[35%] flex flex-col">
                    <h2 className="text-neutral-400 font-medium text-sm">
                      Street:
                    </h2>
                    <h2 className="text-neutral-400 font-medium text-sm">
                      Area:
                    </h2>
                    <h2 className="text-neutral-400 font-medium text-sm">
                      City:
                    </h2>
                    <h2 className="text-neutral-400 font-medium text-sm">
                      Province:
                    </h2>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h2 className="font-medium text-sm">{street}</h2>
                    <h2 className="font-medium text-sm">{area}</h2>
                    <h2 className="font-medium text-sm">{city}</h2>
                    <h2 className="font-medium text-sm">{province}</h2>
                  </div>
                </div>
              </div>
            </div>

            {/* change pass and other edit features */}
            <div className="flex flex-col gap-2 mt-5 items-center">
              {/* Render the EditProfilePopup component if isEditPopupOpen is true */}
              {isEditPopupOpen && (
                <EditProfilePopup
                  onClose={handleCloseEditPopup}
                  onSaveChanges={handleSaveChanges}
                  username={username}
                  setUsername={setUsername}
                  setMobile={setMobile}
                  mobile={mobile}
                  setEmail={setEmail}
                  email={email}
                  setStreet={setStreet}
                  street={street}
                  setArea={setArea}
                  area={area}
                  setCity={setCity}
                  city={city}
                  setProvince={setProvince}
                  province={province}
                />
              )}
            </div>
            <div className="flex flex-col gap-2 mt-5 items-center">
              {isEditImageOpen && (
                <EditProfilePicture
                  profilePicture={profilePicture}
                  setProfilePicture={setProfilePicture}
                  onClose={handleCloseEditPopup}
                  onSaveChanges={handleSaveChanges}
                  userId={userId}
                  setUserId={setUserId}
                />
              )}
            </div>
          </div>
        </div>

        {/* activity and further details */}
        <div className="shadow-custom-shadow rounded h-[100vh] w-[95%] custom-scroll">
          <div className="mt-2 px-10 h-[12vh] sticky top-0 z-10 bg-white flex justify-start gap-10 items-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`${
                  currentTab == tab.id
                    ? "font-semibold  text-black border-b-4 border-black h-full"
                    : "text-neutral-500 font-semibold"
                }`}
              >
                {tab.tabTitle}
              </button>
            ))}
          </div>
          <div className="shadow-custom-shadow">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                style={{ display: currentTab === tab.id ? "block" : "none" }}
              >
                {tab.content}
              </div>
            ))}
          </div>
        </div>
      </div>
      {isEditPopupOpen && <EditProfilePopup onClose={handleCloseEditPopup} />}
    </>
  );
}

export default TheProfile;
