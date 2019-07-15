import React from "react";
import MoviesDisplay from "./MoviesDisplay";
import styles from "./styles.js";

const MoviesContainer = props => {
  const {
    searchValue,
    onSearchInput,
    onSearchRequest,
    onDisplayPopular
  } = props;
  return (
    <div>
      <input
        style={styles.searchBar}
        value={searchValue}
        onChange={onSearchInput}
      />
      <button
        style={styles.button}
        disabled={!searchValue}
        onClick={onSearchRequest}
      >
        Search
      </button>
      <button style={styles.button} onClick={onDisplayPopular}>
        Popular
      </button>
      <MoviesDisplay {...props} />
    </div>
  );
};

export default MoviesContainer;
