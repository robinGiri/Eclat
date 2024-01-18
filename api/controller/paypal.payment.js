const paypal = require("paypal-rest-sdk");
const router = require("express").Router();
paypal.configure({
  mode: "sandbox", // Set to 'live' for production
  client_id:
    "AYWQir3fba10XbNKYWBCOzkzuhMlU0CDtenQ9gh4Z9GXtq-7hF5im_I-7bc5w960farmJaw9_BvLeXG1",
  client_secret:
    "EFuHBrVhbtfSptRpNNvoyt_kzf82W98rxV3Pz3vorw3iIqq4TcnEGctAhT4-W6Ng7wBJkUarTh8okMIY",
});

// Set up an endpoint to create a PayPal payment
router.post("/api/create-payment", (req, res) => {
  const { amount } = req.body;

  const createPaymentJson = {
    intent: "sale",
    payer: {
      payment_method: "paypal",
    },
    transactions: [
      {
        amount: {
          total: amount,
          currency: "USD",
        },
      },
    ],
    redirect_urls: {
      return_url: "google.com",
      cancel_url: "facebook.com",
    },
  };

  paypal.payment.create(createPaymentJson, (error, payment) => {
    if (error) {
      throw error;
    } else {
      for (const link of payment.links) {
        if (link.rel === "approval_url") {
          res.json({ approvalUrl: link.href });
        }
      }
    }
  });
});

// Set up an endpoint to execute a PayPal payment
router.post("/api/execute-payment", (req, res) => {
  const { paymentId, payerId } = req.body;

  const executePaymentJson = {
    payer_id: payerId,
  };

  paypal.payment.execute(paymentId, executePaymentJson, (error, payment) => {
    if (error) {
      throw error;
    } else {
      res.json({ payment });
    }
  });
});

module.exports = router;
