import React, { Component } from "react";
import auth from "../services/authService";

export default class Logout extends Component {
  async componentDidMount() {
    await auth.logout()    
    window.location = "/";
  }
  render() {
    return null;
  }
}
