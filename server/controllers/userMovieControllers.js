const UserMovie = require("../models/userMovieModel");

const getUserMoviesCollection = async (req, res) => {
  const { userId, option } = req.body;

  try {
    const moviesCollection = await UserMovie.find({
      user_id: userId,
      [option]: true,
    });

    res.status(201).json(moviesCollection);
  } catch (error) {
    res.status(500).json({ message: `${error}, Something went wrong...` });
  }
};

const updateUserMovieDetails = async (req, res) => {
  const { userId, movieId, option, value } = req.body;
  const valueBoolean = value === "true";

  try {
    const userMovie = await UserMovie.findOne({
      user_id: userId,
      movie_id: movieId,
    });

    if (!userMovie) {
      const userMovieToCreate = new UserMovie({
        user_id: userId,
        movie_id: movieId,
        [option]: valueBoolean,
      });

      await userMovieToCreate.save();
    } else {
      await UserMovie.updateOne(
        { user_id: userId, movie_id: movieId },
        { $set: { [option]: valueBoolean } }
      );
    }

    const responseMessagePlaceholder = valueBoolean ? "were" : "were not";

    res.status(201).json({
      message: `The movie details ${responseMessagePlaceholder} updated`,
    });
  } catch (error) {
    res.status(500).json({ message: `${error}, Something went wrong...` });
  }
};

module.exports = {
  getUserMoviesCollection,
  updateUserMovieDetails,
};
