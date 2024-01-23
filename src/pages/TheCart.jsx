import React, { useEffect, useState } from "react";
import TheCartAmountToogle from "../components/checkout/TheCartAmountToogle";
import { IoArrowBackSharp } from "react-icons/io5";
import { PiTrashLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import axios from "axios";
import { apiConfig } from "../services/api/config";
import { useNavigate } from "react-router-dom";
import "./TheCart.css";
import TheCartProceedToCheckout from "../components/checkout/TheCartProceedToCheckout";

const staticAPI = "http://localhost:4000/api/v1/uploads/";

function TheCart() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getCardData = async () => {
    try {
      const response = await axios.get(`${apiConfig.baseUrl}cart/1`);
      const { data } = response;

      if (data && data.message && Array.isArray(data.message.cartItems)) {
        setCartProducts(data.message.cartItems);
      } else {
        console.error("Invalid response format:", data);
      }
    } catch (error) {
      console.error("Error fetching card data:", error);
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (productId) => {
    try {
      const response = await axios.delete(
        `${apiConfig.baseUrl}cartitem/${productId}`
      );
      console.log("Product deleted:", response.data);

      const updatedCartResponse = await axios.get(`${apiConfig.baseUrl}cart/1`);
      const updatedCartData = updatedCartResponse.data.message.cartItems;

      setCartProducts(updatedCartData);
    } catch (error) {
      console.error("Error deleting product: ", error);
      console.error("Server error message: ", error.response?.data?.message);
      setIsError(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getCardData();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex gap-2 mt-14">
      <div className="w-[10%] flex justify-end mt-9">
        <div className="flex justify-center items-center h-[4vh] gap-1">
          <IoArrowBackSharp className="cursor-pointer" />
          <button onClick={goBack}>Back</button>
        </div>
      </div>
      <div className="flex py-5 gap-2 flex-wrap bg-neutral-100 w-[80%]">
        <div className="w-[63%] p-2">
          <div className="flex justify-between items-center bg-white">
            <div className="flex items-center p-2 gap-2 relative">
              <input type="checkbox" className="h-4 w-4" />
              <p>SELECT ALL</p>
            </div>
            <div className="flex gap-1 cursor-pointer hover:text-orange-600">
              <div>
                <PiTrashLight className="text-2xl" />
              </div>
              <div className="mr-2">Delete</div>
            </div>
          </div>
          <div>
            <div className=" max-h-[34rem] custom-scroll">
            {cartProducts.map((product) => (

                  <div key={product.id}>
                    <div className="w-full">
                      <div className="mt-4 bg-white w-full">
                        <div>
                          <div className="border-b-2 mb-2 p-2">
                            <div className="flex items-center gap-2 pt-2 pb-2">
                              <input type="checkbox" className="h-4 w-4" />
                              <p>boAt {">"}</p>
                            </div>
                            <div className="flex justify-between">
                              <div className="w-[40%] flex justify-end">
                                <p className="text-xs text-gray-700">
                                  Yay! Enjoy free shipping with specific
                                  products
                                </p>
                              </div>
                              <p className="text-sm text-gray-700">
                                Earliest Delivery: 19 Dec
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex bg-white justify-between gap-3 flex-wrap p-2">
                          <div className="flex flex-wrap">
                            <div className="flex items-center gap-2">
                              <input type="checkbox" className="h-4 w-4" />
                              {product?.product?.images.map((image) => (
                                <div
                                  key={image.id}
                                  className="w-[150px] h-[150px] p-2"
                                >
                                  <img
                                    src={staticAPI + image?.url}
                                    alt={`Image ${image.id}`}
                                  />
                                </div>
                              ))}
                            </div>
                            <div className="flex flex-col pt-4">
                              <p>{product?.product?.name}</p>
                              <p className="text-sm font-light">
                                Boat, Color Family: Beige
                              </p>
                            </div>
                          </div>
                          <div className="w-[50%] px-[5%]">
                            <div className="flex pt-4 flex-wrap gap-20">
                              <div className="flex flex-col gap-2">
                                <p>${product?.product?.afterdiscount}</p>
                                <p className="line-through text-slate-500">
                                  ${product?.product?.price}
                                </p>
                                <p>{product?.product?.discount}%</p>
                                <div className="flex gap-2">
                                  <CiHeart className="text-xl cursor-pointer" />
                                  <PiTrashLight
                                    className="text-xl cursor-pointer"
                                    onClick={() => handleDelete(product.id)}
                                  />
                                </div>
                              </div>
                              <div>
                                <TheCartAmountToogle
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="bg-white w-[35%] h-[46%] mt-2">
          <TheCartProceedToCheckout />
        </div>
      </div>
    </div>
  );
}

export default TheCart;
