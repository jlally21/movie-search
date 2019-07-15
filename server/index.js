require("dotenv").config();
const express = require("express");
const {
  getPopularMovies,
  searchMovies,
  getMovieDetails
} = require("./moviedb/api");

const app = express();
const PORT = process.env.PORT;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/popular", async (req, res) => {
  const popular = await getPopularMovies();
  res.send(popular);
});

app.get("/search/movie/:title", async (req, res) => {
  const { title } = req.params;
  const searchResults = await searchMovies({ title });
  res.send(searchResults);
});

app.get("/movie/:id", async (req, res) => {
  const { id } = req.params;
  const movieDetails = await getMovieDetails({ id });
  res.send(movieDetails);
});

app.listen(PORT, () => console.log(`Movie app listening on port ${PORT}!`));
