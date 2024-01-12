const express = require("express");
const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51OWghFSIGG22G1kz3YcQAl1za3hWiULXOYNmqmSSTtqOIpbM2XGdIuEY7ZgZ03Kpnr5miJsFGWtrc56do5I0cYBP008Z4VYAh6"
);

router.post("/", async (req, res, next) => {
  try {
    const product = await stripe.products.create({
      name: "Sample Product",
      description: "A sample product description",
    });

    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: 1000, // Replace with the actual amount in cents (e.g., $10.00)
      currency: "usd",
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "https://www.google.com/",
      cancel_url: "https://www.facebook.com/",
    });

    res.json({ id: session.id });
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
});

module.exports = router;
