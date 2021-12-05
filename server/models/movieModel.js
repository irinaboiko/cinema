const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: String,
  genre: [String],
  description: {
    type: String,
    maxlength: 1000,
  },
  runtime: String,
  age_rating: String,
  released: String,
  country: String,
  createdAt: {
    type: Date,
    immutable: true,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
