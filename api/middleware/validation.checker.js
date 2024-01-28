const validationChecker = (checkRole) => {
  return (req, res, next) => {
    try {
      const role = req.decoded.role.toLowerCase();
      checkRole = checkRole.toLowerCase();
      if (checkRole === role) {
        next();
      } else {
        throw new Error("Authorization Invalid");
      }
    } catch (error) {
      next(error);
    }
  };
};
module.exports = validationChecker;
