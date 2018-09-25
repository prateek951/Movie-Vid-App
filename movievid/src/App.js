import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound";
import MovieForm from "./components/MovieForm";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Navbar />
        <br />
        <Switch>
          <Route path="/movies" exact component={Movies} />
          <Route path='/movies/:id' exact component={MovieForm}/>
          <Route path="/users" exact component={Users} />
          <Route path="/rentals" exact component={Rentals} />
          <Route path='/not-found' component={NotFound}/>
          <Redirect exact from="/" to="/movies"/>
          <Redirect to="/not-found"/>
        </Switch>
      </main>
    );
  }
}

export default App;
