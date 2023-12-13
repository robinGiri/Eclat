import React from "react";
import TheAverageRevenue from "./dashboard-components/TheAverageRevenue";
import TheCustomerReturn from "./dashboard-components/TheCustomerReturn";
import TheRevenueVsOrder from "./dashboard-components/TheRevenueVsOrder";
import TheRecetInvoice from "./dashboard-components/TheRecetInvoice";
import TheSalesByCategory from "./dashboard-components/TheSalesByCategory";
import TheTopProducts from "./dashboard-components/TheTopProducts";

function TheDashboard() {
  return (
    <div>
      <div className="flex mt-20 gap-4">
        <div className="w-[65%] m-8 flex flex-col gap-8">
          <div>
            <div className="flex justify-between gap-9">
              <div>
                <TheAverageRevenue />
              </div>
              <div>
                <TheCustomerReturn />
              </div>
            </div>
          </div>
          <div>
            <TheRevenueVsOrder />
          </div>
          <div>
            <TheRecetInvoice />
          </div>
        </div>

        <div>
          <div className="mt-8">
            <TheSalesByCategory />
          </div>
          <div className="mt-8">
            <TheTopProducts />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheDashboard;
