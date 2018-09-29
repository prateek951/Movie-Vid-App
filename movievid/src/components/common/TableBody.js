import React, { Component } from "react";
import Like from "./Like";
import { Link } from "react-router-dom";
import authService from "../../services/authService";
export default class TableBody extends Component {
  render() {
    
    const { data, handleLike, handleDelete } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            <td><Link to={`/movies/${item._id}`}>{item.title}</Link></td>
            <td>{item.genre.name}</td>
            <td>{item.numberInStock}</td>
            <td>{item.dailyRentalRate}</td>
            <td>
              <Like liked={item.like} onClick={() => handleLike(item)} />
            </td>
            {authService.getCurrentUser() && <td>
              <button
                onClick={() => handleDelete(item)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>}
          </tr>
        ))}
      </tbody>
    );
  }
}
