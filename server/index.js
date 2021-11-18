require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 5555;
const db = process.env.DB_URL;

//Import Routes
const authRoutes = require("./routes/authRouts");
const userRoutes = require("./routes/userRouts");
const movieRoutes = require("./routes/movieRouts");

//Connect to Mongo DB
const start = async () => {
  try {
    await mongoose.connect(
      db,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log("Connected to DB")
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();

// Routes Middleware
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/movie", movieRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
