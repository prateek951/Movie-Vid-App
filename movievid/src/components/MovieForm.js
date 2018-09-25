import React, { Component } from "react";

export default class MovieForm extends Component {
  handleSave = () => {
    // console.log("handleSave fired");
    this.props.history.push('/');
  };
  render() {
    const { id } = this.props.match.params;
    return (
      <div className="container">
        <h1>Movie Form {id} </h1>
        <button onClick={this.handleSave} className="btn btn-primary">
          Save
        </button>
      </div>
    );
  }
}
