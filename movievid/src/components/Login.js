import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";
import * as authService from "../services/authService";

export default class Login extends Form {
  state = {
    data: {
      username: "",
      password: ""
    },
    token : '',
    errors: {},
    myBtn: "Login"
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

  makeSubmissionToServer = async () => {
    //Async call to server
    try {
      
      const { username, password } = this.state.data;
      const { data:token }= await authService.login(username, password);
      console.log(token);
      //Set the token to the localStorage 
      localStorage.setItem('token',JSON.stringify(token));
      //Redirect the user to the home page 
      // this.props.history.push('/');
      //Full reload of the application 
      window.location = '/';
    } catch (error) {
    
      if (error.response && error.response.status === 400) {
    
        const errors = Object.assign({}, this.state.errors);
        errors.username = error.response.data;
        this.setState({ errors: errors });
    
      }
    
    }
    console.log("Submitted to the server");
  };

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

    return (
      <div className="container">
        {/* {this.renderErrors()} */}
        <form onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          {this.renderInput("username", "Username", "Enter the username")}
          {this.renderInput(
            "password",
            "Password",
            "password",
            "Enter the password"
          )}
          {this.renderButton(this.state.myBtn, { username, password })}
        </form>
      </div>
    );
  }
}
