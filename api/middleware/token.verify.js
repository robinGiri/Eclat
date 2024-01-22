const jwt = require("jsonwebtoken");

const verifyToken = () => {
  return (req, res, next) => {
    try {
      const token = req.cookies.jwt;

      if (!token) {
        return res.status(403).json({ message: "Token not found" });
      }

      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          if (err.name === "TokenExpiredError") {
            console.log("Token has expired");
          }
          return res.status(401).json({ message: "Invalid Token" });
        }

        req.body.decoded = decoded;
        next();
      });
    } catch (error) {
      next(error);
    }
  };
};
module.exports = verifyToken;
