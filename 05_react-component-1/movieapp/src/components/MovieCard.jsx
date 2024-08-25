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
            <h2>The Avengers</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              deleniti libero excepturi amet quas. Consequuntur, modi assumenda
              odit.
            </p>
            <p>Rs:99</p>
          </div>
          <div className="bottom">
            <h3>9.0</h3>
            <div className="star">
              <img src="https://cdn-icons-png.flaticon.com/128/2732/2732689.png" />
              <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />
              <img src="https://cdn-icons-png.flaticon.com/128/748/748113.png" />
              <span style={{ marginLeft: "5px" }}>0</span>
            </div>
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
