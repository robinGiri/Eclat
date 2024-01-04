import React, { useState, useEffect } from "react";
import SecondCarousel from "../components/sharedComponents/carouselComponents/SecondCarousel";
import TheFooter from "../components/specificComponents/TheFooter";
import TailInfoSection from "../components/specificComponents/TailInfoSection";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { apiConfig } from "../services/api/config";

function TheWomen() {
  const navigate = useNavigate();

  const handleProductClick = (clickedProduct, clickedImage) => {
    navigate(`/product_details/${clickedProduct.id}`, {
      state: { item: clickedProduct, selectedImage: clickedImage },
    });
  };

  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState("");

  const getApiData = async () => {
    try {
      const { data } = await axios.get(`${apiConfig.baseUrl}product/`);
      setProducts(data.result);
    } catch (error) {
      setIsError("Error fetching data");
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div>
      <div className="bg-neutral-100 px-16">
        <h1 className="mx-[5%] text-5xl py-6 font-bold"></h1>
        <div className="mx-[5%] my-5">
        <SecondCarousel
            products={products?.filter((item) => item.category === "kids")}
            isError={isError}
            handleProductClick={handleProductClick}
          />
        </div>
        <div className="p-5">
          <div className="content">
            <div className="w-[100%] flex flex-wrap gap-[1.4rem]">
              {products?.filter((item) => item.category === "womens")?.map((product) => (
                <div key={product.id} className="relative group">
                  <div className="bg-white shadow rounded-sm max-w-sm w-[320px] h-[25rem] overflow-hidden mb-5">
                    <div className="aspect-w-16 h-[15rem] relative flex justify-center items-center">
                      {product.images.length > 0 && (
                        <img
                          key={product.images[0].id}
                          src={`${apiConfig.baseUrl}uploads/${product.images[0].url}`}
                          className="object-contain w-[300px] h-full transition-transform transform group-hover:scale-105 pb-2 cursor-pointer"
                          alt={product.id}
                          onClick={() =>
                            handleProductClick(
                              product,
                              `${apiConfig.baseUrl}uploads/${product.images[0].url}`
                            )
                          }
                        />
                      )}
                    </div>

                    <div className="mt-2">
                      <div className="flex px-4 w-full justify-between items-center">
                        <h3 className="mt-2 text-gray-900 font-semibold text-xl tracking-tight">
                          {product.name}
                        </h3>
                      </div>

                      <div className="px-4">
                        <div className="flex items-start justify-between py-5">
                          <div className="font-bold text-sm my-1">
                            <span className="text-gray-500 px-1">
                              List Price:
                            </span>
                            <span className="line-through text-xl text-neutral-400">
                              Rs.{product.price}
                            </span>
                          </div>
                          <div className="text-2xl font-bold">
                            Rs.
                            {product.discount
                              ? Math.floor(product.afterdiscount)
                              : product.price}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end px-5 text-xs font-light">
                      <p className="hover:font-medium cursor-pointer">
                        View Details
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-center items-center">
                {isError && <h1>{isError}</h1>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-16 bg-neutral-100">
        <TailInfoSection />
      </div>
      <TheFooter />
    </div>
  );
}

export default TheWomen;
