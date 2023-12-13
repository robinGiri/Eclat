import React, { useEffect, useState } from "react";
import Thecard from "../components/men-page/Thecard";
import axios from "axios";

const url = "http://localhost:4000/api/v1/product";
function TheMen() {
  const [product, setProduct] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);
      const { result } = data;
      setProduct(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-wrap">
      {product.map((item) => (
        <div
          key={item.id}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
        >
          <Thecard {...item} />
        </div>
      ))}
    </div>
  );
}

export default TheMen;
