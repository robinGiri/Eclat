import React, { useState } from "react";
import axios from "axios";
import { CiSearch } from "react-icons/ci";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const searchHandler = async () => {
    const data = await fetchData(searchTerm);
    console.log(data);
  };

  const handleInputChange = async (e) => {
    setSearchTerm(e.target.value);
    await fetchData(e.target.value);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const fetchData = async (value) => {
    console.log(value);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/product/search?q=${value}`
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="relative">
      <input
        className={`p-1 border-b text-sm font-light focus:outline-none ${
          searchTerm ? "border-[#DCAC30]" : isFocused ? "border-[#DCAC30]" : ""
        }`}
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyUp={handleKeyUp}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <button className="absolute top-1 right-1">
        <CiSearch
          className={`text-xl hover:text-[#DCAC30] ${
            searchTerm ? "text-[#DCAC30]" : isFocused ? "text-[#DCAC30]" : ""
          }`}
          onClick={searchHandler}
        />
      </button>
    </div>
  );
};

export default SearchComponent;

