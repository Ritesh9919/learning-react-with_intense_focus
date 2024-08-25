import { Component } from "react";

class MovieCard extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="left">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.gbMJtCNw8QKH7bU8DdlsvQHaLH&pid=Api&P=0&h=180"
            alt="movie-image"
          />
        </div>
        <div className="right">
          <div className="top">
            <h2>The avengers</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              deleniti libero excepturi amet quas. Consequuntur, modi assumenda
              odit.
            </p>
            <p>Rs:99</p>
          </div>
          <div className="bottom">
            <h3>Ratings:9.0</h3>
            <p>-*+</p>
            <div className="buttons">
              <button className="fav-btn">Favorite</button>
              <button className="buy-btn">Buy</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
