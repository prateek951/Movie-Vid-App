import React, { Component } from "react";
import Joi from 'joi-browser';
import Input from "./common/Input";

export default class Login extends Component {
  state = {
    account: {
      username: "",
      password: ""
    },
    errors: {}
  };

  //Define the Joi Schema 
  schema = {
    username : Joi.string().required().label('Username'),
    password : Joi.string().required().label('Password')
  };
  //Joi sophisticated validation
    validate = ({username,password}) => {
      const options = { abortEarly : false };
      const { error } = Joi.validate({username,password},this.schema,options);
      if(!error) {
        return null;
      }
      const errors = {};
      for (let item of error.details) {
          errors[item.path[0]] = item.message;
      }
      console.log(errors);
      return errors;
    }    
  

  // Basic clientside validation
  // validate = ({username,password}) => {
    
  //   //Basic Client Side validation 
  
  //   const errors = {};

  //   if(username.trim() === '') {
  //     errors.username = result.error.details[0].message;
  //   }

  //   if(password.trim() === '') {
  //     errors.password = result.error.details[1].message;
  //   }

  //   return Object.keys(errors).length === 0 ? null : errors;
  // }

  handleSubmit = e => {
    e.preventDefault();
    const { account } = this.state;
    const errors = this.validate(account);
    // console.log(errors);
    this.setState({ errors: errors || {} });
    if(errors) return;
  }
  handleStringChange = e => {
    const errors = this.validate(this.state.account);
    this.setState({ ...this.state.account, account : { [e.target.name] : [e.target.value], errors: errors || {} }});
  }
  // validateProperty = ({name,value}) => {
  //   if(name === 'username') {
  //     if(value.trim() === '') {
  //       return 'Username is required';
  //     } 
  //   }
  //   if(name === 'password') {
  //     if(value.trim() === '') {
  //       return 'Password is required';
  //     }
  //   }
  // }
  // Code for the basic form validation

  // handleStringChange = ({currentTarget:input}) => {
  //   const errors = Object.assign({},this.state.errors);
  //   const errorMessage = this.validateProperty(input);
  //   if(errorMessage) {
  //     errors[input.name] = errorMessage;
  //   }else {
  //     delete errors[input.name];
  //   }
  //   const account = { ...this.state.account }; 
  //   account[input.name] = input.value;
  //   this.setState({ account: account, errors });
  // };

  // renderErrors = () => {
  //   const { errors } = this.state;
  //   const myErrors = [];
  //   for (const error in errors) {
  //     if (errors.hasOwnProperty(error)) {
  //       myErrors.push(errors[error]);
  //     }
  //   }
  //   return myErrors.map((error,index) => <div key={index} className="alert alert-danger">{error}</div>);
  // }
  render() {
    const { username, password } = this.state.account;
    const { username:usernameError, password:passwordError } = this.state.errors
    return (
      <div className="container">
        {/* {this.renderErrors()} */}
        <form onSubmit={this.handleSubmit}>
          <legend>Login</legend>
          <Input name="username" error={usernameError} type="text" placeholder="Enter the username" value={username} label="Username" handleStringChange={this.handleStringChange}/>
          <Input name="password" error={passwordError} type="password" placeholder="Enter the password" value={password} label="Password" handleStringChange={this.handleStringChange}/>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}
