import React from "react";
import styles from "./styles";

const Movie = props => (
  <div style={{ display: "flex" }}>
    <div>{props.title}</div>
    <button
      style={styles.detailsButton}
      onClick={() => props.onSetMovieId(props.id)}
    >
      Get Details
    </button>
  </div>
);

export default Movie;
