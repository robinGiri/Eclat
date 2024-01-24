import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

const TheUserUpdateModal = ({ product, closeModal, handleUserEdit }) => {
  const [updatedProduct, setUpdatedProduct] = useState({});

  useEffect(() => {
    setUpdatedProduct({ ...product });
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUserEdit(updatedProduct);
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
      <div className="bg-white rounded-l-lg shadow-md w-[45%] h-[80vh] overflow-auto click-close">
        <div>
          <IoClose
            onClick={closeModal}
            className="cursor-pointer absolute right-[2%] text-2xl z-[70]"
            title="Close"
          />
        </div>
        <div className="flex justify-center items-center w-[100%]">
          <div className="w-[100%]">
            <form onSubmit={handleSubmit}>
              <div>
                <div className="flex justify-center items-center">
                  <label className="text-6xl font-extrabold text-gray-700">
                    ID: {product.id}
                  </label>
                </div>
                <div className="w-[100%] px-7 gap-4">
                  <div className="flex justify-center border gap-3">
                    <div className="w-[100%] p-5">
                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          User Name : {product.name}
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder={`Change ${product.name}`}
                          onChange={handleChange}
                          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none placeholder:text-sm placeholder:font-light"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          Address : {product.address}
                        </label>
                        <input
                          type="text"
                          name="address"
                          placeholder={`Change ${product.address}`}
                          onChange={handleChange}
                          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none  placeholder:text-sm placeholder:font-light"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          Phone : ${product.phone}
                        </label>
                        <input
                          type="number"
                          name="phone"
                          placeholder={`Change ${product.phone}`}
                          onChange={handleChange}
                          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none  placeholder:text-sm placeholder:font-light"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          Email : {product.email}
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder={`Change ${product.email}`}
                          onChange={handleChange}
                          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none  placeholder:text-sm placeholder:font-light"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          User Role : {product.role}
                        </label>
                        <div>
                          <select
                            id="role"
                            name="role"
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none"
                          >
                            <option value="">Change role</option>
                            <option value="CUSTOMER">Customer</option>
                            <option value="DRIVER">Driver</option>
                            <option value="ADMIN">Admin</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          Last Purchased : {product.createdAt}
                        </label>
                        <input
                          type="text"
                          name="lastdate"
                          placeholder={`Change ${product.createdAt}`}
                          onChange={handleChange}
                          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none  placeholder:text-sm placeholder:font-light"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-3">
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-admin-blue hover:bg-blue-800 rounded-md"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheUserUpdateModal;
