import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const TheStripPayment = () => {
  const stripPayURL = "http://localhost:4000/api/v1/strip-payment";

  const makePayment = async () => {
    const strip = await loadStripe(
      //publishable key
      "pk_test_51OWghFSIGG22G1kzpBeuoHClo5AqUxNlaQPa0PREudBQghKWyJKFN6hFnAMgsqZGIF3htvAM2knhjQLpphdScIYQ00Q7t3s7SU"
    );
    const {
      data: { id },
    } = await axios.post(stripPayURL);
    // const session = await JSON.parse(response);
    const result = await strip.redirectToCheckout({
      sessionId: id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };
  return (
    <div>
      <button onClick={makePayment}>Strip</button>
    </div>
  );
};

export default TheStripPayment;
