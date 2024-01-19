const jwt = require('jsonwebtoken');
const secretKey = "12345678";

const extractUserIDFromToken = (token) => {
  try {
    const decodedToken = jwt.verify(token, secretKey);
    const userID = decodedToken.id;

    return userID;
  } catch (error) {
    console.error('Error extracting userID from token:', error);
    return null;
  }
};
module.exports = {extractUserIDFromToken}