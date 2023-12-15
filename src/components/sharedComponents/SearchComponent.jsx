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

  // const handleKeyUp = (e) => {
  //   if (e.key === 'Enter') {
  //     // Trigger search on Enter key
  //     handleSearch();
  //   }
  // };

  const fetchData = async (value) => {
    console.log(value);
    const {data} = await axios.get(`http://localhost:5000/api/v1/product/search?q=${value}`);
    console.log(data);

  }
  

  return (
    <div className=' focus: outline-none'>
      <input
      className='px-3 py-2 w-[100%] border border-gray-300 rounded-full focus:outline-none focus:border-blue-300'
        type="text"
        placeholder="Search..."
        // value={searchTerm}
        onChange={handleInputChange}
        // onKeyUp={handleKeyUp}
      />
      <button>
        <FaSearch className='relative m-2 translate-x-[1500%] -translate-y-9 focus:outline-none hover:font-semibold hover:text-black focus:border-blue-300 ' onClick={searchHandler}/>
      </button>
    </div>
  );
};

export default SearchComponent;
