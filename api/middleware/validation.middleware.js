const { z } = require("zod");

const validatedRequest = (schema) => {
  return (req, res, next) => {
    try {
      console.log(req.body);
      let data = req.body;
      let validated = schema.parse(data);
      next();
    } catch (exceptation) {
      next(exceptation);
    }
  };
};
module.exports = validatedRequest;
