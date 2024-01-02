import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

const TheUpdateModal = ({ product, closeModal, handleEdit }) => {
  const [updatedProduct, setUpdatedProduct] = useState({ description: product.description || ''});

  useEffect(() => {
    setUpdatedProduct({ ...product });
  }, [product]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const parsedValue =
      name === "price" || name === "viewCount" || name === "discount"
        ? parseInt(value, 10)
        : value;

    if (name === "image" && files && files[0]) {
      const reader = new FileReader();

      reader.onload = function (event) {
        setUpdatedProduct((prevProduct) => ({
          ...prevProduct,
          [name]: event.target.result,
        }));
      };
      if (e.target.name === "description") {
        setUpdatedProduct((prevProduct) => ({
          ...prevProduct,
          description: e.target.value,
        }));
      }

      reader.readAsDataURL(files[0]);
    } else {
      setUpdatedProduct((prevProduct) => ({
        ...prevProduct,
        [name]: parsedValue,
      }));
    }
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
      <div className="bg-white rounded-l-lg shadow-md w-[85%] h-[80vh] overflow-auto click-close">
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
                    <div className="w-[50%] border-r p-3">
                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          Product Name : {product.name}
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
                          Product Category : {product.category}
                        </label>
                        <input
                          type="text"
                          name="category"
                          placeholder={`Change ${product.category}`}
                          onChange={handleChange}
                          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none  placeholder:text-sm placeholder:font-light"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          Quantity : {product.viewCount}
                        </label>
                        <input
                          type="number"
                          name="viewCount"
                          placeholder={`Change ${product.viewCount}`}
                          onChange={handleChange}
                          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none  placeholder:text-sm placeholder:font-light"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          Amount : ${product.price}
                        </label>
                        <input
                          type="number"
                          name="price"
                          placeholder={`Change ${product.price}`}
                          onChange={handleChange}
                          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none  placeholder:text-sm placeholder:font-light"
                        />
                      </div>
                      <div className="mt-2 mb-2">
                        <label className="text-sm font-medium text-gray-700">
                          Status : {product.status}
                          <span className="text-[10px]">
                            (Choose Active or Inactive)
                          </span>
                        </label>
                        <div className="flex mt-2">
                          <button
                            type="button"
                            onClick={() =>
                              setUpdatedProduct({
                                ...updatedProduct,
                                status: "Active",
                              })
                            }
                            className={`w-20 px-2 py-1 mr-4 rounded-md focus:outline-none  placeholder:text-sm placeholder:font-light ${
                              updatedProduct.status === "Active"
                                ? "bg-green-600 text-white"
                                : ""
                            }`}
                          >
                            Active
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setUpdatedProduct({
                                ...updatedProduct,
                                status: "Inactive",
                              })
                            }
                            className={`w-20 px-2 py-1 rounded-md focus:outline-none  placeholder:text-sm placeholder:font-light ${
                              updatedProduct.status === "Inactive"
                                ? "bg-yellow-600 text-white"
                                : ""
                            }`}
                          >
                            Inactive
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          Discount : {product.discount}
                        </label>
                        <input
                          type="number"
                          name="discount"
                          placeholder={`Change ${product.discount}`}
                          onChange={handleChange}
                          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none  placeholder:text-sm placeholder:font-light"
                        />
                      </div>
                    </div>

                    <div className="w-[50%] border-l p-3">
                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          Description
                        </label>
                      </div>
                      <div>
                      <textarea
                          name="description"
                          placeholder={`Change ${product.description}`}
                          onChange={handleChange}
                          className="border w-full h-[50vh] max-h-[50vh] focus:outline-none p-3"
                        ></textarea>
                      </div>
                    </div>

                    <div className="w-[50%] border-l p-3">
                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          Image
                        </label>
                        <input
                          type="file"
                          name="image"
                          onChange={handleChange}
                          className="w-full px-3 py-2 mt-1 border text-sm border-gray-300 rounded-md cursor-pointer placeholder:text-sm placeholder:font-light"
                        />
                        <div className="h-[50vh] flex justify-center">
                          {updatedProduct.image && (
                            <img
                              src={updatedProduct.image}
                              alt="Product Preview"
                              className="mt-4 w-[300px] h-[300px] object-contain"
                            />
                          )}
                        </div>
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

export default TheUpdateModal;
