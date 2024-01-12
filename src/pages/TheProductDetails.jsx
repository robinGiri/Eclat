import React, { useState, useEffect } from "react";
import { FaHeart, FaFeather } from "react-icons/fa";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import VerticalScrollContainer from "../components/sharedComponents/carouselComponents/VerticalScrollContainer";
import ProductDetailsCarousel from "../components/sharedComponents/carouselComponents/ProductDetailsCarousel";
import ShareComponent from "../components/sharedComponents/ShareComponent";
import { convertToDollar } from "../utils/convertToDollar";
import { apiConfig } from "../services/api/config";

const shareUrl = "https://eclatbags.netlify.app/";

function TheProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [isError, setIsError] = useState("");
  const [product, setProduct] = useState({});

  const getApiData = async () => {
    try {
      const { data } = await axios.get(`${apiConfig.baseUrl}product/${productId}}`);
      setProduct(data.result[0]);
    } catch (error) {
      setIsError("Error fetching data");
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const handleWishlistClick = async(productID) =>{
    await axios.post(`http://localhost:4000/api/v1/wishlist/${productID}`)
      .then(/* Add a popup message */)
      .catch((error) => console.error("Error adding to wishlist : ", error));
  }

  const handleCartClick = () => {
    navigate("/cart");
  };

  const [rates, setRates] = useState([]);
  const [selectedRate, setSelectedRate] = useState(null);

  useEffect(() => {
    // Fetch rates from the API
    fetch("https://www.nrb.org.np/api/forex/v1/rate")
      .then((response) => response.json())
      .then((data) => {
        // Extract rates from the API response
        const fetchedRates = data.data.payload.rates;

        // Find the rate for USD
        const usdRate = fetchedRates.find(
          (rate) => rate.currency.iso3 === "USD"
        );

        // Set the default selected rate to USD
        setSelectedRate(usdRate);
      })
      .catch((error) => console.error("Error fetching rates:", error));
  }, []);

  return (
    <>
      <div className="flex justify-center mx-10">
        <div className="flex justify-center w-[85%]">
          <div className="flex gap-4 p-4 bg-neutral-100 w-full">
            <div className="flex flex-col items-center w-[100%] h-[95vh] bg-neutral-100">
              <div className="flex w-[95%] justify-center h-[40vh] overflow-hidden bg-white rounded-md mb-3">
                <img
                  src={`${apiConfig.baseUrl}uploads/${product.images}`}
                  className="p-4 w-[400px] h-[300px] rounded-md object-contain"
                  alt={`Product ${product.id} Image`}
                />
                {isError && <h1>{isError}</h1>}
              </div>
              <div className=" flex w-full h-[30vh] overflow-clip ">
                <ProductDetailsCarousel images={product.images} />
              </div>
            </div>
            <div className="flex p-4 rounded-md bg-neutral-50">
              <div className="details p-2">
                <div className="flex justify-between ">
                  <p className="font-bold text-3xl w-auto ">{product.name}</p>
                  <div className="flex mt-2">
                    <FaFeather className="text-xl text-yellow-600" />
                    <FaHeart className=" mx-[5vh] text-neutral-500 text-2xl cursor-pointer transition duration-300 hover:text-red-500" onClick={()=>{handleWishlistClick(productId)}}/>
                  </div>
                </div>

                {/* Pricing section */}
                <div className="flex items-center mt-5">
                  <div className="flex gap-2 items-center">
                    <p className="font-medium text-neutral-700 text-xl">
                      Rs {product.afterdiscount}
                    </p>
                    <span className="text-neutral-400 "> | </span>
                    <p className="font-medium text-neutral-700 text-xl">
                      {`$ ${convertToDollar(
                        product.price,
                        selectedRate?.sell
                      )}`}
                    </p>
                  </div>
                </div>

                {/* Other sections */}
                <div className="">
                  <p className="text-red-500 mt-5">
                    Vouchers Available:
                    <select className="mx-2 font-bold w-[25vh] border rounded-md p-2">
                      <option value="option1">CHRISM</option>
                      <option value="option2">CHRISTLER</option>
                      <option value="option3">QUISMOS</option>
                    </select>
                  </p>
                </div>
                <div className="flex flex-wrap description mt-5 w-[100%]">
                  <p className="text-gray-500">
                    {product.description}
                  </p>
                </div>
                <p className="font-light text-sm hover:font-bold cursor-pointer mt-4">
                  Shipping Details
                </p>
                <div className="mt-4">
                  <ShareComponent
                    shareUrl={shareUrl + "product_details" + product.id}
                    quote={product.name}
                  />
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={handleCartClick}
                    className="mt-10 h-[10vh] w-[48%] bg-green-500 text-white font-bold hover:bg-green-700 py-2 px-4 rounded"
                  >
                    Buy Now
                  </button>
                  <button
                    onClick={handleCartClick}
                    className="mt-10 h-[10vh] w-[50%] bg-neutral-900 text-white font-bold hover:bg-neutral-200 hover:text-black py-2 px-4 rounded"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-96">
          <VerticalScrollContainer />
        </div>
      </div>
    </>
  );
}

export default TheProductDetails;
