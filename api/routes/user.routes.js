const express = require("express");
const userController = require("../controller/user.controller");
const verifyToken = require("../middleware/token.verify");
const uploader = require("../jobs/imageUploaderJob");

const router = express.Router();

// Get all users
router.get("/users", userController.getAllUsers);

// Register user
router.post("/signup", userController.signup);

// Check login
router.get("/login", verifyToken, userController.checkLogin);

// Login user
router.post("/login", userController.login);

// Logout user
router.get("/logout", userController.logout);

// Get user by ID
router.get("/:id", userController.getUserById);

// Update user by Email
router.put("/:email", userController.updateUserByEmail);

// Upload user profile picture
router.patch(
  "/upload",
  uploader.single("image"),
  userController.uploadProfilePicture
);

module.exports = router;
