import React, { Component } from "react";
import TableHeader from "./common/TableHeader";
import TableBody from "./common/TableBody";

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
        <TableBody movies={movies} handleLike={handleLike} handleDelete={handleDelete}/>
      </table>
    );
  }
}

export default MoviesTable;
