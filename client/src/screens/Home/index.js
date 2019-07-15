import React from "react";
import MoviesContainer from "../../components/Movies/MoviesContainer";
import MovieDetails from "../../components/Movies/MovieDetails";
import "./styles.css";
import { getMoviesFromSearch, getPopularMovies } from "../../api/movies";

export default class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPopular: true,
      searchValue: "",
      popularMovies: [],
      searchResultsMovies: [],
      movieId: null
    };
  }

  componentDidMount = async () => {
    const popularMovies = await getPopularMovies();
    this.setState({ popularMovies });
  };

  handleSearchInput = event => {
    this.setState({ searchValue: event.target.value });
  };

  handleSearchRequest = async () => {
    const { searchValue } = this.state;
    const searchResultsMovies = await getMoviesFromSearch({
      query: searchValue
    });
    this.setState({ searchResultsMovies, displayPopular: false });
  };

  handleSetMovieId = id => {
    this.setState({ movieId: id });
  };

  handleDisplayPopular = () => {
    this.setState({ displayPopular: true });
  };

  handleExitDetailsView = () => {
    this.setState({ movieId: null });
  };

  render = () => {
    const { movieId } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Movie Search App</h1>
          {movieId ? (
            <MovieDetails
              movieId={movieId}
              onGoBack={this.handleExitDetailsView}
            />
          ) : (
            <MoviesContainer
              {...this.state}
              onSearchInput={this.handleSearchInput}
              onSearchRequest={this.handleSearchRequest}
              onDisplayPopular={this.handleDisplayPopular}
              onSetMovieId={this.handleSetMovieId}
            />
          )}
        </header>
      </div>
    );
  };
}
