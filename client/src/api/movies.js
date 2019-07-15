import axios from "axios";

export const getPopularMovies = () =>
  axios
    .get("http://localhost:4000/popular")
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return [];
    });

export const getMoviesFromSearch = ({ query }) =>
  axios
    .get(`http://localhost:4000/search/movie/${query}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return [];
    });

export const getMovieDetails = ({ movieId }) =>
  axios
    .get(`http://localhost:4000/movie/${movieId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
