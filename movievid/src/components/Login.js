import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log("handleSubmit fired");
    const { username, password:userpass } = this.state;
    // console.log(`The user with username ${username} and the password ${userpass} is now logged in`); 
    //async call to server and handle login 
};
  handleStringChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { username, password } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <legend>Login</legend>
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="form-group">
                <label htmlFor="email">Username</label>
                <input
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
