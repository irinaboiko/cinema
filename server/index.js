require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 5555;
const db = process.env.DB_URL;

const app = express();

app.use(cors());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));

//Import Routes
const authRoutes = require("./routes/authRouts");
const userRoutes = require("./routes/userRouts");
const movieRoutes = require("./routes/movieRouts");
const userMovieRoutes = require("./routes/userMovieRouts");

//Add Middleware
app.use(express.json());
app.use(express.urlencoded());

//Routes Middleware
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/movie", movieRoutes);
app.use("/api/userMovie", userMovieRoutes);

//Connect to Mongo DB and start app
const start = async () => {
  try {
    await mongoose.connect(
      db,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log("Connected to DB")
    );
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
