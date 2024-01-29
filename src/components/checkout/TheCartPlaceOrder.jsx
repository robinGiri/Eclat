import React, { useState, useEffect } from "react";
import { HiOutlineTicket } from "react-icons/hi2";
import { RiArrowRightSLine } from "react-icons/ri";
import TheCartPlaceOrderCheckout from "./TheCartPlaceOrderCheckout";
import TheAddressForm from "./TheAddressForm";
import axios from "axios";
import { getAccessToken } from "../../services/localStorage";
import { apiConfig } from "../../services/api/config";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function TheCartPlaceOrder() {
  let products = [];
  const [cartId, setCartId] = useState(0);
  const [userId, setUserId] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const getCardData = async () => {
    try {
      const userData = getAccessToken("user");
      const { Cart, id } = JSON.parse(userData);
      setUserId(id);
      setCartId(Cart.id);
      const response = await axios.get(`${apiConfig.baseUrl}cart/${cartId}`);
      const { data } = response;

      if (data && data.message && Array.isArray(data.message.cartItems)) {
        const productIds = data.message.cartItems.map((item) => item.productId);
        const productDetailsPromises = productIds.map(async (productId) => {
          try {
            const productResponse = await axios.get(
              `${apiConfig.baseUrl}product/${productId}`
            );
            const productData = productResponse.data;
            const cartItem = data.message.cartItems.find(
              (item) => item.productId === productId
            );
            return {
              ...productData,
              quantity: cartItem ? cartItem.quantity : 0,
            };
          } catch (productError) {
            console.error(
              "Error fetching product details",
              productId,
              ":",
              productError
            );
            return null;
          }
        });

        const productDetailsArray = await Promise.all(productDetailsPromises);
        setCartProducts(productDetailsArray);
        console.log("cart items", productDetailsArray);
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

  const calculateProductTotal = (product) => {
    return product.result[0].afterdiscount * product.quantity;
  };

  const calculateOverallTotal = () => {
    return cartProducts.reduce((total, product) => {
      return total + calculateProductTotal(product);
    }, 0);
  };

  return (
    <div className="pt-10 w-full flex gap-2 justify-center">
      <div className="w-[3rem] -ml-[5rem] flex justify-end items-center h-[5vh]">
        <Link to="/cart">
          <IoChevronBackOutline className="text-lg hover:text-green-500 cursor-pointer" />
        </Link>
      </div>
      <div className="flex py-5 w-[82%] h-[80vh] gap-2 flex-wrap">
        <div className="w-[63%] p-2 border border-white shadow-custom-shadow">
          <div className="flex justify-center items-center border border-white h-[15%] rounded-lg shadow-custom-shadow">
            <p className="text-sky-800 font-semibold cursor-pointer">
              + Add New Delivery Address
            </p>
          </div>
          <div>
            <div className="max-h-[30rem] mt-3 custom-scroll">
              {cartProducts.map((product) => (
                <div key={product.result[0].id}>
                  {products.push({
                    name: product.result[0].name,
                    price: product.result[0].price,
                  })}
                  <div className="w-full bg-white mb-5 rounded-lg border border-white shadow-custom-shadow">
                    <div className="mt-4 bg-white w-full">
                      <div>
                        <div className="pt-4 pl-8">
                          <div className="flex items-center gap-2 pt-2 pb-2">
                            <p>boAt</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex bg-white justify-between gap-3 flex-wrap pl-6">
                        <div className="flex flex-wrap">
                          <div className="flex items-center gap-2">
                            {product.result[0].images.map((image) => (
                              <div
                                key={image.id}
                                className="w-[120px] h-[120px] p-2"
                              >
                                <img
                                  src={
                                    `${apiConfig.baseUrl}uploads/` + image.url
                                  }
                                  alt={`Image ${image.id}`}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="flex flex-col gap-3 pt-4 pl-2">
                            <p className="font-semibold">
                              {product.result[0].name}
                            </p>
                            <p className="text-xs text-gray-500 font-semibold">
                              Boat, Color Family: Beige
                            </p>
                            <p className="text-xs text-sky-800 pt-3">
                              <span className="border border-sky-800 p-1 rounded">
                                Free Delivery
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="w-[60%] px-[5%] flex flex-wrap">
                          <div className="w-[100%] flex  gap-20 h-full items-center">
                            <div className="flex justify-between w-full flex-wrap">
                              <div className="w-[35%] flex justify-end">
                                <p className="text-sm font-semibold">
                                  Qty.{product.quantity}
                                </p>
                              </div>
                              <div className="flex flex-wrap gap-3">
                                <div className="flex items-center gap-5 px-2 rounded-sm bg-gray-10">
                                  <div className="line-through text-gray-400 text-xs font-semibold">
                                    ${product.result[0].price}
                                  </div>
                                  <div className="text-gray-400 text-xs font-semibold">
                                    {product.result[0].discount}%
                                  </div>
                                </div>
                                <div className="flex items-center">
                                  <p className="font-semibold text-gray-800 text-sm">
                                    ${product.result[0].afterdiscount}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" flex justify-center pt-4 bg-white">
                      <div className="border w-[92%]"></div>
                    </div>
                    <div className="pl-8 pt-5 bg-white">
                      <div className="border w-[38%] p-3 border-sky-700 flex flex-col items-center rounded-md">
                        <p className="text-sky-700 text-sm font-semibold">
                          Standard Delivery | FREE{" "}
                          <span className="text-gray-400 line-through">
                            $120
                          </span>
                        </p>
                        <p className="text-sm font-semibold text-gray-600">
                          Receive by 19 Dec -20 Dec
                        </p>
                      </div>
                    </div>
                    <div className="pl-8 pt-1 mt-4 flex justify-between mr-9 pb-7 bg-white">
                      <div className="border w-[75%] flex p-6 justify-between rounded-md bg-white flex-wrap">
                        <p className="font-semibold text-sm text-gray-800 flex items-center gap-1">
                          <HiOutlineTicket className="text-xl text-yellow-600 mt-[0.1rem]" />
                          Store Voucher
                        </p>
                        <p className="font-semibold text-sm text-gray-800 flex items-center gap-1 cursor-pointer">
                          Get Voucher{" "}
                          <RiArrowRightSLine className="text-2xl mt-1 text-gray-400" />
                        </p>
                      </div>
                      <div className="w-[20%] flex flex-col items-end justify-center flex-wrap">
                        <p className="text-sm font-semibold">
                          Subtotal:{" "}
                          <span>
                            $
                            {product.result[0].afterdiscount * product.quantity}
                          </span>
                        </p>
                        <p className="text-sm font-semibold text-gray-400">
                          Saved $
                          {(product.result[0].price -
                            product.result[0].afterdiscount) *
                            product.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white w-[35%] h-[46%] mt-2">
          <TheCartPlaceOrderCheckout total={calculateOverallTotal()} />
        </div>
      </div>
      {isModalOpen && <TheAddressForm onClose={handleModalToggle} />}
    </div>
  );
}

export default TheCartPlaceOrder;
