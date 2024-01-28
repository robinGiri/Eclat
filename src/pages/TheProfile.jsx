import React from "react";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import ActivityTab from "../components/specificComponents/ActivityTab";
import DetailsTab from "../components/specificComponents/DetailsTab";
import "../admin/admin-pages/product-components/TheRecentInvoice.css";
import EditProfilePopup from "../components/specificComponents/EditProfilePopUp";
import EditProfilePicture from "../components/specificComponents/EditProfilePicture";

function TheProfile() {
  const [currentTab, setCurrentTab] = useState(1);
  const [isEditPopupOpen, setEditPopupOpen] = useState(false);
  const [isEditImageOpen, setEditImageOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("9882138912");
  const [email, setEmail] = useState("eclat@mail.com");
  const [street, setStreet] = useState("Balaju Chowk");
  const [area, setArea] = useState("Balaju");
  const [city, setCity] = useState("Kathmandu");
  const [province, setProvince] = useState("Bagmati");
  const [profilePicture, setProfilePicture] = useState("src/assets/panda.jpg");

  const handleTabClick = (id) => {
    setCurrentTab(id);
  };

  const handleImageClick = () => {
    setEditImageOpen(true);
  }

  const handleEditClick = () => {
    setEditPopupOpen(true);
  };

  const handleCloseEditPopup = () => {
    setEditPopupOpen(false);
  };

  const handleSaveChanges = () => {
    // handle saving changes to the backend 
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
    }
  ];

  return (
    <>
      <div className="flex mx-2 relative justify-evenly">
        {/* user demography */}
        <div className="flex flex-col rounded-xl h-[100vh] w-[30%] relative overflow-hidden">
          {/* Circle div with image */}
          <div className="flex p-6 justify-center">
            <div className="rounded-full shadow-sm w-[150px] h-[150px] bg-neutral-100 overflow-hidden hover:opacity-50 cursor-pointer relative z-50" onClick={handleImageClick}>
              <img
                src={profilePicture}
                className="w-full h-full"
                alt="Profile"
              />
              
              
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
                />
              )}
            </div>
          </div>
        </div>

        {/* activity and further details */}
        <div className="shadow-md rounded-xl h-[100vh] w-[95%] custom-scroll">
          <div className="mt-2 px-10 h-[12vh] sticky top-0 z-10 bg-white flex justify-start gap-10 items-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`${
                  currentTab == tab.id
                    ? "font-semibold text-lg text-black border-b-4 border-black h-full"
                    : "text-neutral-500 font-semibold text-lg"
                }`}
              >
                {tab.tabTitle}
              </button>
            ))}
          </div>
          <div className="content">
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
