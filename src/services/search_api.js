import axios from "axios";

const getSearchData = async (searchQuery) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/v1/product/search?q=${searchQuery}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching search data:", error);
    throw error; // Re-throw the error to handle it at the calling site if needed
  }
};

export default getSearchData;
