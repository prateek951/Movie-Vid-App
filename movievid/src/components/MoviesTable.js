import React, { Component } from "react";
import Like from "./common/Like";
import TableHeader from "./common/TableHeader";

class MoviesTable extends Component {
  columns = [
    { sortBy: "title", label: "Title" },
    { sortBy: "genre.name", label: "Genre" },
    { sortBy: "numberInStock", label: "Stock" },
    { sortBy: "dailyRentalRate", label: "Rate" },
    { key: 'like'},
    { key: 'delete'}
  ];
  render() {
    const { movies, handleLike, handleDelete, onSort, sortColumn } = this.props;
    return (
      <table className="table">
        <TableHeader
          onSort={onSort}
          sortColumn={sortColumn}
          columns={this.columns}
        />
        <tbody>
          {movies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.like} onClick={() => handleLike(movie)} />
              </td>
              <td>
                <button
                  onClick={() => handleDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
