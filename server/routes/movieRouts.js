const { Router } = require("express");
const router = Router();
const {
  getAllMoviesController,
  getMovieController,
  addMovieController,
  deleteMovieController,
} = require("../controllers/movieControlles");

// /api/movie
router.get("/", getAllMoviesController);

// /api/movie
router.post("/", addMovieController);

// /api/movie/:id
router.get("/:id", getMovieController);

// /api/movie/:id
router.delete("/:id", deleteMovieController);

module.exports = router;
