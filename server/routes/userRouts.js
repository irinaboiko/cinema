const { Router } = require("express");
const { getUserController } = require("../controllers/userControllers");
const router = Router();

// /api/user/
router.get("/", getUserController);

module.exports = router;
