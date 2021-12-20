const UserMovie = require("../models/userMovieModel");

const getUserFavouriteMovies = async (req, res) => {
  const { userId } = req.body;

  try {
    const movies = await UserMovie.find({
      user_id: userId,
      is_favorite: true,
    });

    res.status(201).json(movies);
  } catch (error) {
    res.status(500).json({ message: `${error}, Something went wrong...` });
  }
};

const updateMovieFavorite = async (req, res) => {
  const { userId, movieId, isFavorite } = req.body;
  const isFavoriteBoolean = isFavorite === "true";

  try {
    const userMovie = await UserMovie.findOne({
      user_id: userId,
      movie_id: movieId,
    });

    if (!userMovie) {
      const userMovieToCreate = new UserMovie({
        user_id: userId,
        movie_id: movieId,
        is_favorite: isFavoriteBoolean,
      });

      await userMovieToCreate.save();
    } else {
      await UserMovie.updateOne(
        { user_id: userId, movie_id: movieId },
        { $set: { is_favorite: isFavoriteBoolean } }
      );
    }

    const responseMessagePlaceholder = isFavoriteBoolean
      ? "added to"
      : "removed from";

    res.status(201).json({
      message: `The movie was ${responseMessagePlaceholder} favourites`,
    });
  } catch (error) {
    res.status(500).json({ message: `${error}, Something went wrong...` });
  }
};

module.exports = {
  getUserFavouriteMovies,
  updateMovieFavorite,
};
