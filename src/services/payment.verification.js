import axios from "axios";

const khaltiVerification = async (token) => {
  let data = {
    token: "QUao9cqFzxPgvWJNi9aKac",
    amount: 1000,
  };

  let config = {
    headers: {
      Authorization: "Key test_secret_key_20864f0fe5e04beba9635073f5936a52",
    },
  };

  const verification = await axios.post(
    "/api/v2/payment/verify/",
    data,
    config
  );
  console.log(verification);
};
export default khaltiVerification;
