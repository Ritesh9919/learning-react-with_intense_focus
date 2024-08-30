import { Component } from "react";

class MovieCard extends Component {
  render() {
    const { title, plot, price, rating, star, fav, cart, poster } =
      this.props.movie;
    const { addStar, decStar, toggleCart, toggleFav } = this.props;
    return (
      <div className="movie-card">
        <div className="card">
          <div className="left">
            <img src={poster} />
          </div>
          <div className="right">
            <div className="top">
              <h2>{title}</h2>
              <p>{plot}</p>
              <p>Rs: {price}</p>
            </div>
            <div className="bottom">
              <h3>{rating}</h3>
              <div className="rating">
                <img
                  onClick={() => decStar(this.props.movie)}
                  src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                />
                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />
                <img
                  onClick={() => addStar(this.props.movie)}
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png"
                />
                <span>{star}</span>
              </div>
              <div className="buttons">
                <button
                  onClick={() => toggleFav(this.props.movie)}
                  className={fav ? "btn-unfav" : "btn-fav"}
                >
                  {fav ? "Unfavorite" : "Favorite"}
                </button>
                <button
                  className={cart ? "btn-remove-to-cart" : "btn-add-to-cart"}
                  onClick={() => toggleCart(this.props.movie)}
                >
                  {cart ? "Remove to cart" : "Add to cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
