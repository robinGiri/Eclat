import React from "react";
import TheAverageRevenue from "./dashboard-components/TheAverageRevenue";
import TheCustomerReturn from "./dashboard-components/TheCustomerReturn";
import TheRevenueVsOrder from "./dashboard-components/TheRevenueVsOrder";
import TheRecetInvoice from "./dashboard-components/TheRecetInvoice";
import TheSalesByCategory from "./dashboard-components/TheSalesByCategory";
import TheTopProducts from "./dashboard-components/TheTopProducts";
import '../admin-pages/product-components/TheRecentInvoice.css'

function TheDashboard() {
  return (
    <div>
      <div className="flex gap-8 flex-wrap p-5 h-[88vh] custom-scroll">
        <div className="w-[65%] flex flex-col gap-8">
            <div className="w-[100%] flex justify-between gap-5 flex-wrap">
              <div className="w-[380px] min-w-[380px] h-[180px] border border-white rounded-2xl bg-white shadow-custom-shadow">
                <TheAverageRevenue />
              </div>
              <div className="w-[380px] min-w-[380px] h-[180px] border border-white rounded-2xl bg-white shadow-custom-shadow flex justify-end items-center">
                <TheCustomerReturn />
              </div>
            </div>
          <div className=" border border-white min-w-[380px] h-[350px] rounded-2xl flex justify-center items-center bg-white shadow-custom-shadow">
            <TheRevenueVsOrder />
          </div>
          <div className=" border min-w-[380px] border-white h-[500px] rounded-2xl mb-10 bg-white shadow-custom-shadow custom-scroll">
            <TheRecetInvoice />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="border border-white min-w-[380px] h-[350px] rounded-2xl flex justify-center items-center bg-white shadow-custom-shadow">
            <TheSalesByCategory />
          </div>
          <div className="border border-white min-w-[380px] h-[720px] rounded-2xl bg-white shadow-custom-shadow">
            <TheTopProducts />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheDashboard;
