import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart, FaFeather } from "react-icons/fa";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import VerticalScrollContainer from "../components/sharedComponents/carouselComponents/VerticalScrollContainer";
import ProductDetailsCarousel from "../components/sharedComponents/carouselComponents/ProductDetailsCarousel";
import ShareComponent from "../components/sharedComponents/ShareComponent";
import { convertToDollar } from "../utils/convertToDollar";

const API = "http://localhost:5000/api/v1/product/";
const staticAPI = "http://localhost:5000/api/v1/uploads/";
const shareUrl = "https://eclatbags.netlify.app/";

function TheProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [isError, setIsError] = useState(false);
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const selectedImage = location.state?.selectedImage || "";

  useEffect(() => {
    const getApiData = async () => {
      try {
        const resp = await axios.get(`${API}/${productId}`);
        console.log("API Response:", resp.data.result);

        if (Array.isArray(resp.data.result) && resp.data.result.length === 1) {
          const fetchDiscount = resp.data.result[0];
          if (fetchDiscount.discount) {
            const discountedPrice = fetchDiscount.price * (1 - fetchDiscount.discount / 100);
            fetchDiscount.discountedPrice = discountedPrice;
          }
          setProduct(fetchDiscount);
        } else {
          setIsError(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsError(true);
      }
    };

    getApiData();
  }, [productId]);

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
        setRates(fetchedRates);

        // Set the default selected rate (you can choose any currency)
        setSelectedRate(fetchedRates[0]);
      })
      .catch((error) => console.error("Error fetching rates:", error));
  }, []);

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    const selectedRate = rates.find(
      (rate) => rate.currency.iso3 === selectedValue
    );
    setSelectedRate(selectedRate);
  };

  return (
    <>
      <div className="flex justify-center mx-10">
        <div className="flex justify-center w-[85%]">
          <div className="flex gap-4 p-4 bg-neutral-100 w-full">
            <div className="flex flex-col items-center w-[100%] h-[95vh] bg-neutral-100">
              <div className="flex w-[95%] justify-center h-[40vh] overflow-hidden bg-white rounded-md mb-3">
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    className="p-4 w-[400px] h-[300px] rounded-md object-contain"
                    alt={`Product ${product.id} Image`}
                  />
                ) : (
                  <p>No image available</p>
                )}
                {isError && <h1>{isError}</h1>}
              </div>
              <div className=" flex w-full h-[30vh] overflow-clip">
                <ProductDetailsCarousel />
              </div>
            </div>
            {/* div 2 */}

            <div className="flex p-4 rounded-md bg-neutral-50">
              <div className="details p-2">
                <div className="flex justify-between ">
                  <p className="font-bold text-3xl w-auto ">{product.name !== undefined
                    ? `${product.name}`
                    : "Loading"}</p>
                  <div className="flex mt-2">
                  <button className="text-s font-extrathin text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 cursor-pointer transition duration-300 hover:text-red-500" onClick={()=>{navigate(`/customize/product?${product.id}}`)}}>Customize with Eclat</button>
                    <FaHeart className=" mx-[5vh] text-neutral-500 text-2xl cursor-pointer transition duration-300 hover:text-red-500" />
                  </div>
                </div>

                {/* Pricing section */}
                <div>
                  <div className="flex gap-2 items-center">
                    <p className="font-medium mt-3 text-md">NPR</p>
                    <p className="font-semibold mt-3 text-xl">
                      {product.price}
                    </p>
                  </div>

                  <div className="py-4 flex items-center">
                    <div className="text-sm font-medium rounded-lg bg-yellow-50 p-3 border border-amber-400 pl-3 w-auto">
                      <label htmlFor="priceDropdown" className="font-bold">
                        Convert to:
                      </label>
                      <select
                        id="priceDropdown"
                        onChange={handleDropdownChange}
                        value={selectedRate?.currency.iso3}
                        className="mt-1 block p-2 w-auto border-b rounded-lg bg-white shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-b-green-400 focus:border-b-4 sm:text-sm "
                      >
                        {rates.map((rate) => (
                          <option
                            key={rate.currency.iso3}
                            value={rate.currency.iso3}
                            className="mt-10"
                          >
                            {rate.currency.name} (Rate: {rate.sell})
                          </option>
                        ))}
                      </select>
                      <div className="">
                        {/* Display the product price based on the selected rate */}
                        <p className="font-semibold text-lg mt-2 px-2">
                          {selectedRate ? (
                            <>
                              {selectedRate.currency.iso3 === "USD" && "$"}
                              {selectedRate.currency.iso3 === "INR" && "₨"}
                              {selectedRate.currency.iso3 === "EUR" && "€"}
                              {selectedRate.currency.iso3 === "GBP" && "£"}
                              {/* Add more conditions for other currencies as needed */}
                              {` `+convertToDollar(
                                product.price,
                                selectedRate.sell
                              )}
                            </>
                          ) : (
                            `Original Price: ${product.price}`
                          )}
                        </p>
                      </div>
                    </div>
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
                <div>
                  <ShareComponent
                    shareUrl={shareUrl + "product_details" + product.id}
                    quote={product.name}
                  />
                </div>
                <div className="flex flex-wrap description mt-5 w-[65vh]">
                  <p className="text-gray-500">
                    {product.description}
                  </p>
                </div>
                <p className="font-light hover:font-bold cursor-pointer">
                  {product.discription}
                </p>

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
      <div>Suggested prodocks</div>
    </>
  );
}

export default TheProductDetails;
