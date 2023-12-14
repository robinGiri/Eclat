import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
// import getSearchData from '../../services/search_api';
import axios from "axios";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedInputValue, setDebouncedInputValue] = useState("");

  const debounce = (callback, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => callback(...args), delay);
    };
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const debouncedLog = debounce((value) => {
    console.log("Search text:", value);
  }, 1000);

  useEffect(() => {
    debouncedLog(searchTerm);
    setDebouncedInputValue(searchTerm);
  }, [searchTerm]);

  const searchHandler = async () => {
    try {
      const {data}= await axios.get(
        `http://localhost:5000/api/v1/product/search?q=${searchTerm}`
      );
      let {result} = data; // the result(the actual array) is inside data
      result.map(item => {
        console.log(item);
      });
    } catch (error) {
      console.error("Error in searchHandler:", error);
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      // Trigger search on Enter key
      searchHandler();
    }
  };

  return (
    <div className="flex items-center focus:outline-none">
      <input
        className="mt-2 px-3 py-2 w-[100%] border-b-2 border-neutral-400 bg-transparent  text-gray-600 focus:outline-none focus:border-yellow-600 placeholder-gray-300"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyUp={handleKeyUp}
      />
      <button>
        <FaSearch
          className='absolute -translate-x-7 -translate-y-2 focus:outline-none text-gray-400 focus:border-yellow-300'
          onClick={searchHandler}
        />
      </button> 
      {/* <div>
        <input className="text-gray-800" type="text" value={searchTerm} onChange={handleInputChange} />
      </div> */}
        {/* <p>Debounced input value: {debouncedInputValue}</p> */}

    </div>
  );
};

export default SearchComponent;
