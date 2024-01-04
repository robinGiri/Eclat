import KhaltiCheckout from "khalti-checkout-web";
import React from "react";

function Khaltitest() {
  let config = {
    // replace this key with yours
    publicKey: "test_public_key_0069efbf9f9244faa8b8ab3ea57b6b06",
    productIdentity: "1234567890",
    productName: "Drogon",
    productUrl: "http://gameofthrones.com/buy/Dragons",
    eventHandler: {
      onSuccess(payload) {
        const { token } = payload;
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
