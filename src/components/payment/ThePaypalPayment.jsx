import React, { useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";

const ThePaypalPayment = () => {
  const [paymentId, setPaymentId] = useState(null);

  const createPayment = async (amount) => {
    try {
      const response = await fetch("/api/create-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });

      const { approvalUrl } = await response.json();
      window.location.href = approvalUrl;
    } catch (error) {
      console.error("Error creating payment:", error);
    }
  };

  const executePayment = async () => {
    try {
      const response = await fetch("/api/execute-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ paymentId, payerId: "989" }), // Replace with actual payer ID
      });

      const { payment } = await response;
      console.log("Payment executed successfully:", payment);
    } catch (error) {
      console.error("Error executing payment:", error);
    }
  };

  return (
    <div>
      <PayPalButton
        amount="10.00"
        onSuccess={(details, data) => {
          setPaymentId(data.orderID);
          executePayment();
        }}
        options={{
          clientId:
            "AYWQir3fba10XbNKYWBCOzkzuhMlU0CDtenQ9gh4Z9GXtq-7hF5im_I-7bc5w960farmJaw9_BvLeXG1",
        }}
      />
    </div>
  );
};

export default ThePaypalPayment;