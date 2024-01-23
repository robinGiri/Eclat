const jwt = require("jsonwebtoken");

const verifyToken = () => {
  return (req, res, next) => {
    try {
      console.log("token");
      const authorizationHeader = req.headers.authorization;

      if (!authorizationHeader) {
        throw new Error("Not authorized");
      }

      const token = authorizationHeader.split(" ")[1];

      if (!token) {
        throw new Error("Not authorized");
      }

      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          if (err.name === "TokenExpiredError") {
            throw new Error("token expired");
          }
          throw new Error("invalid token");
        }
        req.decoded = decoded;
        next();
      });
    } catch (error) {
      next(error);
    }
  };
};

module.exports = verifyToken;
