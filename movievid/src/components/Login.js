import React, { Component } from "react";

export default class Login extends Component {
  state = {
    account: {
      username: "",
      password: ""
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("handleSubmit fired");
  };

  handleStringChange = ({currentTarget:input}) => {
    const account = { ...this.state.account }; 
    account[input.name] = input.value;
    this.setState({ account: account });
  };
  render() {
    const { username, password } = this.state.account;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <legend>Login</legend>
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="form-group">
                <label htmlFor="email">Username</label>
                <input
                  autoFocus
                  type="text"
                  className="form-control"
                  name="username"
                  id="username"
                  value={username}
                  placeholder="Enter the username"
                  onChange={this.handleStringChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  value={password}
                  placeholder="Enter the password"
                  onChange={this.handleStringChange}
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}
