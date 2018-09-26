import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/Form";
import { getMovies, saveMovie } from "../services/fakeMovieService";

export default class MovieForm extends Form {
  
  state = {
    data : {
      title : '',
      numberInStock : 0,
      genre : {},
      dailyRentalRate : 0
    },
    errors : {}
  }
  
  handleSave = () => {
    // console.log("handleSave fired");
    const { data:movie } = this.state;    
    const movieToSave = saveMovie(movie);
    this.setState({ data: movieToSave });    
    this.props.history.push('/');
  };

  //Define the sophisticated Joi validation 

  schema = { 
    title : Joi.string().required().label('Title'),
    genre : Joi.string().required().label('Genre'),
    numberInStock : Joi.number().min(0).required().label('numberInStock'),
    dailyRentalRate : Joi.number().min(0).max(5).required().label('dailyRentalRate')
  }

  makeSubmissionToServer() {
    //Async call to add the movie to the database
    console.log("Submitted");
  }

  render() {
    const { id } = this.props.match.params;
    return (
      <div className="container">
        <h1>Movie Form {id} </h1>
        {this.renderInput('title','Title','text','Enter the title')}
        {this.renderSelect()}
        {this.renderInput('numberInStock','Number In Stock','number','Enter the numberInStock')}
        {this.renderInput('dailyRentalRate','Rate','number','Enter the dailyRentalRate')}        
        <button onClick={this.handleSave} className="btn btn-primary">
          Save
        </button>
      </div>
    );
  }
}
