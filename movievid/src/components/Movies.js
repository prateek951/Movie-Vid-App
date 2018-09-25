import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/Like";
import Pagination from "./common/Pagination";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "./common/ListGroup";

export default class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    selectedGenre: ''
  };
  componentDidMount() {
    const movies = getMovies();
    const genres = getGenres();
    this.setState({ movies: movies, genres: genres });
  }

  handleDelete = ({ _id }) => {
    console.log("[Movies] inside the handleDelete");
    const movies = this.state.movies.filter(m => m._id !== _id);
    this.setState({ movies });
  };
  handleLike = movie => {
    console.log("Like clicked..", movie);
    const movies = this.state.movies.slice();
    const index = movies.indexOf(movie);
    const mov = Object.assign({}, movie);
    movies[index] = mov;
    movies[index].like = !movies[index].like;
    this.setState({ movies: movies });
  };
  handlePageChange = page => {
    console.log(page);
    this.setState({ currentPage: page });
  };
  handleGenreSelect = genre => {
    console.log(genre);
    this.setState({ selectedGenre : genre });
  };
  render() {
    const { movies, pageSize, selectedGenre, currentPage } = this.state;
    if (movies.length === 0) {
      return <h1>There are no movies in the database!</h1>;
    }
    const filtered = selectedGenre ? movies.filter(m => m.genre._id === selectedGenre._id) : movies;
    const movies_per_page = paginate(filtered, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            onGenreSelect={this.handleGenreSelect}
            genres={this.state.genres}
            selectedGenre={this.state.selectedGenre}  
          />
        </div>
        <div className="col">
          <p>Showing {filtered.length} results.</p>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {movies_per_page.map(movie => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.like}
                      onClick={() => this.handleLike(movie)}
                    />
                  </td>
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
          <Pagination
            moviesCount={filtered.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}
