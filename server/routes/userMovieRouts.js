const { Router } = require("express");
const router = Router();
const {
  getUserFavouriteMovies,
  updateMovieFavorite,
} = require("../controllers/userMovieControllers");

// api/userMovie/favourite
router.get("/favourite", getUserFavouriteMovies);

// api/userMovie/favourite
router.post("/favourite", updateMovieFavorite);

module.exports = router;
