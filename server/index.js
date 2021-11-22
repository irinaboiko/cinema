require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5555;
const db = process.env.DB_URL;

const app = express();
app.use(fileUpload({}));

//Import Routes
const authRoutes = require("./routes/authRouts");
const userRoutes = require("./routes/userRouts");
const movieRoutes = require("./routes/movieRouts");

// Routes Middleware
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/movie", movieRoutes);

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
