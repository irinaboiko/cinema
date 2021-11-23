const { Router } = require("express");
const router = Router();
const {
  getAllMoviesController,
  getMovieController,
  addMovieController,
} = require("../controllers/movieControlles");

// /api/movie
router.get("/", getAllMoviesController);

// /api/movie/:id
router.get("/:id", getMovieController);

// /api/movie
router.post("/", addMovieController);

module.exports = router;
