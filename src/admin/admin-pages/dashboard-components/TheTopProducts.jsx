import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { BsGraphUpArrow } from "react-icons/bs";
import axios from "axios";
import TheImageMagnifier from "../product-components/TheImageMagnifier";

const API = "http://localhost:4000/api/v1/product/";
const staticAPI = "http://localhost:4000/api/v1/uploads/";
function TheTopProducts() {
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [isError, setIsError] = useState("");

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

  return (
    <div>
      <div>
        <div>
          <h1 className="text-[23px] font-bold m-[10px]">Top products</h1>
          <div className="mx-3">
            <div className="flex felx-row items-center mr-2 border border-slate-300 p-2 w-full rounded-md bg-white">
              <CiSearch className="mx-2 cursor-pointer text-2xl" />
              <input
                type="text"
                placeholder="Search"
                className="h-full w-full mx-1 outline-none p-1"
              />
              <button className="rounded h-[29px] px-3 bg-black text-white ">
                Enter
              </button>
            </div>

            <div className="m-3 h-[580px] custom-scroll text-sm">
              {products &&
                Array.isArray(products) &&
                products.map((item) => (
                  <div className="h-[15vh] flex border-b ">
                    <div className="w-[50%] flex justify-center items-center">
                      {item.images.map((image) => (
                        <div
                          key={image.id}
                          className="w-[85px] h-[95px] object-cover"
                        >
                          <TheImageMagnifier imageUrl={staticAPI + image.url} />
                        </div>
                      ))}
                    </div>
                    <div className="w-full flex flex-col justify-center px-5">
                      <div>
                        <p>{item.name}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p>{item.category}</p>
                        <p className="text-gray-400 rounded-full">|</p>
                        <div className="flex items-center gap-1 py-1 px-2 rounded text-[#037400] bg-[#A9FFA7]">
                          <BsGraphUpArrow />
                          <p>
                            <span>{item.discount}%</span>
                          </p>
                        </div>
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

export default TheTopProducts;
