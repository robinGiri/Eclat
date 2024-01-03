import { useState, useEffect } from "react";
import { FaHeart, FaEdit, FaFeather } from "react-icons/fa";
import axios from "axios";
import products from "../data/products";
import { useParams, useNavigate } from "react-router-dom";
import VerticalScrollContainer from "../components/sharedComponents/carouselComponents/VerticalScrollContainer";
import ProductDetailsCarousel from "../components/sharedComponents/carouselComponents/ProductDetailsCarousel";
import ShareComponent from "../components/sharedComponents/ShareComponent";

const API = "http://localhost:5000/api/v1/product/";
const staticAPI = "http://localhost:5000/api/v1/uploads/";
const shareUrl = "https://eclatbags.netlify.app/";

function TheProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [isError, setIsError] = useState("");
  const [product, setProduct] = useState({});

  const getApiData = async () => {
    try {
      // try to get data from API
      const res = products.find((p) => p.id == productId);
      setProduct(res);
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
      <div className="flex justify-center mx-10">
        <div className="flex justify-center w-[85%]">
          <div className="flex gap-4 p-4 bg-neutral-100 w-full">
            <div className="flex flex-col items-center w-[100%] h-[95vh] bg-neutral-100">
              <div className="flex w-[95%] justify-center h-[40vh] overflow-hidden bg-white rounded-md mb-3">
                {/* {products.slice(0,1).map((product) => {
              const { id, images } = product;
              return (
                <div className="card" key={id}>
                  <div className="flex flex-wrap">
                    {images.map((image) => (
                      <img
                        key={image.id}
                        // src={staticAPI+image.url}
                        src={image}
                        className="m-2 w-[300px] h-[400px] border-2 border-black rounded-md"
                        alt={`Product ${id} Image`}
                      />
                    ))}
                  </div>
                </div>
              );
            })} */}
                <img
                  src={product.images}
                  className="p-4 w-[400px] h-[300px] rounded-md object-contain"
                  alt={`Product ${product.id} Image`}
                />
                {isError && <h1>{isError}</h1>}
              </div>
              <div className=" flex w-full h-[30vh] overflow-clip ">
                <ProductDetailsCarousel />
              </div>
            </div>
            {/* div 2 */}
            <div className="flex p-4 rounded-md bg-neutral-50">
              <div className="details p-2">
                <div className="flex justify-between ">
                  <p className="font-bold text-3xl w-auto ">{product.name}</p>
                  <div className="flex mt-2">
                  <button className="text-s font-extrathin text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 cursor-pointer transition duration-300 hover:text-red-500" onClick={()=>{navigate(`/customize/product?${product.id}`)}}>Customize with Eclat</button>
                    <FaHeart className=" mx-[5vh] text-neutral-500 text-2xl cursor-pointer transition duration-300 hover:text-red-500" />
                  </div>
                </div>
                <p className="text-gray-500 mt-4">Product Category</p>
                <p className="font-semibold mt-5 text-xl">Rs {product.price}</p>
                <div className="flex">
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
                  <ShareComponent shareUrl={ shareUrl + 'product_details' +  product.id} quote={product.name} />
                </div>
                <div className="flex flex-wrap description mt-5 w-[65vh]">
                  <p className="text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    accumsan varius metus, ac fringilla libero hendrerit ac.
                    Nulla facilisi. Nunc euismod, nulla a luctus malesuada,
                    justo ligula rhoncus nulla metus, ac fringilla libero
                    hendrerit ac. Nulla facilisi. Nunc euismod, nulla a luctus
                    malesuada, justo ligula rhoncus nulla
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
