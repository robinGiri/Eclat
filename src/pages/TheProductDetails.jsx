import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import ReactImageMagnify from "react-image-magnify";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import ShareComponent from "../components/sharedComponents/ShareComponent";
import { convertToDollar } from "../utils/convertToDollar";
import { apiConfig } from "../services/api/config";
import TheSimilarProducts from "../components/specificComponents/TheSimilarProducts";
import "../admin/admin-pages/product-components/TheRecentInvoice.css";
import TheRatingAndReview from "./TheRatingAndReview";
import TheFooter from "../components/specificComponents/TheFooter";

const shareUrl = "https://eclatbags.netlify.app/";

function TheProductDetails() {
  const [isExpanded, setExpanded] = useState(false);
  const [selectedRate, setSelectedRate] = useState(null);
  const { productId } = useParams();
  const navigate = useNavigate();
  const [isError, setIsError] = useState("");
  const [product, setProduct] = useState({});
  const image = `${apiConfig.baseUrl}uploads/${
    product.images && product.images[0]?.url
  }`;

  const handleToggle = () => {
    setExpanded(!isExpanded);
  };

  const getApiData = async () => {
    try {
      const { data } = await axios.get(
        `${apiConfig.baseUrl}product/${productId}}`
      );
      setProduct(data.result[0]);
    } catch (error) {
      setIsError("Error fetching data");
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  useEffect(() => {
    fetch("https://www.nrb.org.np/api/forex/v1/rate")
      .then((response) => response.json())
      .then((data) => {
        const fetchedRates = data.data.payload.rates;
        const usdRate = fetchedRates.find(
          (rate) => rate.currency.iso3 === "USD"
        );
        setSelectedRate(usdRate);
      })
      .catch((error) => console.error("Error fetching rates:", error));
  }, []);

  const handleClick = async () => {
    try {
      const data = {
        userId: 1,
        productId: productId,
        quantity: 1,
      };
      const response = await axios.post(`${apiConfig.baseUrl}cartitem/`, data);
      console.log("Item added to the database:", response.data);
      window.location.reload();
    } catch (error) {
      console.error(
        "Error adding item to the database:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="h-[88vh] custom-scroll">
      <div
        className={`h-[100vh] flex justify-between items-center ${
          isExpanded ? "mb-[35vh]" : ""
        }`}
      >
        <div
          className={`flex justify-between gap-7 bg-white h-[85vh] w-full ${
            isExpanded ? "flex-grow" : ""
          }`}
        >
          <div
            className={`border border-white shadow-custom-shadow ${
              isExpanded ? "ml-[5%] border h-[120vh]" : "w-[85rem] flex ml-[5%]"
            }`}
          >
            <div className="w-full flex flex-wrap justify-end gap-3">
              <div
                className={`min-h-[41vh] ${
                  isExpanded ? "w-[41rem] h-[300px]" : "w-[33rem] border-r"
                }`}
              >
                <div className="flex justify-center items-center h-full">
                  <div
                    className={`${
                      isExpanded
                        ? "m-[2%] w-[300px] h-[280px]"
                        : "-ml-[0.4rem] mx-[2%] w-[400px]"
                    }`}
                  >
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "Wristwatch by Ted Baker London",
                          isFluidWidth: true,
                          src: image,
                        },
                        largeImage: {
                          src: image,
                          width: 800,
                          height: 800,
                        },
                        enlargedImageContainerDimensions: {
                          width: "200%",
                          height: "140%",
                        },
                      }}
                      className="sticky top-0 z-[9999999999] object-contain"
                    />
                  </div>
                </div>
              </div>

              <div
                className={`min-h-[60vh] ${
                  isExpanded ? "w-[41rem]" : "w-[32rem] border-l"
                }`}
              >
                <div className="m-1 mt-[5%] mx-[3%]">
                  <div className="flex justify-between">
                    <p className="font-semibold">{product.name}</p>
                    <div className="flex items-center gap-5">
                      <a
                        href={`/customize/product?${product.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="text-sm hover:text-green-500">
                          Customize
                        </button>
                      </a>
                      <FaHeart className="cursor-pointer hover:text-red-500" />
                    </div>
                  </div>

                  <div className="mt-[5%]">
                    <div className="flex gap-3">
                      <p className="text-sm">Rs {product.afterdiscount}</p>
                      <span className="text-neutral-400 text-sm"> | </span>
                      <p className="text-sm">
                        {`$ ${convertToDollar(
                          product.price,
                          selectedRate?.sell
                        )}`}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 mt-[5%]">
                      <label htmlFor="voucher" className="text-sm">
                        Voucher Available
                      </label>
                      <select
                        id="voucher"
                        name="voucher"
                        className="border text-sm border-gray-300 rounded-md p-2 focus:outline-none w-[10rem]"
                      >
                        <option value="CHRISM">Chrism</option>
                        <option value="CHRISTLER">Christler</option>
                        <option value="QUISMOS">Quismos</option>
                      </select>
                      <p className="text-sm leading-7">{product.description}</p>
                      <div className="mt-[5%]">
                        <ShareComponent
                          shareUrl={shareUrl + "product_details" + product.id}
                          quote={product.name}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-[5%] flex gap-5 mb-3">
                    <button className="border hover:bg-lime-500 hover:text-white border-lime-500 text-lime-700 p-2 px-3 rounded-lg text-sm">
                      Buy Now
                    </button>
                    <NavLink to="/cart">
                      <button
                        className="border hover:bg-lime-500 hover:text-white border-lime-500 text-lime-700 p-2 px-3 rounded-lg text-sm"
                        onClick={handleClick}
                      >
                        Add to Cart
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`border border-white shadow-custom-shadow mr-[3%] ${
              isExpanded
                ? "w-full h-[120vh] custom-scroll"
                : "w-[25%] h-[163vh] custom-scroll"
            } transition-all duration-1000 ease-in-out hidden lg:block`}
          >
            <div className="flex justify-end text-sm sticky top-0 bg-white z-50">
              <button
                onClick={handleToggle}
                className="hover:text-green-500 mb-2 mr-[2%]"
              >
                {isExpanded ? "View Less" : "View More"}
              </button>
            </div>
            <div className="text-sm">
              <TheSimilarProducts />
            </div>
          </div>
        </div>
      </div>
      <div className={`${isExpanded ? "mx-[5%]" : "ml-[5%] w-[71%] pr-2"}`}>
        <TheRatingAndReview />
      </div>
      {/* <TheFooter /> */}
    </div>
  );
}

export default TheProductDetails;
