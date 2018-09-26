import React, { Component } from "react";
import Input from "./common/Input";

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
          <Input name="username" placeholder="Enter the username" value={username} label="Username" handleStringChange={this.handleStringChange}/>
          <Input name="password" placeholder="Enter the password" value={password} label="Password" handleStringChange={this.handleStringChange}/>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}
