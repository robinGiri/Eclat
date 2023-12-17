import KhaltiCheckout from "khalti-checkout-web";
import React from "react";

let config = {
  // replace this key with yours
  publicKey: "",
  productIdentity: "1234567890",
  productName: "Drogon",
  productUrl: "http://gameofthrones.com/buy/Dragons",
  eventHandler: {
    onSuccess(payload) {
      // hit merchant api for initiating verfication
      console.log(payload);
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

function Khaltitest() {
  let checkout = new KhaltiCheckout(config);

  return (
    <div>
      <button
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
