const mongoose = require("mongoose");
const { Schema } = mongoose;

const userMovieSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
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

const UserMovie = mongoose.model("User", userMovieSchema);

module.exports = UserMovie;
