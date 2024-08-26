import { Component } from "react";

class MovieCard extends Component {
  constructor() {
    super();
    this.state = {
      title: "The Avengers",
      plot: "Supernature power shown in movie.",
      price: 99,
      rating: 8.9,
      star: 0,
      fav: false,
      cart: false,
    };
  }

  addStar = () => {
    if (this.state.star >= 5) {
      return;
    }
    this.setState({
      star: this.state.star + 0.5,
    });
  };

  decStar = () => {
    if (this.state.star <= 0) {
      return;
    }
    this.setState({
      star: this.state.star - 0.5,
    });
  };

  toggleFav = () => {
    this.setState({
      fav: !this.state.fav,
    });
  };

  toggleCart = () => {
    this.setState({
      cart: !this.state.cart,
    });
  };

  render() {
    return (
      <div className="movie-card">
        <div className="card">
          <div className="left">
            <img src="https://up.yimg.com/ib/th?id=OIP.gbMJtCNw8QKH7bU8DdlsvQHaLH&pid=Api&rs=1&c=1&qlt=95&w=74&h=112" />
          </div>
          <div className="right">
            <div className="top">
              <h2>{this.state.title}</h2>
              <p>{this.state.plot}</p>
              <p>Rs: {this.state.price}</p>
            </div>
            <div className="bottom">
              <h3>{this.state.rating}</h3>
              <div className="rating">
                <img
                  onClick={this.decStar}
                  src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                />
                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />
                <img
                  onClick={this.addStar}
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png"
                />
                <span>{this.state.star}</span>
              </div>
              <div className="buttons">
                <button
                  onClick={this.toggleFav}
                  className={this.state.fav ? "btn-unfav" : "btn-fav"}
                >
                  {this.state.fav ? "Unfavorite" : "Favorite"}
                </button>
                <button
                  className={
                    this.state.cart ? "btn-remove-to-cart" : "btn-add-to-cart"
                  }
                  onClick={this.toggleCart}
                >
                  {this.state.cart ? "Remove to cart" : "Add to cart"}
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
