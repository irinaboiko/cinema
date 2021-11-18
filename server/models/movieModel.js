const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  genre: [String],
  description: {
    type: String,
    maxlength: 1000,
  },
  runtime: String,
  age_rating: String,
  released: String,
  count: String,
});

const Movie = mongoose.model("User", movieSchema);

module.exports = Movie;
