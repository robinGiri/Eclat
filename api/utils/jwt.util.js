const jwt = require('jsonwebtoken');

const extractUserIDFromToken = (token, secretKey) => {
  try {
    const decodedToken = jwt.verify(token, secretKey);
    const userID = decodedToken.userID;

    return userID;
  } catch (error) {
    console.error('Error extracting userID from token:', error);
    return null;
  }
};
module.exports = {extractUserIDFromToken}