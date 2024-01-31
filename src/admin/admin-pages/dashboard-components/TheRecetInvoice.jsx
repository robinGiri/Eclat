import React, { useState, useEffect } from "react";
import axios from "axios";

const API = "http://localhost:4000/api/v1/user/";
function TheRecetInvoice() {
  const [products, setProducts] = useState([]);

  const getApiData = async () => {
    try {
      const {
        data: { users },
      } = await axios.get(API + "users/");
      console.log(users);
      setProducts(users);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsError("Error fetching data");
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div>
      <div>
      <div className=" flex justify-between items-center m-5 my-5">
        <p className="text-xl font-bold">Recent Invoice</p>
      </div>
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-white z-10">
            <tr>
              <th className="px-6 w-36 text-left font-light">No</th>
              <th className="px-6 w-36 text-left font-light">Customer</th>
              <th className="px-6 w-36 text-left font-light">Address</th>
              <th className="px-6 w-36 text-left font-light">Phone</th>
              <th className="w-36 text-left font-light">Email</th>
              <th className="px-6 w-36 text-left font-light">Role</th>
              <th className="px-6 w-36 text-left font-light">Status</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              Array.isArray(products) &&
              products.map((item) => (
                <tr
                  key={item.id}
                  className="border-b-2 font-semibold border-gray-300"
                >
                  <td className="px-6 py-12">{item.id}.</td>
                  <td className="px-6 w-36">{item.name}</td>
                  <td className="px-6 w-36">{item.address}</td>
                  <td className="px-6 w-36">{item.phone}</td>

                  <td className="w-36">{item.email}</td>
                  <td className="px-6 w-36">{item.role}</td>
                  <td className="px-6 w-36">
                    <span
                      className={`text-[40px] mr-1 ${
                        item.token === null
                          ? "text-yellow-600"
                          : "text-green-600"
                      }`}
                    >
                      .
                    </span>
                    {item.token !== null ? "Paid" : "Unpaid"}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TheRecetInvoice;
