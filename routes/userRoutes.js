const express = require("express");
const {
  signup,
  verifyOTP,
  login,
  getUserDetails,
  deleteAccount,
} = require("../controllers/userController");
const auth = require("../middleware/auth");

const router = express.Router();

// Routes
router.post("/signup", signup);
router.post("/verify", verifyOTP);
router.post("/login", login);
router.get("/me", auth, getUserDetails);
router.delete("/delete", auth, deleteAccount);

module.exports = router;
