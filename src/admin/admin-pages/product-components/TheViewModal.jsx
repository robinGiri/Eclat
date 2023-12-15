import React from "react";
import TheImageMagnifier from "./TheImageMagnifier";
import { IoClose } from "react-icons/io5";
const staticAPI = "http://localhost:5000/api/v1/uploads/";

function TheViewModal({ product, closeModal }) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end items-center">
      <div className="w-[50%] h-full overflow-auto">
        <div className="w-full h-full flex justify-center items-center ">
          <div className="bg-white border rounded-lg shadow-custom-shadow w-full h-[80vh] flex justify-between items-center mt-11">
          <div>
          <IoClose onClick={closeModal} className="cursor-pointer absolute top-[15%] right-[1%] text-2xl z-[70]" title="Close"/>
          </div>
            <div className="w-full h-[60vh] p-10 py-5">
              <h2 className="text-4xl font-extrabold mb-10">Product Details</h2>
              <p className="mb-4 text-xl font-semibold">Product Name: <span className="font-light text-lg">{product.name}</span></p>
              <p className="mb-4 text-xl font-semibold">Product Category: <span className="font-light text-lg"> {product.category}</span></p>
              <p className="mb-4 text-xl font-semibold">Quantity: <span className="font-light text-lg"> {product.viewCount}</span></p>
              <p className="mb-4 text-xl font-semibold">Amount: <span className="font-light text-lg"> ${product.price}</span></p>

              <p className="mb-4 -mt-6 text-xl font-semibold ">Status: <span className="font-light text-lg"><span
                          className={`text-[80px] ${
                            product.status === "Active"
                              ? "text-green-600 "
                              : "text-yellow-600"
                          }`}
                        >
                          .
                        </span> {product.status}</span></p>
              <p className="mb-4 text-xl font-semibold">Discount: <span className="font-light text-lg"> ${product.discount}</span></p>
            </div>
            <div className="w-full">
              {product.images.map((image) => (
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

export default TheViewModal;
