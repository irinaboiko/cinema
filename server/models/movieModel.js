const { Schema, model, Types } = require("mongoose");

const movieSchema = new Schema({
  _id: {
    type: Types.ObjectID,
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

const Movie = model("User", movieSchema);

module.exports = Movie;
