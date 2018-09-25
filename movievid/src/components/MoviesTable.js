
import React, { Component } from 'react';
import Like from './common/Like';


class MoviesTable extends Component {
    raiseSort = sortBy => {
        const sortColumn = Object.assign({}, this.props.sortColumn);
        if (sortColumn.sortBy === sortBy) {
        sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
        }else {
        sortColumn.sortBy = sortBy;
        sortColumn.order = 'asc';
        }
        this.props.onSort(sortColumn);
    }
    render() {
        const {movies,handleLike,handleDelete } = this.props;
        return (
            <table className="table">
                <thead>
                  <tr>
                    <th onClick={() =>this.raiseSort('title')}>Title</th>
                    <th onClick={() =>this.raiseSort('genre.name')}>Genre</th>
                    <th onClick={() =>this.raiseSort('numberInStock')}>Stock</th>
                    <th onClick={() =>this.raiseSort('dailyRentalRate')}>Rate</th>
                    <th />
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
                        <Like
                          liked={movie.like}
                          onClick={() => handleLike(movie)}
                        />
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