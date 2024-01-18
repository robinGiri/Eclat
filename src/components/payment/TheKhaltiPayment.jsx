import React from "react";
import axios from "axios";

const TheKhaltiPayment = () => {
  const handelPayment = async () => {
    try {
      const response = await axios.post(
        "https://test-pay.khalti.com/?pidx=mEaALJ9XguGqLJPnwBEXpL"
      );
    } catch (error) {
      console.log(error);
    }
  };

  const initiatePayment = async () => {
    try {
      const response = await axios.post(
        "https://a.khalti.com/api/v2/epayment/initiate/",
        {
          return_url: "https://example.com/payment/",
          website_url: "https://example.com/",
          amount: 1300,
          purchase_order_id: "test12",
          purchase_order_name: "test",
          customer_info: {
            name: "Ashim Upadhaya",
            email: "example@gmail.com",
            phone: "9811496763",
          },
          amount_breakdown: [
            {
              label: "Mark Price",
              amount: 1000,
            },
            {
              label: "VAT",
              amount: 300,
            },
          ],
          product_details: [
            {
              identity: "1234567890",
              name: "Khalti logo",
              total_price: 1300,
              quantity: 1,
              unit_price: 1300,
            },
          ],
        },
        {
          headers: {
            Authorization:
              "key test_secret_key_20864f0fe5e04beba9635073f5936a52",
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <>
      <button onClick={initiatePayment}>khalti Pay</button>
    </>
  );
};

export default TheKhaltiPayment;
