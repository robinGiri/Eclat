import React from "react";
import { IoClose } from "react-icons/io5";

function TheUserViewModal({ product, closeUserModal }) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end items-center">
      <div className="w-[50%] h-full overflow-auto">
        <div className="w-full h-full flex justify-center items-center ">
          <div className="bg-white border rounded-lg shadow-custom-shadow w-full h-[80vh] flex justify-between items-center mt-11">
          <div>
          <IoClose onClick={closeUserModal} className="cursor-pointer absolute top-[15%] right-[1%] text-2xl z-[70]" title="Close"/>
          </div>
            <div className="w-full h-[60vh] p-10 py-5">
              <h2 className="text-4xl font-extrabold mb-10">User Details</h2>
              <p className="mb-4 text-xl font-semibold">User Name: <span className="font-light text-lg">{product.name}</span></p>
              <p className="mb-4 text-xl font-semibold">Address: <span className="font-light text-lg"> {product.address}</span></p>
              <p className="mb-4 text-xl font-semibold">Phone: <span className="font-light text-lg"> {product.phone}</span></p>
              <p className="mb-4 text-xl font-semibold">Email: <span className="font-light text-lg"> {product.email}</span></p>
              <p className="mb-4 text-xl font-semibold">Role: <span className="font-light text-lg"> {product.role}</span></p>
              <p className="mb-4 text-xl font-semibold">Last Purchased: <span className="font-light text-lg"> {product.createdAt}</span></p>

              <p className="mb-4 -mt-6 text-xl font-semibold ">Status: <span className="font-light text-lg"><span
                          className={`text-[80px] mr-1 ${
                            product.token === null
                              ? "text-yellow-600"
                              : "text-green-600"
                          }`}
                        >
                          .
                        </span> {product.token !== null ? "Active" : "Inactive"}</span></p>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40" onClick={closeUserModal}></div>
    </div>
  );
}

export default TheUserViewModal;
