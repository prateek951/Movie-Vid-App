import React from "react";
import Joi from "joi-browser";
import Input from "./common/Input";
import Form from "./common/Form";

export default class Login extends Form {
  state = {
    data: {
      username: "",
      password: ""
    },
    errors: {}
  };

  //Define the Joi Schema for Login
  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };
  //Joi sophisticated validation
  
   makeSubmissionToServer = () => {
     //Async call to server
     console.log("Submitted to the server");
   }


  // ******************************* Below code is for the basic client side validation ************************************************************************************************************
   //Reusable
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
   // Reusable
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
  // Reusable
  // handleStringChange = ({currentTarget:input}) => {
  //   const errors = Object.assign({},this.state.errors);
  //   const errorMessage = this.validateProperty(input);
  //   if(errorMessage) {
  //     errors[input.name] = errorMessage;
  //   }else {
  //     delete errors[input.name];
  //   }
  //   const data = { ...this.state.data };
  //   data[input.name] = input.value;
  //   this.setState({ data: data, errors });
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

  //**************************************************************************************************************** */

  render() {
    const { username, password } = this.state.data;
    const {
      username: usernameError,
      password: passwordError
    } = this.state.errors;
    return (
      <div className="container">
        {/* {this.renderErrors()} */}
        <form onSubmit={this.handleSubmit}>
          <legend>Login</legend>
          <Input
            name="username"
            error={usernameError}
            type="text"
            placeholder="Enter the username"
            value={username}
            label="Username"
            handleStringChange={this.handleStringChange}
          />
          <Input
            name="password"
            error={passwordError}
            type="password"
            placeholder="Enter the password"
            value={password}
            label="Password"
            handleStringChange={this.handleStringChange}
          />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={this.validate({ username, password })}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}
