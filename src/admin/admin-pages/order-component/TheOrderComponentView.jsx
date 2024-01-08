import React from "react";
import TheImageMagnifier from "../product-components/TheImageMagnifier";
import { IoClose } from "react-icons/io5";

const staticAPI = "http://localhost:4000/api/v1/uploads/";
function TheOrderComponentView({
  product,
  closeModal,
  images,
}) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end items-center">
      <div className="w-[50%] h-full overflow-auto">
        <div className="w-full h-full flex justify-center items-center ">
          <div className="bg-white border rounded-lg shadow-custom-shadow w-full h-[80vh] flex justify-between items-center mt-11">
            <div>
              <IoClose
                onClick={closeModal}
                className="cursor-pointer absolute top-[15%] right-[1%] text-2xl z-[70]"
                title="Close"
              />
            </div>
            <div className="w-full h-[60vh] p-10 py-5">
              <h2 className="text-4xl font-extrabold mb-10">Order Details</h2>
              <p className="mb-4 text-xl font-semibold">
                Shipping Id:
                <span className="font-light text-lg">{product?.id}</span>
              </p>
              <p className="mb-4 text-xl font-semibold">
                Order Id:
                <span className="font-light text-lg"> {product?.Order?.id}</span>
              </p>
              <p className="mb-4 text-xl font-semibold">
                Product Id:
                <span className="font-light text-lg"> {product?.Order?.OrderItems[0]?.productId}</span>
              </p>
              <p className="mb-4 text-xl font-semibold">
                Quantity:
                <span className="font-light text-lg"> {product?.Order?.OrderItems[0]?.quantity}</span>
              </p>
              <p className="mb-4 text-xl font-semibold">
                Price:
                <span className="font-light text-lg"> Rs.{product?.Order.OrderItems[0]?.product?.afterdiscount}</span>
              </p>
              <p className="mb-4 text-xl font-semibold">
                Payment Method:
                <span className="font-light text-lg"> {product?.Purchase?.paymentmethod}</span>
              </p>
              <p className="mb-4 -mt-6 text-xl font-semibold ">
                Status:
                <span className="font-light text-lg">
                  <span
                    className={`text-[80px] mr-1 ${
                      product.status === "ordered"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    .
                  </span>
                  {product?.status}
                </span>
              </p>
            </div>
            <div className="w-full">
              {product?.Order?.OrderItems?.[0]?.product?.images?.map((image) => (
                <div key={image.id} className="w-[300px] h-[400px] -ml-2">
                  <TheImageMagnifier imageUrl={staticAPI + image.url} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40" onClick={closeModal}></div>
    </div>
  );
}

export default TheOrderComponentView;
