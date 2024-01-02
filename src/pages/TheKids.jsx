import React, { useState, useEffect } from "react";
import SecondSectionKids from "../components/sharedComponents/carouselComponents/SecondSectionKids";
import TheFooter from "../components/specificComponents/TheFooter";
import Thecard from "../components/sharedComponents/TheCard";
import TailInfoSection from "../components/specificComponents/TailInfoSection";
import axios from "axios";

const API = "http://localhost:5000/api/v1/product/";
const staticAPI = "http://localhost:5000/api/v1/uploads/";

function TheKids() {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState("");

  const getApiData = async () => {
    try {
      const resp = await axios.get(API);
      setProducts(resp.data.result);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsError("Error fetching data");
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <div className="bg-neutral-100 px-16">
        <h1 className="mx-[5%] text-5xl py-6 font-bold"></h1>
        <div className="mx-[5%] my-5">
          <SecondSectionKids />
        </div>
        <div className="p-5">
          <div className="content">
              <Thecard />
          </div>
        </div>
      </div>
      <div className="p-16 bg-neutral-100">
        <TailInfoSection />
      </div>
      <TheFooter />
    </>
  );
}

export default TheKids;
