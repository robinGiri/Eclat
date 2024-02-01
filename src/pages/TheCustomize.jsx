import { useLocation, useParams } from "react-router-dom";

function TheCustomize() {
  const location = useLocation();
  const productID = useParams();

  const redirectToLink = () => {
    window.location.href = `http://localhost:3000/product?${productID}`;
  };

  return <div>{redirectToLink()}</div>;
}

export default TheCustomize;
