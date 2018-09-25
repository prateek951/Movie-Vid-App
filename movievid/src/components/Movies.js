import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/Like";
import Pagination from "./common/Pagination";

export default class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4
  };
  componentDidMount() {
    const movies = getMovies();
    this.setState({ movies: movies });
  }

  handleDelete = ({ _id }) => {
    console.log("[Movies] inside the handleDelete");
    const movies = this.state.movies.filter(m => m._id !== _id);
    this.setState({ movies });
  };
  handleLike = movie => {
    console.log('Like clicked..',movie);
    const movies = this.state.movies.slice();
    const index = movies.indexOf(movie);
    const mov = Object.assign({},movie);
    movies[index] = mov;
    movies[index].like = !movies[index].like;
    this.setState({ movies: movies });
  }
  handlePageChange = page => {
      console.log(page);
  }
  render() {
    const { movies } = this.state;
    if (movies.length === 0) {
      return <h1>There are no movies in the database!</h1>;
    }
    return (
      <React.Fragment>
        <p>Showing {movies.length} results.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th />
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><Like liked={movie.like} onClick={() => this.handleLike(movie)}/></td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination moviesCount={movies.length} pageSize={this.state.pageSize} onPageChange={this.handlePageChange}/>
      </React.Fragment>
    );
  }
}