import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./components/Movies";
import Users from "./components/Users";
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound";
import MovieForm from "./components/MovieForm";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = { };

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ currentUser: user });
  }
  render() {
    const { currentUser } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <Navbar currentUser={currentUser}/>
        <br />
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path='/logout' component={Logout}/>
          <Route path="/movies/:id" exact component={MovieForm} />
          <Route path="/movies" exact render={props => <Movies {...props} user={currentUser}/>} />
          <Route path="/users" exact component={Users} />
          <Route path="/rentals" exact component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect exact from="/" to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
