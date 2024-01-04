const router = require("express").Router();
const paymentVerification = require("../service/payment.verification.service");

router.post("/", async (req, res, next) => {
  const { body } = req;
  console.log(body);

  //   await paymentVerification.khaltiVerification(token);
});

router.get("/all "), async (req, res, next) => {};
module.exports = router;
