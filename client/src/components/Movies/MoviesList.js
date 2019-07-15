import React from "react";
import Movie from "./Movie";

const MoviesList = ({ movies, label, onSetMovieId }) => (
  <React.Fragment>
    <h5>{label}</h5>
    {movies &&
      movies.map(movie => (
        <Movie key={movie.id} {...movie} onSetMovieId={onSetMovieId} />
      ))}
  </React.Fragment>
);

export default MoviesList;
