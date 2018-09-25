import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/Pagination";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "./common/ListGroup";
import MoviesTable from "./MoviesTable";
import _ from 'lodash';

export default class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    selectedGenre: {}
  };
  componentDidMount() {
    const movies = getMovies();
    const genres = [{ name: "All Genres" }, ...getGenres()];
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
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  handleSort = (sortBy) => {
    // console.log('handleSort fired');
    console.log(sortBy);
    const movies = [...this.state.movies];
    const sortedMovies = this.sortMovies(movies,sortBy);
    this.setState({ movies: sortedMovies });
  };
  sortMovies = (movies,sortBy) => {
   return _.sortBy(movies,sortBy)
  }
  render() {
    const { movies, pageSize, selectedGenre, currentPage } = this.state;
    if (movies.length === 0) {
      return <h1>There are no movies in the database!</h1>;
    }
    const filtered =
      selectedGenre && selectedGenre._id
        ? movies.filter(m => m.genre._id === selectedGenre._id)
        : movies;
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
          <MoviesTable
            onSort={this.handleSort}
            movies={movies_per_page}
            handleDelete={this.handleDelete}
            handleLike={this.handleLike}
          />
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
