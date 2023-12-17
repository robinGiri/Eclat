const { default: axios } = require("axios");

const router = require("express").Router();

router.post("/", async (req, res) => {
  const payload = req.body;
  const khaltiResponse = await axios.post(
    "https://a.khalti.com/api/v2/epayment/initiate/",
    payload,
    {
      headers: {
        Authorization: `test_public_key_0069efbf9f9244faa8b8ab3ea57b6b06`,
      },
    }
  );
  console.log(khaltiResponse);
});

module.exports = router;
