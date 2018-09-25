import React, { Component } from "react";
import Like from "./Like";

export default class TableBody extends Component {
  render() {
    
    const { data, handleLike, handleDelete } = this.props;

    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            <td>{item.title}</td>
            <td>{item.genre.name}</td>
            <td>{item.numberInStock}</td>
            <td>{item.dailyRentalRate}</td>
            <td>
              <Like liked={item.like} onClick={() => handleLike(item)} />
            </td>
            <td>
              <button
                onClick={() => handleDelete(item)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}
