import React from "react";
import TheStripPayment from "../../components/payment/TheStripPayment";
import ThePaypalPayment from "../../components/payment/ThePaypalPayment";
import Khaltitest from "../../components/payment/KhaltiPayment";

function ThePayment() {
  return (
    <div className="flex flex-col mt-20">
      <TheStripPayment />
      <Khaltitest />
      <ThePaypalPayment />
    </div>
  );
}

export default ThePayment;
