import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

export default class Movies extends Component {
  state = {
    movies: getMovies()
  };
  handleDelete = ({ _id }) => {
    console.log("[Movies] inside the handleDelete");
    const movies = this.state.movies.filter(m => m._id !== _id);
    this.setState({ movies });
  };
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
      </React.Fragment>
    );
  }
}
