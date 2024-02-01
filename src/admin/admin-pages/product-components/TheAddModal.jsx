import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoClose } from "react-icons/io5";
import { getAccessToken } from "../../../services/localStorage";
import { apiConfig } from "../../../services/api/config";

function TheAddModal({ closeModal }) {
  const [isChecked, setIsChecked] = useState(true);
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("");

  const toggleBackgroundColor = isChecked ? "bg-green-600" : "bg-gray-200";

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  const handleSeasonChange = (event) => {
    const selectedSeasonId = event.target.value;
    console.log("selectedSeason", selectedSeasonId);
    setSelectedSeason(selectedSeasonId);
  };
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    viewCount: "",
    status: "Active",
    discount: "",
    image: null,
    imageUrl: "",
    isEcoFriendly: "",
    season: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    category: "",
    price: "",
    viewCount: "",
    status: "",
    discount: "",
  });

  const getSeasons = async () => {
    try {
      const {
        data: { seasons },
      } = await axios.get(`${apiConfig.baseUrl}season`);
      setSeasons(seasons);
    } catch (error) {
      setError("Error fetching seasons");
    }
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
      imageUrl: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: value ? "" : `Field "${name}" is empty`,
    });
  };
  const [formError, setFormError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = [
      "name",
      "category",
      "description",
      "price",
      "viewCount",
      "status",
      "discount",
    ];

    const hasEmptyField = requiredFields.some((field) => !formData[field]);

    if (hasEmptyField || !formData.image) {
      setFormError("Please fill in all required fields and select an image.");
      return;
    }

    try {
      const formDataToSend = new FormData();

      formDataToSend.append("name", formData.name);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("category", formData.category);
      formDataToSend.append("price", parseFloat(formData.price));
      formDataToSend.append("isFeatured", true);
      formDataToSend.append("status", formData.status);
      formDataToSend.append("viewCount", parseInt(formData.viewCount));
      formDataToSend.append("discount", formData.discount);
      formDataToSend.append("isEcoFriendly", isChecked);
      formDataToSend.append("seasonId", selectedSeason);

      if (formData.image) {
        formDataToSend.append("image", formData.image);
      }

      await axios.post(
        "http://localhost:4000/api/v1/product/",
        formDataToSend,
        {
          headers: {
            authorization: `Bearer ${getAccessToken()}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      closeModal();
      setFormError("");
      setFormData({
        name: "",
        category: "",
        price: "",
        description: "",
        viewCount: "",
        status: "",
        discount: "",
        image: null,
        imageUrl: "",
      });
      window.location.reload();
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  useEffect(() => {
    getSeasons();
  });
  return (
    <div className="fixed inset-0  z-50 w-[100%] flex items-center justify-end">
      <div className="bg-white rounded-lg p-8 pt-4 w-[81%] h-[80vh] mr-9 mt-14 shadow-custom-shadow">
        <div className="flex justify-end">
          <button onClick={closeModal} title="Close">
            <IoClose className="text-2xl " />
          </button>
        </div>
        <div className="flex justify-between flex-col">
          <p className="">
            {formError && (
              <p className="text-red-600 text-sm mb-4 fixed -mt-6">
                <span>{formError}</span>
              </p>
            )}
          </p>
          <h2 className="text-xl font-bold mb-4">Add New Product</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-1 border">
            <div className="w-[35%] border-r p-3">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-1 text-sm">
                  Product Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-3">
                <div className="flex flex-col">
                  <label htmlFor="category" className="mb-1 text-sm">
                    Product Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-2 focus:outline-none"
                  >
                    <option value="">Choose category</option>
                    <option value="mens">Mens</option>
                    <option value="womens">Womens</option>
                    <option value="kids">Kids</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="category" className="mb-1 text-sm ml-1">
                    Season
                  </label>
                  <select
                    id="season"
                    name="season"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none"
                    onChange={handleSeasonChange}
                    value={selectedSeason}
                  >
                    <option value="">Choose season</option>
                    {seasons.map((season) => (
                      <option key={season.id} value={season.id}>
                        {season.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="viewCount" className="mb-1 text-sm">
                  Quantity
                </label>
                <input
                  type="number"
                  id="viewCount"
                  name="viewCount"
                  value={formData.viewCount}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2  focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="price" className="mb-1 text-sm">
                  Amount
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  step="any"
                  className="border border-gray-300 rounded-md p-2  focus:outline-none mb-1"
                />
              </div>

              <div className="flex items-center gap-3 mt-2 mb-2">
                <div>
                  <label htmlFor="status" className="mb-1 text-sm">
                    Status:
                  </label>
                </div>
                <div className="flex gap-5 ml-5">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, status: "Active" })
                    }
                    className={`text-sm border rounded-md px-2 py-1  focus:outline-none ${
                      formData.status === "Active"
                        ? "bg-green-600 text-white"
                        : ""
                    }`}
                  >
                    Active
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, status: "Inactive" })
                    }
                    className={`text-sm border rounded-md px-2 py-1  focus:outline-none ${
                      formData.status === "Inactive"
                        ? "bg-yellow-600 text-white"
                        : ""
                    }`}
                  >
                    Inactive
                  </button>
                </div>
              </div>
              <div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleToggle}
                    className="sr-only peer"
                  />
                  <div
                    className={`w-11 h-6 ${toggleBackgroundColor} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}
                  ></div>
                  <span className="ms-3 text-sm font-medium text-gray-900 ">
                    Echo
                  </span>
                </label>
              </div>

              <div className="flex flex-col">
                <label htmlFor="discount" className="mb-1 text-sm">
                  Discount
                </label>
                <input
                  type="number"
                  id="discount"
                  name="discount"
                  value={formData.discount}
                  onChange={handleChange}
                  step="any"
                  className="border border-gray-300 rounded-md p-2  focus:outline-none"
                />
              </div>
            </div>

            <div className="w-[70%] flex justify-between px-8">
              <div className="border-l">
                <div className="w-[100%] p-3">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Description
                    </label>
                  </div>

                  <div>
                    <textarea
                      name="description"
                      placeholder={`Change `}
                      onChange={handleChange}
                      className="border w-full h-[40vh] max-h-[40vh] focus:outline-none p-3"
                    ></textarea>
                  </div>
                </div>
                <div>
                  <div className="px-5 flex justify-center items-center gap-4">
                    <label htmlFor="image" className="mb-1 text-sm">
                      Select Image
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      onChange={handleImageChange}
                      className="border border-gray-200 rounded-md p-2 text-xs cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <div className="mt-10">
                    {formData.imageUrl && (
                      <div className="h-full">
                        <img
                          src={formData.imageUrl}
                          alt="Selected Image"
                          className="max-w-[300px] max-h-[300px]"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-admin-blue hover:bg-blue-800 text-white py-2 px-4 rounded-md transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TheAddModal;
