const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userMovieSchema = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  movie_id: {
    type: String,
    required: true,
  },
  user_rating: Number,
  is_watched: {
    type: Boolean,
    default: false,
  },
  is_favorite: {
    type: Boolean,
    default: false,
  },
  is_watch_later: {
    type: Boolean,
    default: false,
  },
});

const UserMovie = mongoose.model("UserMovie", userMovieSchema);

module.exports = UserMovie;
