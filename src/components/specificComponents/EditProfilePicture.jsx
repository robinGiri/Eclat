import axios from "axios";
import React from "react";
import {setAccessToken} from "../../services/localStorage";
import { json } from "d3";


function EditProfilePicture({ setProfilePicture, onClose, userId }) {

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("userId",userId)
    formData.append("image", file);

      const response = await axios.patch(
        "http://localhost:4000/api/v1/user/upload/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setAccessToken("user",JSON.stringify(response.data.userdetail))
      setProfilePicture(response.data.userdetail.image)
  };

  return (
    <div className="overlay fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-20">
      <div className="flex flex-col gap-4 bg-white p-10 rounded-md">
        <label htmlFor="profilePicture" className="font-semibold pb-2">
          Profile Picture:
        </label>
        <input
          type="file"
          accept="image/*"
          id="profilePicture"
          name="profilePicture"
          onChange={handleImageChange}
        />
        <br />
        <div className="flex flex-col justify-center gap-4 text-sm font-semibold">
          <button
            onClick={onClose}  // Ensure that the onClose function is called here
            className="border-2 border-red-500 p-4 hover:bg-red-500 hover:text-white rounded-lg text-red-600 transition duration-200 ease-in-out"
          >
          <button
            className="border-2 border-lime-500 p-4 hover:bg-lime-500 hover:text-white rounded-lg text-lime-600 transition duration-200 ease-in-out"
          >
            Save Changes
          </button>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfilePicture;
