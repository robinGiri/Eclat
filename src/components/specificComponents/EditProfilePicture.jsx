import React from "react";

function EditProfilePicture({ profilePicture, setProfilePicture, onClose, onSaveChanges }) {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
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
        />
        <br />
        <div className="flex flex-col justify-center gap-4 text-sm font-semibold">
          <button
            onClick={handleImageChange}
            className="border-2 border-lime-500 p-4 hover:bg-lime-500 hover:text-white rounded-lg text-lime-600 transition duration-200 ease-in-out"
          >
            Save Changes
          </button>
          <button
            onClick={onClose}  // Ensure that the onClose function is called here
            className="border-2 border-red-500 p-4 hover:bg-red-500 hover:text-white rounded-lg text-red-600 transition duration-200 ease-in-out"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfilePicture;
