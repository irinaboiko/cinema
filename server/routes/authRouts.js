const { Router } = require("express");
const router = Router();
const {
  signUpController,
  signInController,
} = require("../controllers/authControllers");
const {
  isValidCredentialsMiddleware,
} = require("../middlewares/authMiddlewares");

// /api/auth/signup
router.post("/signup", signUpController);

// /api/auth/signin
router.post("/signin", isValidCredentialsMiddleware, signInController);

module.exports = router;
