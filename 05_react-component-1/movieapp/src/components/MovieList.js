import { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component {
  render() {
    const { movies, addStar, decStar, toggleCart, toggleFav } = this.props;
    return (
      <div className="movieList">
        {movies.map((movie, index) => (
          <MovieCard
            movie={movie}
            addStar={addStar}
            decStar={decStar}
            toggleFav={toggleFav}
            toggleCart={toggleCart}
            key={movie.id}
          />
        ))}
      </div>
    );
  }
}

export default MovieList;
