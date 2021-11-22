const { Router } = require("express");
const bodyParser = require("body-parser");
const router = Router();
const {
  getAllMoviesController,
  getMovieController,
  addMovieController,
} = require("../controllers/movieControlles");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

// /api/movie
router.get("/", getAllMoviesController);

// /api/movie/:id
router.get("/:id", getMovieController);

// /api/movie
router.post("/", urlencodedParser, addMovieController);

module.exports = router;
