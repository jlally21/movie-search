import React from "react";
import { getMovieDetails } from "../../api/movies";
import styles from "./styles";

export default class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movieDetails: null };
  }

  componentDidMount = async () => {
    const { movieId } = this.props;
    const movieDetails = await getMovieDetails({ movieId });
    this.setState({ movieDetails });
  };

  render = () => {
    const { movieDetails } = this.state;
    const { onGoBack } = this.props;
    if (movieDetails) {
      const {
        poster_path,
        budget,
        homepage,
        overview,
        popularity,
        release_date,
        revenue,
        runtime
      } = movieDetails;
      return (
        <div style={{ marginLeft: "100px", marginRight: "100px" }}>
          <div style={styles.titleContainer}>
            <h2>{movieDetails.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
              alt="poster"
              style={{ height: "200px", margin: "20px" }}
            />
          </div>
          <p>{overview}</p>
          <div style={styles.detailsContainer}>
            <div>Release Date: {release_date}</div>
            <div>Revenue: ${revenue}</div>
            <div>Runtime: {runtime} minutes</div>
            <div>Budget: ${budget}</div>
            <div>
              Hompepage:{" "}
              <a style={styles.link} href={homepage}>
                {homepage}
              </a>
            </div>
            <div>Popularity: {popularity}</div>
          </div>
          <button style={styles.button} onClick={onGoBack}>
            Go Back
          </button>
        </div>
      );
    }
    return <div>Loading...</div>;
  };
}
