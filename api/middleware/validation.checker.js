const validationChecker = (checkRole) => {
  (req, res, next) => {
    try {
      const { role } = req.body;
      if (role === checkRole) {
        next();
      } else {
        res.status(403).json({ message: "Access Denied" });
      }
    } catch (error) {
      res.status(500).json({ code: 500, error: error });
    }
  };
};
module.exports = validationChecker;
