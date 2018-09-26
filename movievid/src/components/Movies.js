import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/genreService";
import Pagination from "./common/Pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/ListGroup";
import MoviesTable from "./MoviesTable";
import _ from "lodash";
import Searchbar from "./common/Searchbar";

export default class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    selectedGenre: null,
    searchQuery: "",
    sortColumn: { sortBy: "title", order: "asc" }
  };
  async componentDidMount() {
    const movies = getMovies();
    const { data : fetchedGenres} = await getGenres();
    console.log(fetchedGenres);
    const genres = [{ name: "All Genres" }, ...fetchedGenres];
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
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };
  handleSort = sortColumn => {
    // console.log('handleSort fired');
    this.setState({ sortColumn });
  };
  handleSearch = search => {
    this.setState({ searchQuery: search, selectedGenre: null, currentPage: 1 });
  };
  // Sorting using lodash in ascending order
  // sortMovies = (movies,sortBy) => {
  //  return _.sortBy(movies,sortBy)
  // }
  render() {
    const {
      movies,
      pageSize,
      selectedGenre,
      currentPage,
      sortColumn,
      searchQuery
    } = this.state;
    //Filtering the records
    let filtered = movies;
    if (searchQuery) {
      filtered = movies.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (selectedGenre && selectedGenre._id) {
      filtered = movies.filter(m => m.genre._id === selectedGenre._id);
    }
    // Sorting the filtered table using lodash
    const sorted = _.orderBy(filtered, [sortColumn.sortBy], [sortColumn.order]);
    // Pagination finally
    const movies_per_page = paginate(sorted, currentPage, pageSize);

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
          <Link
            to={`/movies/new`}
            style={{ marginBottom: 20 }}
            className="btn btn-primary"
          >
            New Movie
          </Link>
          <p>Showing {filtered.length} results.</p>
          <Searchbar value={searchQuery} onChange={this.handleSearch} />
          <MoviesTable
            onSort={this.handleSort}
            movies={movies_per_page}
            handleDelete={this.handleDelete}
            handleLike={this.handleLike}
            sortColumn={this.state.sortColumn}
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
