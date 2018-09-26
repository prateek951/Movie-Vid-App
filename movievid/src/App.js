import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "./components/Movies";
import Users from "./components/Users";
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound";
import MovieForm from "./components/MovieForm";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <br />
        <Switch>
          <Route path='/register' component={Register}/>
          <Route path='/login' component={Login}/>
          <Route path='/movies/new' component={MovieForm}/>
          <Route path='/movies/:id' exact component={MovieForm}/>
          <Route path="/movies" exact component={Movies} />
          <Route path="/users" exact component={Users} />
          <Route path="/rentals" exact component={Rentals} />
          <Route path='/not-found' component={NotFound}/>
          <Redirect exact from="/" to="/movies"/>
          <Redirect to="/not-found"/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
