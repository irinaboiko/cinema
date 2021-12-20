const mongoose = require("mongoose");
const User = require("./userModel");
const Movie = require("./movieModel");
const Schema = mongoose.Schema;

const userMovieSchema = new Schema({
  user_id: {
    //type: mongoose.SchemaType.ObjectId,
    //ref: User,
    type: String,
    required: true,
  },
  movie_id: {
    //type: mongoose.SchemaType.ObjectId,
    //ref: Movie,
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
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

const UserMovie = mongoose.model("UserMovie", userMovieSchema);

module.exports = UserMovie;
