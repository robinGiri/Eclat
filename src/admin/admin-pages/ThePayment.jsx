import React from "react";
import TheStripPayment from "../../components/payment/TheStripPayment";
import ThePaypalPayment from "../../components/payment/ThePaypalPayment";
import TheKhaltiPayment from "../../components/payment/TheKhaltiPayment";
import Khaltitest from "../../pages/Khaltitest";

function ThePayment() {
  return (
    <div className="flex mt-20">
      <Khaltitest />
      <TheStripPayment />
      <ThePaypalPayment />
    </div>
  );
}

export default ThePayment;
