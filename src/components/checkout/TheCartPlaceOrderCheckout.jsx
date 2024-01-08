import React from "react";
import { HiOutlineTicket } from "react-icons/hi2";
import { RiArrowRightSLine } from "react-icons/ri";
import { CiDiscount1 } from "react-icons/ci";
import { apiConfig } from "../../services/api/config";

function TheCartPlaceOrderCheckout({ total }) {
  const sendEmail = async () => {
    try {
      const response = await axios.post(`${apiConfig.emailSendAllUrl}send-mail`, {
        recipient: "abhisekmagarvivo@gmail.com",
        subject: "Confirm",
        text: "Email",
      });

      if (response.status === 200) {
        console.log("Email sent successfully!");
      } else {
        console.log("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };
  return (
    <div className="p-7 border border-white bg-white shadow-custom-shadow rounded-lg">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <div>
            <p>Discount and Payment</p>
          </div>
          <div className="flex justify-between">
            <p className="flex items-center gap-1">
              <HiOutlineTicket className="text-xl text-orange-600" />
              Eclat Voucher
            </p>
            <p>No Applicable Voucher</p>
          </div>
          <div className="flex justify-between border-b pb-5">
            <p className="flex items-center gap-1">
              <CiDiscount1 className="text-xl text-orange-600" />
              Promo Code
            </p>
            <p className="flex items-center text-gray-500">
              Enter Store/Eclat Code <RiArrowRightSLine className="text-xl" />
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold">Order Summary</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 text-sm font-semibold">Items Total</p>
          <p className="text-gray-500 text-sm font-semibold">${total}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 text-sm font-semibold">Delivery Fee</p>
          <p className="text-gray-500 text-sm font-semibold">$120</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 text-sm font-semibold">
            Delivery Discount
          </p>
          <p className="text-gray-500 text-sm font-semibold">-$120</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 text-sm font-semibold">Total</p>
          <p className="text-gray-500 text-sm font-semibold">${total}</p>
        </div>
        <div className="flex justify-end">
          <p className="text-gray-500 text-sm font-semibold">
            All taxes included
          </p>
        </div>
        <div className="mx-[3%]">
          <button
            className="border w-full p-3 mt-4 rounded-md bg-orange-500 hover:bg-orange-600 text-white"
            onClick={sendEmail}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default TheCartPlaceOrderCheckout;
