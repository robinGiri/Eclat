import React, { useState, useEffect } from "react";
import TheHeroCarousel from "../components/sharedComponents/carouselComponents/TheHeroCarousel";
import ThirdHomepageSection from "../components/specificComponents/ThirdHomepageSection";
import TailInfoSection from "../components/specificComponents/TailInfoSection";
import TheFooter from "../components/specificComponents/TheFooter";
import { useNavigate } from "react-router-dom";
import Thecard from "../components/sharedComponents/TheCard";
import { apiConfig } from "../services/api/config";
import axios from "axios";

function TheHome() {
  const navigate = useNavigate();

  const lists = [
    { id: "sales", name: "Seasonal" },
    { id: "mens", name: "Men's", path: "/men" },
    { id: "womens", name: "Women's", path: "/women" },
    { id: "kids", name: "Kids's", path: "/kids" },
  ];

  const handleProductClick = (productId) => {
    navigate(`/product_details/${productId}`, { productId });
  };

  const handleViewMoreClick = (path) => {
    navigate(path);
  };

  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getApiData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(`${apiConfig.baseUrl}product/`);
      setProducts(data.result);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsError("Error fetching data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  console.log(products);

  return (
    <div>
      <div className="bg-neutral-100">
        <div className="mx-10 bg-gradient-to-t from-white to-teal-50 flex items-center h-[75vh] justify-center gap-4 relative">
          <div className="w-[20%] h-[65vh] relative ">
            <div>
              <img
                src="https://cdn.flipsnack.com/template/3056/medium.jpg?v=1573806152"
                alt="Advertisement"
                className="h-[64vh] w-[100%] cursor-pointer"
              />
            </div>
          </div>

          <div className="h-[460px]">
            <TheHeroCarousel />
          </div>

          <div className="w-[22%] h-[65vh] relative">
            <div>
              <div>
                <img
                  src="https://img.freepik.com/premium-vector/st-patrick-s-day-sale-design-with-clover-typography-letters_1314-1271.jpg?w=2000"
                  alt="Advertisement"
                  className="w-[100%] h-[64vh] cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 mx-10 p-4 bg-white">
          {lists.map((list) => (
            <div className="p-5  rounded-md" key={list.id}>
              <h1 className="font-bold text-4xl p-4 px-4">{list.name}</h1>
              <div className="flex flex-wrap">
                {products
                  .filter((product) => product.category === list.id)
                  .slice(0, 4)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
                      onClick={() => handleProductClick(item.id)}
                    >
                      <Thecard {...item} />
                    </div>
                  ))}
              </div>
              {list.path && (
                <div className=" flex justify-end px-5 py-6">
                  <h2
                    className="hover:font-bold  hover:text-yellow-500  cursor-pointer text-lg"
                    onClick={() => handleViewMoreClick(list.path)}
                  >
                    View More {">"}
                  </h2>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mx-6 p-4">
          <ThirdHomepageSection />
        </div>

        <div className="mt-28 p-10">
          <TailInfoSection />
        </div>
      </div>

      <TheFooter />
    </div>
  );
}

export default TheHome;
