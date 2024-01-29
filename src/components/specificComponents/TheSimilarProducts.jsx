import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { apiConfig } from "../../services/api/config";
import "../../admin/admin-pages/product-components/TheRecentInvoice.css";

function TheSimilarProducts() {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(null);

  const getApiData = async () => {
    try {
      const resp = await axios.get(`${apiConfig.baseUrl}product`);
      console.log(resp.data);
      const apiProducts = resp.data.result;
      setProducts(apiProducts);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsError("Error fetching data");
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const navigate = useNavigate();

  const handleProductClick = (clickedProduct) => {
    navigate(`/product_details/${clickedProduct.id}`, {
      state: { item: clickedProduct },
    });
    window.location.reload();
  };

  return (
    <div className="flex justify-start gap-4 pl-5 flex-wrap">
      {products &&
        Array.isArray(products) &&
        products.map((item) => (
          <div
          key={item.id}
            className="gap-5 mb-3 cursor-pointer transition-transform transform hover:scale-105 duration-500 ease-out"
            onClick={() => handleProductClick(item)}
          >
            <div key={item.id} className="border shadow-custom-nav-shadow px-2 rounded">
              {item.images.map((image) => (
                <div key={image.id}>
                  <img
                    src={`${apiConfig.baseUrl}uploads/${image.url}`}
                    className="w-[200px] h-[200px] my-2 cursor-pointer object-cover"
                  />
                </div>
              ))}
              <div className=" mx-[5%] text-sm">
                <div className="flex items-center justify-between">
                  <p>{item.name}</p>
                  <p>
                    <span className="bg-red-600 text-white px-2 py-1 rounded-md">
                      {item.discount}% OFF
                    </span>
                  </p>
                </div>
                <div className="flex flex-col my-[2%]">
                  <p>Rs.{item.afterdiscount}</p>
                  <p className="line-through text-gray-400">Rs.{item.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default TheSimilarProducts;
