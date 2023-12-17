const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userService = require("../service/user.service");
const e = require("cors");
require("dotenv").config();
router.get("/", (req, res) => {
  res.json(users);
});
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const hashedPassword = await bcrypt.hash(data.password, salt);
    data.password = hashedPassword;
    const user = await userService.save(data);
    res.json({
      result: user,
      code: 200,
      meta: null,
    });
  } catch (error) {
    res.status(500).send();
    console.log(error);
  }
});
router.post("/login", async (req, res) => {
  try {
    const data = req.body;
    const userData = await userService.getUserByFilter({ email: data.email });
    const passwordCorrect = await bcrypt.compare(
      data.password,
      userData.password
    );

    if (passwordCorrect) {
      var token = jwt.sign({ email: userData.email }, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });
    }

    userService.updateUser(userData.email, { token: token });
    res.json({
      userdetail: {
        name: userData.name,
        email: userData.email,
        role: userData.role,
      },
      token: token,
      code: 200,
      meta: null,
    });
  } catch (error) {
    res.status(500).send();
  }
});
router.get("/all", async (req, res) => {
  try {
    const users = await userService.getAllUser();
    res.json({
      result: users,
      code: 200,
      meta: null,
    });
  } catch (e) {
    res.status(500).send();
  }
}),
  router.get("/logout", async (req, res) => {
    try {
      const token = req.headers.authorization;
      const tokenWithoutBearer = token.split(" ")[1];
      const { email } = await jwt.verify(
        tokenWithoutBearer,
        process.env.JWT_SECRET
      );
      await userService.logout(email);
      res.json({
        result: "User Logout Successfully",
        code: 200,
        meta: null,
      });
    } catch (error) {
      res.status(500).send();
    }
  });

module.exports = router;
