const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

// router.get("/", authController.signup);

router.post("/signup", authController.signup);
router.get("/login", authController.login);

module.exports = router;
