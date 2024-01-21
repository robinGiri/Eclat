const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userService = require("../service/user.service");
const { cartService } = require("../service/cart.service");
const verifyToken = require("../middleware/token.verify");
const uploader = require("../jobs/imageUploaderJob");

//get all users
router.get("/users", async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.json({
      code: 200,
      users: users,
      message: "Users data found",
      meta: null,
    });
  } catch (error) {
    next(error);
  }
});

//register the user
router.post("/signup", async (req, res, next) => {
  try {
    let data = req.body;
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const hashedPassword = await bcrypt.hash(data.password, salt);
    data.password = hashedPassword;
    data = { ...data, image: "" };
    const { id } = await userService.save(data);
    const cart = await cartService.createCart(id);
    res.json({
      result: id,
      code: 200,
      meta: null,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//check login when the user load the login page
router.get("/login", verifyToken, async (req, res, next) => {
  const user = req.user;
  if (req.user) {
    res.json({
      user: user,
      code: 200,
      meta: null,
    });
  }
});

//Login the user
router.post("/login", async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);
    const userData = await userService.getUserByFilter({ email: data.email });
    console.log(userData);
    if (!userData) {
      res
        .status(404)
        .json({ code: 404, message: "User not found", meta: null });
    }
    const passwordCorrect = await bcrypt.compare(
      data.password,
      userData.password
    );

    if (passwordCorrect) {
      var token = jwt.sign(userData, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });
    } else {
      res.json({ message: "Incorrect password", code: "401", meta: null });
    }
    res.json({
      userdetail: userData,
      token: token,
      code: 200,
      meta: null,
    });
  } catch (error) {
    next(error);
  }
});

//Logout the user on the basis of token
router.get("/logout", async (req, res, next) => {
  try {
    res.clearCookie("jwt");
    res.json({
      result: "User Logout Successfully",
      code: 200,
      meta: null,
    });
  } catch (error) {
    next(error);
  }
});

//get user by id
router.get("/:id", async (req, res, next) => {
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

//get user by Email
router.put("/:email", async (req, res, next) => {
  try {
    const email = req.params.email;
    const data = req.body;
    delete data.Cart;
    console.log(data);
    const findUser = await userService.getUserByFilter({ email: email });
    if (findUser) {
      const user = await userService.updateUser(email, data);
      res.json({
        userdetail: user,
        code: 200,
        meta: null,
      });
    } else {
      throw new Error("User Not found");
    }
  } catch (error) {
    next(error);
  }
});

//upload user profile picture
router.patch("/upload", uploader.single("image"), async (req, res, next) => {
  const id = parseInt(req.body.id);
  const file = req.file.filename.split(".");
  try {
    const userData = await userService.getUserById(id);
    if (userData) {
      const user = await userService.updateImage(id, file[0]);
      res.json({
        userdetail: user,
        code: 200,
        meta: null,
      });
    }
    throw new Error("User Dont Exist");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
