import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";

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

  makeSubmissionToServer() {
    //Async call to register
    console.log("Submitted");
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
