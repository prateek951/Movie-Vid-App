import React, { Component } from "react";
import Table from "./common/Table";

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
      <Table columns={this.columns} movies={movies} handleLike={handleLike} handleDelete={handleDelete} onSort={onSort} sortColumn={sortColumn}/>
    );
  }
}

export default MoviesTable;
