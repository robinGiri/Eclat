import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import ReactImageMagnify from "react-image-magnify";
import products from "../data/products";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:5000/api/v1/product/";
const staticAPI = "http://localhost:5000/api/v1/uploads/";

function TheProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [isError, setIsError] = useState("");
  const [product, setProduct] = useState({});

  const props = { img: "test.png" };

  const getApiData = async () => {
    try {
      // try to get data from API
      const res = products.find((p) => p.id == productId);
      console.log(res);

      setProduct(res);
      //   const resp = await axios.get(API);
      //   setProduct(resp.data.result);
    } catch (error) {
      setIsError("Error fetching data");
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <>
      <div className="mt-10 mx-10 font-bold text-5xl bg-neutral-50 p-4">
        Product Details
      </div>

      <div className="flex flex-row w-full h-[95vh] rounded-md mt-7 mx-10">
        <div className="content w-[45%] h-[85vh] border rounded-md border-black bg-neutral-200 flex justify-center items-center">
          <div>
            <div className="card">
              <div className="flex flex-wrap">
                <div className="m-2 w-[12000] h-[1200] rounded-md">
                  <div className="object-fill w-full h-full">
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "Wristwatch by Ted Baker London",
                          src: product.images,
                          width: 300,
                          height: 400,
                        },
                        largeImage: {
                          src: product.images,
                          width: 300,
                          height: 800,
                        },
                        lensStyle: { width: 5 },
                        className:
                          "m-2 w-[300px] h-[400px] border-2 border-black rounded-md",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {isError && <h1>{isError}</h1>}
          </div>
        </div>
        {/* div 2 */}
        <div className="content mx-2 w-2/4 h-[85vh] border rounded-md border-black bg-neutral-50">
          <div className="p-10">
            <p className="text-gray-500"> no. of stock sold </p>
            <div className="mt-3 flex flex-row justify-between ">
              <p className="font-bold text-3xl w-auto">{product.name}</p>
              <div className="mt-2">
                <FaHeart className=" mx-[5vh] text-neutral-500 text-2xl cursor-pointer transition duration-300 hover:text-red-500" />
              </div>
            </div>
            <p className="text-gray-500 mt-2">Product Category</p>
            <p className="font-semibold mt-10 text-xl">Rs {product.price}</p>
            <div className="relative inline-block text-left">
              <p className="text-red-400 mt-10">
                Offer Code Usability Description Codes Available:
              </p>
              <select className="mt-4 w-[25vh] border rounded-md p-2">
                <option value="option1">C#ISAWESOME</option>
                <option value="option2">PARAPAPA</option>
                <option value="option3">YEeHAW</option>
              </select>
            </div>
            <div className="description mt-5 w-[65vh]">
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                accumsan varius metus, ac fringilla libero hendrerit ac. Nulla
                facilisi. Nunc euismod, nulla a luctus malesuada, justo ligula
                rhoncus nulla
              </p>
            </div>
            <p className="mt-10 underline font-light hover:font-bold cursor-pointer">
              {product.discription}
            </p>

            <button
              onClick={handleCartClick}
              className="mt-10 h-[10vh] w-[40vh] bg-neutral-900 text-white font-bold hover:bg-neutral-200 hover:text-black py-2 px-4 rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TheProductDetails;
