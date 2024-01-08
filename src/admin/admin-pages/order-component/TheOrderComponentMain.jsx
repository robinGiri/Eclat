import React, { useState, useEffect } from "react";
import "../../admin-pages/user-components/TheUserRecentInvoice.css";
import { IoFilterSharp } from "react-icons/io5";
import { HiMiniEye } from "react-icons/hi2";
import axios from "axios";
import TheOrderComponentView from "./TheOrderComponentView";
import { apiConfig } from "../../../services/api/config";
import TheImageMagnifier from "../product-components/TheImageMagnifier";

const staticAPI = "http://localhost:4000/api/v1/uploads/";
function TheOrderComponentMain() {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState("");
  const [isOrderViewModalOpen, setIsOrderViewModalOpen] = useState(false);
  const [selectedOrderView, setSelectedOrderView] = useState(null);

  const getApiData = async () => {
    try {
      const { data } = await axios.get(`${apiConfig.baseUrl}shipping/`);
      console.log(data);
      setProducts(data.shipping);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsError("Error fetching data");
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const openUserViewModal = (product) => {
    setSelectedOrderView(product);
    setIsOrderViewModalOpen(true);
  };

  const closeUserViewModal = () => {
    setIsOrderViewModalOpen(false);
    setSelectedOrderView(null);
  };

  return (
    <div className="bg-white border-2 border-white rounded-2xl w-[90%] mt-5 mx-12 shadow-custom-shadow">
      <div className=" flex justify-between items-center m-5 my-5">
        <p className="text-xl font-bold">Ordered Items</p>
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
                  <th className="px-6 w-36 text-left font-light">
                    Shipping Id
                  </th>
                  <th className="px-6 w-36 text-left font-light">Order Id</th>
                  <th className="px-6 w-36 text-left font-light">Product Id</th>
                  <th className="px-6 w-36 text-left font-light">
                    Product Image
                  </th>
                  <th className="px-6 w-36 text-left font-light">Quantity</th>
                  <th className="px-6 w-36 text-left font-light">Price</th>
                  <th className="px-6 w-36 text-left font-light">
                    Payment Method
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
                      <td className="px-6 py-12">{item?.id}</td>
                      <td className="px-6 w-36">{item?.Order?.id}</td>
                      <td className="px-6 w-36">
                        {item?.Order?.OrderItems[0]?.productId}
                      </td>
                      <td className="px-6 w-36">
                        {item?.Order?.OrderItems?.[0]?.product?.images?.map(
                          (image) => (
                            <div
                              key={image.id}
                              className="w-[80px] h-[105px] -ml-2"
                            >
                              <TheImageMagnifier
                                imageUrl={staticAPI + image.url}
                              />
                            </div>
                          )
                        )}
                      </td>
                      <td className="px-6 w-36">
                        {item?.Order?.OrderItems[0]?.quantity}
                      </td>
                      <td className="px-6 w-44">
                        Rs.{item?.Order?.OrderItems[0]?.product?.afterdiscount}
                      </td>
                      <td className="px-6 w-44">
                        {item?.Purchase?.paymentmethod}
                      </td>
                      <td className="px-6 w-44">
                        <span
                          className={`text-[40px] mr-1 ${
                            item.status === "ordered"
                              ? "text-green-600"
                              : "text-yellow-600"
                          }`}
                        >
                          .
                        </span>
                        {item?.status}
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
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {isOrderViewModalOpen && selectedOrderView && (
        <TheOrderComponentView
          product={selectedOrderView}
          closeModal={closeUserViewModal}
        />
      )}
    </div>
  );
}

export default TheOrderComponentMain;
