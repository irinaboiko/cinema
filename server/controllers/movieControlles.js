const uuid = require("uuid");
const path = require("path");
const Movie = require("../models/movieModel");

const getAllMoviesController = async (req, res) => {
  const { limit = 5, page = 1 } = req.query;
  const skip = limit * (page - 1);

  try {
    const movies = await Movie.find()
      .sort({ name: 1 })
      .skip(skip)
      .limit(Number(limit));

    const count = await Movie.countDocuments();

    res.status(201).json({
      count,
      movies,
    });
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

const getMovieController = async (req, res) => {
  const { id } = req.params;

  try {
    const movie = await Movie.findOne({ _id: id });

    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ message: `${error}, Something went wrong...` });
  }
};

const deleteMovieController = async (req, res) => {
  const { id } = req.params;

  try {
    await Movie.deleteOne({ _id: id });

    res.status(201).json(id);
  } catch (error) {
    res.status(500).json({ message: `${error}, Something went wrong...` });
  }
};

module.exports = {
  getAllMoviesController,
  getMovieController,
  addMovieController,
  deleteMovieController,
};
