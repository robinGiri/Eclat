import { useEffect, useReducer, useState } from "react";
import products from "../../data/products";
import "../../pages/TheCart.css";
import { HiOutlineTicket } from "react-icons/hi2";
import { RiArrowRightSLine } from "react-icons/ri";
import TheCartPlaceOrderCheckout from "./TheCartPlaceOrderCheckout";
import TheAddressForm from "./TheAddressForm";
import TheOrderTracker from "./TheOrderTracker";

const UPDATE_QUANTITY = "UPDATE_QUANTITY";
const UPDATE_TOTAL = "UPDATE_TOTAL";

const cartReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_QUANTITY:
      const { index, value } = action.payload;
      const newQuantities = [...state.quantities];
      newQuantities[index] = Math.max(1, newQuantities[index] + value);
      return { ...state, quantities: newQuantities };
    case UPDATE_TOTAL:
      return { ...state, total: action.payload };
    default:
      return state;
  }
};

const initialProductSlice = products.slice(0, 8);
const initialQuantities = initialProductSlice.map(() => 1);

function ThOrdered() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalToogle = () => {
    setIsModalOpen(!isModalOpen);
  };
  const initialState = {
    quantities: initialQuantities,
    total: 0,
  };

  const [cartState, dispatch] = useReducer(cartReducer, initialState);
  const { quantities, total } = cartState;

  useEffect(() => {
    let totalPrice = 0;
    for (let i = 0; i < initialProductSlice.length; i++) {
      totalPrice += initialProductSlice[i].afterdiscount * quantities[i];
    }
    dispatch({ type: UPDATE_TOTAL, payload: totalPrice });
  }, [quantities]);

  const updateQuantity = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(1, newQuantities[index] + value);

    if (newQuantities[index] !== quantities[index]) {
      dispatch({
        type: UPDATE_QUANTITY,
        payload: { index, value: newQuantities[index] - quantities[index] },
      });
    }
  };

  return (
    <div className="pt-10 w-full h-[100vh] bg-neutral-100">
      <TheOrderTracker />
      <div className="flex py-5 mx-[9%] gap-2 flex-wrap bg-neutral-100">
        <div className="w-[63%] p-2">
          <div>
            <div className="max-h-[30rem] mt-3 custom-scroll">
              {initialProductSlice.map((product, index) => (
                <div key={product.id}>
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
                            <img
                              src={product.images}
                              className="w-[120px] h-[120px] p-2"
                            />
                          </div>
                          <div className="flex flex-col gap-3 pt-4 pl-2">
                            <p className="font-semibold">{product.name}</p>
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
                                <p className="text-sm font-semibold">Qty:1</p>
                              </div>
                              <div className="flex flex-wrap gap-3">
                                <div className="flex items-center gap-5 px-2 rounded-sm bg-gray-10">
                                  <div className="line-through text-gray-400 text-xs font-semibold">
                                    ${product.price}
                                  </div>
                                  <div className="text-gray-400 text-xs font-semibold">
                                    {product.discount}%
                                  </div>
                                </div>
                                <div className="flex items-center">
                                  <p className="font-semibold text-gray-800">
                                    ${product.afterdiscount}
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThOrdered;
