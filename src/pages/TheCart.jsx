import React, { useEffect, useState } from "react";
import TheCartAmountToogle from "../components/checkout/TheCartAmountToogle";
import { IoChevronBackOutline } from "react-icons/io5";
import { PiTrashLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import axios from "axios";
import { apiConfig } from "../services/api/config";
import { useNavigate } from "react-router-dom";
import "./TheCart.css";
import TheCartProceedToCheckout from "../components/checkout/TheCartProceedToCheckout";
import TheCartPlaceOrder from "../components/checkout/TheCartPlaceOrder";

function TheCart() {
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const getCardData = async () => {
    try {
      const response = await axios.get(`${apiConfig.baseUrl}cart/1`);
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
      const cartResponse = await axios.get(`${apiConfig.baseUrl}cart/1`);
      const cart = cartResponse.data.message;
      const cartItemToDelete = cart.cartItems.find(
        (item) => item.productId === productId
      );
      if (cartItemToDelete) {
        const cartItemIdToDelete = cartItemToDelete.id;
        const response = await axios.delete(
          `${apiConfig.baseUrl}cartitem/${cartItemIdToDelete}`
        );
        await getCardData();
      } else {
        console.log(`Product with productId ${productId} not found in cart.`);
      }
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

  const handleDecrease = async (productId) => {
    const updatedProducts = cartProducts.map((product) => {
      if (product.result[0].id === productId) {
        const newQuantity = Math.max(product.quantity - 1, 1);
        updateCartItemQuantity(productId, newQuantity);
        return { ...product, quantity: newQuantity };
      }
      return product;
    });

    setCartProducts(updatedProducts);
  };
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleIncrease = async (productId) => {
    const updatedProducts = cartProducts.map((product) => {
      if (product.result[0].id === productId) {
        const newQuantity = product.quantity + 1;
        updateCartItemQuantity(productId, newQuantity);
        return { ...product, quantity: newQuantity };
      }
      return product;
    });

    setCartProducts(updatedProducts);
  };

  const updateCartItemQuantity = async (productId, newQuantity) => {
    try {
      const cartResponse = await axios.get(`${apiConfig.baseUrl}cart/1`);
      const cart = cartResponse.data.message;
      const cartItemToUpdate = cart.cartItems.find(
        (item) => item.productId === productId
      );

      if (cartItemToUpdate) {
        const cartItemId = cartItemToUpdate.id;
        const response = await axios.put(
          `${apiConfig.baseUrl}cartitem/${cartItemId}`,
          { quantity: newQuantity }
        );
        const updatedCartItem = response.data.cartItem;
        setCartProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === productId
              ? { ...product, quantity: newQuantity }
              : product
          )
        );
      } else {
        console.error(`Cart item with productId ${productId} not found.`);
      }
    } catch (error) {
      console.error("Error updating cart item quantity:", error);
      setIsError(true);
    }
  };

  const calculateProductTotal = (product) => {
    return product.result[0].afterdiscount * product.quantity;
  };

  const calculateOverallTotal = () => {
    return cartProducts.reduce((total, product) => {
      return total + calculateProductTotal(product);
    }, 0);
  };

  const getMonthName = (month) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return monthNames[month];
  };

  const calculateEarliestDeliveryDate = () => {
    const currentDate = new Date();
    const earliestDeliveryDate = new Date(currentDate);
    earliestDeliveryDate.setDate(currentDate.getDate() + 5);
    const year = earliestDeliveryDate.getFullYear();
    const month = getMonthName(earliestDeliveryDate.getMonth());
    const day = String(earliestDeliveryDate.getDate()).padStart(2, "0");
    return `${month} ${day}, ${year}`;
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      const allProductIds = cartProducts.map((product) => product.result[0].id);
      setSelectedProducts(allProductIds);
    } else {
      setSelectedProducts([]);
    }
  };

  const handleSelectProduct = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts((prevSelected) =>
        prevSelected.filter((id) => id !== productId)
      );
    } else {
      setSelectedProducts((prevSelected) => [...prevSelected, productId]);
    }
    const allProductIds = cartProducts.map((product) => product.result[0].id);
    setSelectAll(allProductIds.length === selectedProducts.length + 1);
  };

  const handleDeleteSelected = async () => {
    for (const productId of selectedProducts) {
      await handleDelete(productId);
    }
    setSelectedProducts([]);
    setSelectAll(false);
  };

  return (
    <div className="flex gap-2 mt-14 bg-zinc-50">
      <div className="w-[10%] flex justify-end mt-9">
        <div className="flex justify-center items-center h-[4vh] gap-1">
          <IoChevronBackOutline
            className="cursor-pointer text-gray-700 hover:text-green-500 text-lg"
            onClick={goBack}
          />
        </div>
      </div>
      <div className="flex py-5 gap-2 flex-wrap bg-zinc-100 w-[80%] text-sm">
        <div className="w-[63%] p-2">
          <div className="flex justify-between items-center bg-white">
            <div className="flex items-center p-2 gap-2 relative">
              <input
                type="checkbox"
                className="h-4 w-4"
                checked={selectAll}
                onChange={() => handleSelectAll()}
              />
              <p>SELECT ALL</p>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-red-500">
              <div>
                <PiTrashLight className="text-2xl" />
              </div>
              <div className="mr-2" onClick={() => handleDeleteSelected()}>
                Delete
              </div>
            </div>
          </div>
          <div>
            <div className=" max-h-[34rem] custom-scroll">
              {cartProducts.map((product) => (
                <div key={product.result[0].id}>
                  <div className="w-full">
                    <div className="mt-4 bg-white w-full">
                      <div>
                        <div className="border-b-2 mb-2 p-2">
                          <div className="flex items-center gap-2 pt-2 pb-2">
                            <input
                              type="checkbox"
                              className="h-4 w-4"
                              checked={selectedProducts.includes(product.result[0].id)}
                              onChange={() => handleSelectProduct(product.result[0].id)}
                            />
                            <p>boAt {">"}</p>
                          </div>
                          <div className="flex justify-between">
                            <div className="w-[40%] flex justify-end">
                              <p className="text-xs text-gray-700">
                                Yay! Enjoy free shipping with specific products
                              </p>
                            </div>
                            <p className="text-[12px] text-gray-700">
                              Earliest Delivery:{" "}
                              {calculateEarliestDeliveryDate()}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex bg-white justify-between gap-3 flex-wrap p-2 pb-5">
                        <div className="flex flex-wrap">
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              className="h-4 w-4"
                              checked={selectedProducts.includes(product.result[0].id)}
                              onChange={() => handleSelectProduct(product.result[0].id)}
                            />
                            {product.result[0].images.map((image) => (
                              <div
                                key={image.id}
                                className="w-[150px] h-[150px] mr-2 flex justify-center items-center"
                              >
                                <img
                                  src={
                                    `${apiConfig.baseUrl}uploads/` + image.url`
                                  }
                                  alt={`Image ${image.id}`}
                                />
                              </div>
                            ))}
                          </div>
                          <div className="flex flex-col pt-4">
                            <p className="text-[13px]">
                              {product.result[0].name}
                            </p>
                            <p className="text-[13px] text-gray-600">
                              Boat, Color Family: Beige
                            </p>
                          </div>
                        </div>
                        <div className="w-[50%] px-[5%]">
                          <div className="flex pt-4 flex-wrap gap-20">
                            <div className="flex flex-col gap-2">
                              <p>${product.result[0].afterdiscount}</p>
                              <p className="line-through text-slate-500">
                                ${product.result[0].price}
                              </p>
                              <p>{product.result[0].discount}%</p>
                              <div className="flex gap-1">
                                <PiTrashLight
                                  className="text-xl cursor-pointer hover:text-red-500"
                                  onClick={() =>
                                    handleDelete(product.result[0].id)
                                  }
                                />
                              </div>
                            </div>
                            <div>
                              <TheCartAmountToogle
                                productId={product.result[0].id}
                                amount={product.quantity}
                                setDecrease={handleDecrease}
                                setIncrease={handleIncrease}
                              />
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

        <div className="bg-white w-[35%] h-[40vh] mt-2">
          <TheCartProceedToCheckout total={calculateOverallTotal()} />
        </div>
      </div>
    </div>
  );
}

export default TheCart;
