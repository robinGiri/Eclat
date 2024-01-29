import React, { useState, useEffect } from "react";
import "./TheRecentInvoice.css";
import { IoFilterSharp } from "react-icons/io5";
import { MdEdit, MdDelete } from "react-icons/md";
import { HiMiniEye } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa6";
import axios from "axios";
import TheImageMagnifier from "./TheImageMagnifier";
import TheViewModal from "./TheViewModal";
import TheDeleteConfirm from "./TheDeleteConfirm";
import TheUpdateModal from "./TheUpdateModal";
import TheAddModal from "./TheAddModal";
import TheFilterModal from "./TheFilterModal";

const API = "http://localhost:4000/api/v1/product/";
const staticAPI = "http://localhost:4000/api/v1/uploads/";

function TheRecentInvoice() {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [isError, setIsError] = useState("");
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedViewProduct, setSelectedViewProduct] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEditProduct, setSelectedEditProduct] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const handleDelete = async (productId) => {
    try {
      const response = await axios.delete(`${API}${productId}`);
      if (response.status === 200) {
        const updatedProducts = products.filter(
          (item) => item.id !== productId
        );
        setProducts(updatedProducts);
        console.log("Product deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting product: ", error);
      console.error("Server error message: ", error.response?.data?.message);
      setIsError("Error deleting product");
    }
  };

  const handleEdit = async (updatedProduct) => {
    try {
      const response = await axios.put(
        `${API}${updatedProduct.id}`,
        updatedProduct
      );
      if (response.status === 200) {
        const updatedProducts = products.map((item) =>
          item.id === updatedProduct.id ? updatedProduct : item
        );
        setProducts(updatedProducts);
        console.log("Product updated successfully");
        console.log("Updated product:", response.data);
      }
    } catch (error) {
      console.error("Error editing product: ", error);
      console.error("Server error message: ", error.response?.data?.message);
      setIsError("Error editing product");
    }
  };

  const getApiData = async () => {
    try {
      const resp = await axios.get(API);
      console.log(resp.data);
      const apiProducts = resp.data.result;
      setProducts(apiProducts);
      setOriginalProducts(apiProducts);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsError("Error fetching data");
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const openViewModal = (product) => {
    setSelectedViewProduct(product);
    setIsViewModalOpen(true);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedViewProduct(null);
  };

  const openConfirmation = (productId) => {
    setDeleteProductId(productId);
    setShowConfirmation(true);
  };

  const cancelConfirmation = () => {
    setDeleteProductId(null);
    setShowConfirmation(false);
  };

  const openEditModal = (product) => {
    setSelectedEditProduct(product);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedEditProduct(null);
    setIsEditModalOpen(false);
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };
  const openFilterModal = () => {
    setIsFilterModalOpen(true);
  };
  const closeFilterModal = () => {
    setIsFilterModalOpen(false);
  };
  const applyFilter = async (minPrice, maxPrice, discount) => {
    try {
      let filteredProducts;

      if (discount) {
        filteredProducts = originalProducts.filter(
          (item) =>
            item.price >= minPrice &&
            item.price <= maxPrice &&
            item.discount <= discount
        );
      } else {
        filteredProducts = originalProducts.filter(
          (item) => item.price >= minPrice && item.price <= maxPrice
        );
      }

      setProducts(filteredProducts);
    } catch (error) {
      console.error("Error applying filter: ", error);
      console.error("Server error message: ", error.response?.data?.message);
      setIsError("Error applying filter");
    }
  };

  return (
    <div className="bg-white border-2 border-white rounded-2xl w-[90%] mt-5 mx-12 shadow-custom-shadow">
      <div className="flex justify-between m-5 my-5">
        <div>
          <p className="text-xl font-bold">Recent Invoice</p>
        </div>
        <div className="flex gap-5">
          <button
            className="bg-black text-white p-1 px-2 rounded-md cursor-pointer flex items-center gap-1"
            onClick={openAddModal}
          >
            Add
            <FaPlus />
          </button>
          <button
            className="bg-black text-white p-1 px-2 rounded-md cursor-pointer flex items-center gap-1"
            onClick={() => openFilterModal()}
          >
            Filter
            <IoFilterSharp />
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center text-sm mt-14">
        <div className="w-[100%] pb-5">
          <div className="max-h-[28rem] custom-scroll">
            <table className="w-full">
              <thead className="sticky top-0 bg-white z-10">
                <tr>
                  <th className="px-6 w-36 text-left font-light">Product Id</th>
                  <th className="px-6 w-36 text-left font-light">
                    Product Name
                  </th>
                  <th className="px-6 w-36 text-left font-light">
                    Product category
                  </th>
                  <th className="px-6 w-36 text-left font-light">Quantity</th>
                  <th className="px-6 w-36 text-left font-light">Amount</th>
                  <th className="px-6 w-36 text-left font-light">Image</th>
                  <th className="px-6 w-36 text-left font-light">Status</th>
                  <th className="px-6 w-36 text-left font-light">Discount</th>
                  <th className="px-10 w-32 text-left font-light">Action</th>
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
                      <td className="px-6 w-36">{item.category}</td>
                      <td className="px-6 w-36">{item.viewCount}</td>
                      <td className="px-6 w-36">${item.price}</td>
                      <td className="px-6 w-44">
                        {item.images.map((image) => (
                          <div
                            key={image.id}
                            className="w-[85px] h-[105px] -ml-2"
                          >
                            <TheImageMagnifier
                              imageUrl={staticAPI + image.url}
                            />
                          </div>
                        ))}
                      </td>
                      <td className="px-6 w-44">
                        <span
                          className={`text-[40px] mr-1 ${
                            item.status === "Active"
                              ? "text-green-600"
                              : "text-yellow-600"
                          }`}
                        >
                          .
                        </span>
                        {item.status}
                      </td>
                      <td className="px-6">{item.discount}%</td>
                      <td className="px-6 flex justify-center items-center h-[7rem] -ml-2">
                        <div className="flex gap-3">
                          <button
                            className="td-button"
                            title="View"
                            onClick={() => openViewModal(item)}
                          >
                            <HiMiniEye />
                          </button>
                          <button
                            className="td-button"
                            title="Delete"
                            onClick={() => openConfirmation(item.id)}
                          >
                            <MdDelete />
                          </button>
                          <button
                            className="td-button"
                            title="Edit"
                            onClick={() => openEditModal(item)}
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
      {isViewModalOpen && selectedViewProduct && (
        <TheViewModal
          product={selectedViewProduct}
          closeModal={closeViewModal}
        />
      )}
      {showConfirmation && (
        <TheDeleteConfirm
          handleDelete={handleDelete}
          productId={deleteProductId}
          onCancel={cancelConfirmation}
        />
      )}
      {isEditModalOpen && selectedEditProduct && (
        <TheUpdateModal
          product={selectedEditProduct}
          closeModal={closeEditModal}
          handleEdit={handleEdit}
        />
      )}
      {isAddModalOpen && <TheAddModal closeModal={closeAddModal} />}
      {isFilterModalOpen && (
        <TheFilterModal
          closeModal={closeFilterModal}
          applyFilter={applyFilter}
        />
      )}
    </div>
  );
}

export default TheRecentInvoice;
