const { Router } = require("express");
const bodyParser = require("body-parser");
const router = Router();
const {
  signUpController,
  signInController,
} = require("../controllers/authControllers");
const {
  isValidCredentialsMiddleware,
} = require("../middlewares/authMiddlewares");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

// /api/auth/signup
router.post("/signup", urlencodedParser, signUpController);

// /api/auth/signin
router.post(
  "/signin",
  urlencodedParser,
  isValidCredentialsMiddleware,
  signInController
);

module.exports = router;
