import React, { Component } from "react";
import Input from "./common/Input";

export default class Login extends Component {
  state = {
    account: {
      username: "",
      password: ""
    },
    errors: {}
  };

  validate = ({username,password}) => {
  
    //Basic Client Side validation 
  
    const errors = {};

    if(username.trim() === '') {
      errors.username = 'Username is required';
    }

    if(password.trim() === '') {
      errors.password = 'Password is required';
    }

    return Object.keys(errors).length === 0 ? null : errors;
  }

  handleSubmit = e => {
    e.preventDefault();
    const { account } = this.state;
    const errors = this.validate(account);
    console.log(errors);
    this.setState({ errors: errors });
    if(errors) return;
  }

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
          <Input name="username" type="text" placeholder="Enter the username" value={username} label="Username" handleStringChange={this.handleStringChange}/>
          <Input name="password" type="password" placeholder="Enter the password" value={password} label="Password" handleStringChange={this.handleStringChange}/>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}
