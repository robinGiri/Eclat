import axios from "axios";
import React from "react";
import { setAccessToken } from "../../services/localStorage";
import { json } from "d3";
import { MdClose } from "react-icons/md";

function EditProfilePicture({ setProfilePicture, onClose, userId }) {
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("userId", userId);
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
    setAccessToken("user", JSON.stringify(response.data.userdetail));
    setProfilePicture(response.data.userdetail.image);
    onClose();
  };

  return (
    <div className="overlay fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-blur z-20">
      <div className="flex flex-col gap-4 bg-white p-10 rounded-md">
        <div className="flex justify-between">
          <label htmlFor="profilePicture" className="font-semibold pb-2">
            Profile Picture:
          </label>
          <MdClose
            onClick={onClose}
            className="cursor-pointer text-red-500 text-2xl hover:text-red-600"
          />
        </div>
        <input
          type="file"
          accept="image/*"
          id="profilePicture"
          name="profilePicture"
          onChange={handleImageChange}
        />
        <br />
      </div>
    </div>
  );
}

export default EditProfilePicture;
