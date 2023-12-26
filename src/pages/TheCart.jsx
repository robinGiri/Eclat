import { useState, useEffect, useReducer } from "react";
import products from "../data/products";
import TheCartProceedToCheckout from "../components/checkout/TheCartProceedToCheckout";
import { FaMinus, FaPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { PiTrashLight } from "react-icons/pi";
import "./TheCart.css";

const UPDATE_QUANTITY = "UPDATE_QUANTITY";
const UPDATE_TOTAL = "UPDATE_TOTAL";
const UPDATE_QUANTITIES = "UPDATE_QUANTITIES";

const cartReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_QUANTITY:
      const { index, value } = action.payload;
      const newQuantities = [...state.quantities];
      newQuantities[index] = Math.max(1, newQuantities[index] + value);
      return { ...state, quantities: newQuantities };
    case UPDATE_TOTAL:
      return { ...state, total: action.payload };
    case UPDATE_QUANTITIES:
      return { ...state, quantities: action.payload };
    default:
      return state;
  }
};

const initialProductSlice = products.slice(0, 8);
const initialQuantities = initialProductSlice.map(() => 1);

function TheCart() {
  const [selectAll, setSelectAll] = useState(false);

  const [productCheckboxes, setProductCheckboxes] = useState(
    Array(initialProductSlice.length).fill(false)
  );
  const [cartState, dispatch] = useReducer(cartReducer, {
    quantities: initialQuantities,
    total: 0,
  });

  const { quantities, total } = cartState;

  useEffect(() => {
    let totalPrice = 0;
    for (let i = 0; i < initialProductSlice.length; i++) {
      totalPrice += initialProductSlice[i].afterdiscount * quantities[i];
    }
    dispatch({ type: UPDATE_TOTAL, payload: totalPrice });
  }, [quantities]);

  const handleSelectAllToggle = () => {
    const updatedSelectAll = !selectAll;
    setSelectAll(updatedSelectAll);

    const updatedCheckboxes = new Array(initialProductSlice.length).fill(
      updatedSelectAll
    );
    setProductCheckboxes(updatedCheckboxes);

    const updatedQuantities = updatedCheckboxes.map((isChecked) =>
      isChecked ? 1 : 0
    );
    dispatch({ type: UPDATE_QUANTITIES, payload: updatedQuantities });
  };
  const handleProductCheckboxToggle = (index) => {
    const updatedCheckboxes = [...productCheckboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setProductCheckboxes(updatedCheckboxes);

    const allSelected = updatedCheckboxes.every((isChecked) => isChecked);
    setSelectAll(allSelected);

    const updatedQuantities = updatedCheckboxes.map((isChecked) =>
      isChecked ? 1 : 0
    );
    dispatch({ type: UPDATE_QUANTITIES, payload: updatedQuantities });
  };

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
    <div className="mt-10">
      <div className="flex py-5 mx-[10%] gap-2 flex-wrap bg-neutral-100">
        <div className="w-[63%] p-2">
          <div className="flex justify-between items-center bg-white">
            <div className="flex items-center p-2 gap-2 ">
              <input
                type="checkbox"
                className="h-4 w-4"
                checked={selectAll}
                onChange={handleSelectAllToggle}
              />
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
              {initialProductSlice.map((product, index) => (
                <div key={product.id}>
                  <div className="w-full">
                    <div className="mt-4 bg-white w-full">
                      <div>
                        <div className="border-b-2 mb-2 p-2">
                          <div className="flex items-center gap-2 pt-2 pb-2">
                            <input
                              type="checkbox"
                              className="h-4 w-4"
                              checked={productCheckboxes[index]}
                              onChange={() =>
                                handleProductCheckboxToggle(index)
                              }
                            />
                            <p>boAt {">"}</p>
                          </div>
                          <div className="flex justify-between">
                            <div className="w-[40%] flex justify-end">
                              <p className="text-xs text-gray-700">
                                Yay! Enjoy free shipping with specific proucts
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
                            <input
                              type="checkbox"
                              className="h-4 w-4"
                              checked={productCheckboxes[index]}
                              onChange={() =>
                                handleProductCheckboxToggle(index)
                              }
                            />
                            <img
                              src={product.images}
                              className="w-[150px] h-[150px] p-2"
                            />
                          </div>
                          <div className="flex flex-col pt-4">
                            <p>{product.name}</p>
                            <p className="text-sm font-light">
                              Boat, Color Family: Beige
                            </p>
                          </div>
                        </div>
                        <div className="w-[50%] px-[5%]">
                          <div className="flex pt-4 flex-wrap gap-20">
                            <div className="flex flex-col gap-2">
                              <p>${product.afterdiscount}</p>
                              <p className="line-through text-slate-500">
                                ${product.price}
                              </p>
                              <p>{product.discount}%</p>
                              <div className="flex gap-2">
                                <CiHeart className="text-xl cursor-pointer" />
                                <PiTrashLight className="text-xl cursor-pointer" />
                              </div>
                            </div>
                            <div className="flex justify-between gap-4">
                              <div>
                                <button
                                  onClick={() => updateQuantity(index, -1)}
                                  className="p-2 bg-slate-100 hover:bg-gray-300 text-gray-400 hover:text-white"
                                >
                                  <FaMinus />
                                </button>
                              </div>
                              <div className="flex justify-center">
                                <p className=" text-lg">{quantities[index]}</p>
                              </div>
                              <div>
                                <button
                                  onClick={() => updateQuantity(index, 1)}
                                  className="p-2 bg-slate-100 hover:bg-gray-300 text-gray-400 hover:text-white"
                                >
                                  <FaPlus />
                                </button>
                              </div>
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
          <TheCartProceedToCheckout total={total} />
        </div>
      </div>
    </div>
  );
}

export default TheCart;
