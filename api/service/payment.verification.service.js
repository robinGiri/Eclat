const axios = require("axios");
class PaymentVerification {
  async khaltiVerification(data) {
    let config = {
      headers: {
        Authorization: "Key test_secret_key_2b9ffb1c2afd44c898413ad92ba08820",
      },
    };
    try {
      const response = axios.post(
        "https://khalti.com/api/v2/payment/verify/",
        data,
        config
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
}

const paymentVerification = new PaymentVerification();
module.exports = paymentVerification;
