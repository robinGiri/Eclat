const router = require("express").Router();
const paymentVerification = require("../service/payment.verification.service");

router.post("/", async (req, res) => {
  const { body } = req;
  console.log(body);

  //   await paymentVerification.khaltiVerification(token);
});
module.exports = router;
