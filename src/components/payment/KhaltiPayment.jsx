import KhaltiCheckout from "khalti-checkout-web";
import React from "react";
import khaltiVerification from "../../services/payment.verification";

function Khaltitest() {
  let config = {
    // replace this key with yours
    publicKey: "test_public_key_9cedc1faed9242b19074b04493e9696a",
    productIdentity: "1234567890",
    productName: "Drogon",
    productUrl: "http://gameofthrones.com/buy/Dragons",
    eventHandler: {
      onSuccess(payload) {
        const { token } = payload;
        console.log(token);
        // khaltiVerification(token);
      },
      // onError handler is optional
      onError(error) {
        // handle errors
        console.log(error);
      },
      onClose() {
        console.log("widget is closing");
      },
    },
    paymentPreference: [
      "KHALTI",
      "EBANKING",
      "MOBILE_BANKING",
      "CONNECT_IPS",
      "SCT",
    ],
  };
  let checkout = new KhaltiCheckout(config);

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2"
        onClick={(e) => {
          checkout.show({ amount: 1000 });
        }}
      >
        pay
      </button>
    </div>
  );
}

export default Khaltitest;
