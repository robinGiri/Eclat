import React, { useEffect } from "react";

function TheUserDeleteModal({ handleUserDelete, productId, onCancel }) {
  const confirmDelete = () => {
    handleUserDelete(productId);
    onCancel();
  };

  const handleClickOutside = (event) => {
    if (event.target.classList.contains("click-close")) {
      onCancel();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onCancel]);

  return (
    <div className="fixed inset-0 z-50 flex justify-end items-center top-[6%]  click-close">
      <div className="bg-white rounded-l-lg p-6 shadow-md w-[50%] h-[80vh] overflow-auto click-close">
      <div className=" h-full flex justify-center items-center">
      <div>
        <p className="text-3xl font-extrabold mb-10 flex justify-center items-center">
          Delete this product?
        </p>
        <div className="flex justify-center">
          <button
            className="font-semibold px-4 py-2 rounded mr-4 bg-red-500 text-white hover:bg-red-600"
            onClick={confirmDelete}
          >
            Yes
          </button>
          <button
            className="font-semibold px-5 rounded bg-admin-blue text-white hover:bg-blue-800"
            onClick={onCancel}
          >
            No
          </button>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default TheUserDeleteModal;
