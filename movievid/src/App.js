import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import Rentals from "./components/Rentals";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Navbar />
        <br />
        <Switch>
          <Route path="/movies" exact component={Movies} />
          <Route path="/users" exact component={Users} />
          <Route path="/rentals" exact component={Rentals} />
        </Switch>
      </main>
    );
  }
}

export default App;
