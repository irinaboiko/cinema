const { Router } = require("express");
const router = Router();
const {
  getUserMoviesCollection,
  updateUserMovieDetails,
} = require("../controllers/userMovieControllers");

// api/userMovie/
router.get("/", getUserMoviesCollection);

// api/userMovie/
router.post("/", updateUserMovieDetails);

module.exports = router;
