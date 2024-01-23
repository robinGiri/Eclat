import { useState } from "react";
import { HiOutlineTicket } from "react-icons/hi2";
import { RiArrowRightSLine } from "react-icons/ri";
import { CiDiscount1 } from "react-icons/ci";
import { apiConfig } from "../../services/api/config";
import { PaypalButton } from "../payment/ThePaymentButtons";
import Khaltitest from "../payment/KhaltiPayment";
import TheStripPayment from "../payment/TheStripPayment";

function TheCartPlaceOrderCheckout({ total }) {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [buttonText, setButtonText] = useState("Place Order");

  const sendEmail = async () => {
    try {
      const response = await axios.post(
        `${apiConfig.emailSendAllUrl}send-mail`,
        {
          recipient: "abhisekmagarvivo@gmail.com",
          subject: "Confirm",
          text: "Email",
        }
      );

      if (response.status === 200) {
        console.log("Email sent successfully!");
      } else {
        console.log("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handlePlaceOrder = () => {
    setIsOrderPlaced(!isOrderPlaced);
    setButtonText((prevText) =>
      prevText === "Place Order" ? "Cancel Order" : "Place Order"
    );
  };

  return (
    <div className="p-7 pb-0 border border-white bg-white shadow-custom-shadow rounded-lg text-sm">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <div>
            <p>Discount and Payment</p>
          </div>
          <div className="flex justify-between">
            <p className="flex items-center gap-1">
              <HiOutlineTicket className="text-xl text-green-500" />
              Eclat Voucher
            </p>
            <p>No Applicable Voucher</p>
          </div>
          <div className="flex justify-between border-b pb-5">
            <p className="flex items-center gap-1">
              <CiDiscount1 className="text-xl text-green-500" />
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
          <p className="text-gray-500 text-sm">${total}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 text-sm font-semibold">Delivery Fee</p>
          <p className="text-gray-500 text-sm">$120</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 text-sm font-semibold">
            Delivery Discount
          </p>
          <p className="text-gray-500 text-sm">-$120</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500 text-sm font-semibold">Total</p>
          <p className="text-gray-500 text-sm">${total}</p>
        </div>
        <div className="flex justify-end">
          <p className="text-gray-500 text-sm">All taxes included</p>
        </div>
        <div className="mx-[3%] pb-7">
          <button
            className={`border w-full p-3 mt-4 rounded-md hover:text-green-500 hover:border-green-500 ${
              buttonText === "Cancel Order"
                ? "hover:text-red-500 hover:border-red-500"
                : ""
            }`}
            onClick={handlePlaceOrder}
          >
            {buttonText}
          </button>
        </div>
      </div>
      <div
        className={`transition-all duration-1000 pb-4 ${
          isOrderPlaced
            ? "opacity-100 h-[20vh]"
            : "opacity-0 h-0 pointer-events-none"
        }`}
      >
        <div className="flex justify-evenly items-center h-full">
          <Khaltitest />
          <PaypalButton />
          <TheStripPayment />
        </div>
      </div>
    </div>
  );
}

export default TheCartPlaceOrderCheckout;
