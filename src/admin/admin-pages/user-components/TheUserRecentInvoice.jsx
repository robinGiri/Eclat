import React, { useState, useEffect } from "react";
import "./TheUserRecentInvoice.css";
import { IoFilterSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { HiMiniEye } from "react-icons/hi2";
import axios from "axios";
import TheUserViewModal from "./TheUserViewModal";
import TheUserUpdateModal from "./TheUserUpdateModal";

const API = "http://localhost:4000/api/v1/user/";

function TheUserRecentInvoice() {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState("");
  const [isUserViewModalOpen, setIsUserViewModalOpen] = useState(false);
  const [selectedUserViewProduct, setSelectedUserViewProduct] = useState(null);
  const [isUserEditModalOpen, setIsUserEditModalOpen] = useState(false);
  const [selectedUserEditProduct, setSelectedUserEditProduct] = useState(null);

  const handleUserEdit = async (updatedProduct) => {
    try {
      const response = await axios.put(
        `${API}/${updatedProduct.email}`,
        updatedProduct
      );

      if (response.status === 200) {
        const updatedUser = response.data.userdetail;

        const updatedProducts = products.map((item) =>
          item.email === updatedUser.email ? updatedUser : item
        );
        setProducts(updatedProducts);

        console.log("User updated successfully");
        console.log("Updated user:", updatedUser);
      }
    } catch (error) {
      console.error("Error editing user: ", error);
      console.error("Server error message: ", error.response?.data?.message);
      setIsError("Error editing user");
    }
  };

  const getApiData = async () => {
    try {
      const {
        data: { users },
      } = await axios.get(API + "users/");
      console.log(users);
      setProducts(users);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsError("Error fetching data");
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const openUserViewModal = (product) => {
    setSelectedUserViewProduct(product);
    setIsUserViewModalOpen(true);
  };

  const closeUserViewModal = () => {
    setIsUserViewModalOpen(false);
    setSelectedUserViewProduct(null);
  };

  const openUserDeleteConfirmation = (productId) => {
    setDeleteUserProductId(productId);
    setShowUserConfirmation(true);
  };

  const cancelUserConfirmation = () => {
    setDeleteUserProductId(null);
    setShowUserConfirmation(false);
  };

  const openUserEditModal = (product) => {
    setSelectedUserEditProduct(product);
    setIsUserEditModalOpen(true);
  };

  const closeUserEditModal = () => {
    setSelectedUserEditProduct(null);
    setIsUserEditModalOpen(false);
  };

  return (
    <div className="bg-white border-2 border-white rounded-2xl w-[90%] mt-5 mx-12 shadow-custom-shadow">
      <div className=" flex justify-between items-center m-5 my-5">
        <p className="text-xl font-bold">Recent Invoice</p>
        <button className="bg-black text-white p-1 px-2 rounded-md cursor-pointer flex items-center gap-1">
          Filter
          <IoFilterSharp />
        </button>
      </div>
      <div className="flex justify-center items-center text-sm mt-14">
        <div className="w-[100%] pb-5">
          <div className="max-h-[28rem] custom-scroll">
            <table className="w-full">
              <thead className="sticky top-0 bg-white z-10">
                <tr>
                  <th className="px-6 w-36 text-left font-light">User Id</th>
                  <th className="px-6 w-36 text-left font-light">User Name</th>
                  <th className="px-6 w-36 text-left font-light">Address</th>
                  <th className="px-6 w-36 text-left font-light">Phone</th>
                  <th className="px-6 w-36 text-left font-light">Email</th>
                  <th className="px-6 w-36 text-left font-light">Role</th>
                  <th className="px-6 w-36 text-left font-light">
                    Last Purchased
                  </th>
                  <th className="px-6 w-36 text-left font-light">Status</th>
                  <th className="px-10 w-36 text-left font-light">Action</th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  Array.isArray(products) &&
                  products.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b-2 font-semibold border-gray-300"
                    >
                      <td className="px-6 py-12">{item.id}</td>
                      <td className="px-6 w-36">{item.name}</td>
                      <td className="px-6 w-36">{item.address}</td>
                      <td className="px-6 w-36">{item.phone}</td>
                      <td className="px-6 w-36">{item.email}</td>
                      <td className="px-6 w-44">{item.role}</td>
                      <td className="px-6 w-44">{item.updatedAt}</td>
                      <td className="px-6 w-44">
                        <span
                          className={`text-[40px] mr-1 ${
                            item.token === null
                              ? "text-yellow-600"
                              : "text-green-600"
                          }`}
                        >
                          .
                        </span>
                        {item.token !== null ? "Active" : "Inactive"}
                      </td>

                      <td className="px-6 flex justify-center items-center h-[7rem] -ml-2">
                        <div className="flex gap-3">
                          <button
                            className="td-button"
                            title="View"
                            onClick={() => openUserViewModal(item)}
                          >
                            <HiMiniEye />
                          </button>
                          <button
                            className="td-button"
                            title="Edit"
                            onClick={() => openUserEditModal(item)}
                          >
                            <MdEdit />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {isUserViewModalOpen && selectedUserViewProduct && (
        <TheUserViewModal
          product={selectedUserViewProduct}
          closeUserModal={closeUserViewModal}
        />
      )}
      {isUserEditModalOpen && selectedUserEditProduct && (
        <TheUserUpdateModal
          product={selectedUserEditProduct}
          closeModal={closeUserEditModal}
          handleUserEdit={handleUserEdit}
        />
      )}
    </div>
  );
}

export default TheUserRecentInvoice;
