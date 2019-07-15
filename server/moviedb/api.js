const axios = require("axios");
const API_KEY = process.env.API_KEY;
const MOVIE_BASE_URL = process.env.MOVIE_BASE_URL;

const getPopularMovies = () =>
  axios
    .get(
      `${MOVIE_BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then(response => {
      return response.data.results;
    })
    .catch(error => {
      console.log(error);
    });

const searchMovies = ({ title }) =>
  axios
    .get(
      `${MOVIE_BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`
    )
    .then(response => {
      return response.data.results;
    })
    .catch(error => {
      console.log(error);
    });

const getMovieDetails = ({ id }) =>
  axios
    .get(
      `${MOVIE_BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US
`
    )
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });

module.exports = { getPopularMovies, searchMovies, getMovieDetails };
