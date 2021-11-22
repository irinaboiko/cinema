const uuid = require("uuid");
const path = require("path");
const Movie = require("../models/movieModel");

const getAllMoviesController = async (req, res) => {
  try {
    const movies = await Movie.find();

    res.status(201).json(movies);
  } catch (error) {
    res.status(500).json({ message: `${error}, Something went wrong...` });
  }
};

const getMovieController = async (req, res) => {
  const { movieId } = req.params;

  try {
    const movie = await Movie.find({ _id: movieId });

    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ message: `${error}, Something went wrong...` });
  }
};

const addMovieController = async (req, res) => {
  try {
    const { name, genre, description, runtime, age_rating, released, country } =
      req.body;

    const { image } = req.files;
    const fileName = `${uuid.v4()}.jpg`;
    image.mv(path.resolve(__dirname, "..", "static", fileName));

    const movie = new Movie({
      name,
      image: fileName,
      genre,
      description,
      runtime,
      age_rating,
      released,
      country,
    });

    await movie.save();

    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ message: `${error}, Something went wrong...` });
  }
};

module.exports = {
  getAllMoviesController,
  getMovieController,
  addMovieController,
};