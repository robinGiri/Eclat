import React, { useState } from 'react';
import getSearchData from "../../services/search_api"
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { data } from 'autoprefixer';


const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');


  const searchHandler = async () =>{
    const data = await fetchData(searchTerm);
    console.log(data);
  }

  const handleInputChange = async (e) => {
    setSearchTerm(e.target.value);
    await fetchData(searchTerm)
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      alert("Enter pressed!")
      // Trigger search on Enter key
      handleSearch();
    }
  };

  const fetchData = async (value) => {
    console.log(value);
    const {data} = await axios.get(`http://localhost:5000/api/v1/product/search?q=${value}`);
    console.log(data);

  }
  

  return (
    <div className=' focus: outline-none'>
      <input
      className='p-2 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#DCAC30] placeholder-gray-500::placeholder text-neutral-700  text-sm relative'
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyUp={handleKeyUp}
      />
      <button>
        <FaSearch className='absolute text-neutral-400 -translate-y-4 -translate-x-4' onKeyUp={searchHandler}/>
      </button>
    </div>
  );
};

export default SearchComponent;
