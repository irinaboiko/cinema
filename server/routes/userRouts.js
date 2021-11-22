const { Router } = require("express");
const { getUserController } = require("../controllers/userControllers");
const bodyParser = require("body-parser");
const router = Router();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

// /api/user/
router.get("/", urlencodedParser, getUserController);

module.exports = router;
