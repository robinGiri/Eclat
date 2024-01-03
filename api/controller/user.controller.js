const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userService = require("../service/user.service");
const { cartService } = require("../service/cart.service");

router.get("/users", async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json({
      code: 200,
      users: users,
      message: "Users data found",
      meta: null,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const hashedPassword = await bcrypt.hash(data.password, salt);
    data.password = hashedPassword;
    const { id } = await userService.save(data);
    console.log(id);
    const cart = await cartService.createCart(id);
    res.json({
      result: user,
      code: 200,
      meta: null,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const data = req.body;
    const userData = await userService.getUserByFilter({ email: data.email });
    if (!userData) {
      res.json({ code: 404, message: "User not found", meta: null });
    }
    const passwordCorrect = await bcrypt.compare(
      data.password,
      userData.password
    );

    if (passwordCorrect) {
      var token = jwt.sign({ email: userData.email }, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });
    } else {
      res.json({ message: "Incorrect password", code: "401", meta: null });
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
    console.log(error);
    next(error);
  }
});

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
    console.log(error);
    next(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const user = await userService.getUserById(userId);
    res.json({
      userdetail: user,
      code: 200,
      meta: null,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
