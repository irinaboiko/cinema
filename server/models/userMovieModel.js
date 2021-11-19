const { Schema, model, Types } = require("mongoose");

const userMovieSchema = new Schema({
  _id: {
    type: Types.ObjectID,
    required: true,
  },
  user_id: {
    type: Types.ObjectID,
    required: true,
  },
  movie_id: {
    type: Types.ObjectID,
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

const UserMovie = model("User", userMovieSchema);

module.exports = UserMovie;
