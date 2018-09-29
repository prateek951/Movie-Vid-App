import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";
import * as userService from "../services/userService";

export default class Register extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: ""
    },
    label: "Register",
    errors: {}
  };
  //Define the JOI sophisticated validation
  schema = {
    username: Joi.string()
      .required()
      .email()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(8)
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };

 async makeSubmissionToServer() {
    //Async call to register
    //Register the user by placing an async call to server 
    //and sent the user data in the body of the request 
    try {
  
      const response = await userService.register(this.state.data);
      // console.log(response);
      //Set the token to the localStorage and redirect the user to the home page
      localStorage.setItem('token',JSON.stringify(response.headers['x-auth-token']));
      //On successful registration, push the user to the movies page 
      // this.props.history.push('/');   
      window.location = '/';   
  
    } catch (error) {
      if(error.response && error.response.status === 400) {
          //Client did something wrong 
          const errors = Object.assign({},this.state.errors);
          // Get the error message that is available from the server 
          errors.username = error.response.data;
          this.setState({ errors });
      }
    }
  }

  render() {
    const { label, data } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h1>Register</h1>
          {this.renderInput(
            "username",
            "Username",
            "email",
            "Enter the username (email)"
          )}
          {this.renderInput(
            "password",
            "Password",
            "password",
            "Enter the password"
          )}
          {this.renderInput("name", "Name", "text", "Enter the full name")}
          {this.renderButton(label, data)}
        </form>
      </div>
    );
  }
}
