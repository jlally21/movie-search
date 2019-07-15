import React from "react";
import MoviesList from "./MoviesList";

const MoviesDisplay = ({
  popularMovies,
  searchResultsMovies,
  displayPopular,
  onSetMovieId
}) => {
  if (!displayPopular) {
    if (searchResultsMovies.length > 0) {
      return (
        <MoviesList
          movies={searchResultsMovies}
          label="Search Results"
          onSetMovieId={onSetMovieId}
        />
      );
    }
    return <div>Sorry, no movies found</div>;
  }
  return (
    <MoviesList
      movies={popularMovies}
      label="Popular Movies"
      onSetMovieId={onSetMovieId}
    />
  );
};

export default MoviesDisplay;
