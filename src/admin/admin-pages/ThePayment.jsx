import React from "react";
import TheStripPayment from "../../components/payment/TheStripPayment";
import ThePaypalPayment from "../../components/payment/ThePaypalPayment";

function ThePayment() {
  return (
    <div className="flex mt-20">
      <TheStripPayment />
      <ThePaypalPayment />
    </div>
  );
}

export default ThePayment;
