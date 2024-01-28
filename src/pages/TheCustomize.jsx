import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getAccessToken } from '../services/localStorage';

function TheCustomize() {
  const location = useLocation();
  const productID = useParams();
  const [token, setToken] = useState();

  useEffect(()=>{
    const fetchUserToken = async()=>{
      const userToken = getAccessToken();
      setToken(userToken);
    }
    fetchUserToken()
  })

  const redirectToLink = () => {
    window.location.href = `http://localhost:3000/product?${productID.productID}-${token && token}`;
  };

  return (
    <div>
      {redirectToLink()}
    </div>
  );
}

export default TheCustomize;
