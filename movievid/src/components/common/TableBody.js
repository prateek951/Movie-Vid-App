import React, { Component } from 'react'
import Like from './Like';

export default class TableBody extends Component {
  render() {
      const { movies, handleLike, handleDelete } = this.props;
    return (
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
    )
  }
}
