import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

const TheUpdateModal = ({ product, closeModal, handleEdit }) => {
  const [updatedProduct, setUpdatedProduct] = useState({});

  useEffect(() => {
    setUpdatedProduct({ ...product });
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = (name === 'price' || name === 'viewCount') ? parseInt(value, 10) : value;
    setUpdatedProduct((prevProduct) => {
      return { ...prevProduct, [name]: parsedValue };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(updatedProduct);
    closeModal();
    console.log("Before Update: ", product);
    console.log("After Update:", updatedProduct);
  };
  const handleClickOutside = (event) => {
    if (event.target.classList.contains("click-close")) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [closeModal]);

  return (
    <div className="fixed inset-0 top-11 z-50 flex justify-end items-center click-close">
      <div className="bg-white rounded-l-lg p-6 shadow-md w-[50%] h-[80vh] overflow-auto click-close">
      <div>
          <IoClose onClick={closeModal} className="cursor-pointer absolute top-[10%] right-[2%] text-2xl z-[70]" title="Close"/>
          </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="border-2 border-white shadow-custom-shadow rounded w-[50%] p-4 flex justify-center ">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-6xl font-extrabold text-gray-700">
                  ID: {product.id}
                </label>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Product Name : {product.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Product Category : {product.category}
                  </label>
                  <input
                    type="text"
                    name="category"
                    onChange={handleChange}
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Quantity : {product.viewCount}
                  </label>
                  <input
                    type="number"
                    name="viewCount"
                    onChange={handleChange}
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Price : ${product.price}
                  </label>
                  <input
                    type="number"
                    name="price"
                    onChange={handleChange}
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-indigo-500 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheUpdateModal;
