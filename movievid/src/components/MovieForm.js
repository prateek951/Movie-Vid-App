import React from "react";
import { withRouter } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/Form";
import { getMovie, saveMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: 0,
      dailyRentalRate: 0
    },
    genres: [],
    errors: {}
  };

  //Define the sophisticated Joi validation

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    genreId: Joi.string()
      .required()
      .label("Genre"),
    numberInStock: Joi.number()
      .integer()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .min(0)
      .max(10)
      .required()
      .label("Daily Rental Rate")
  };

  makeSubmissionToServer = async() => {
    //Async call to add the movie to the database
    await saveMovie(this.state.data);
    this.props.history.push("/movies");
    console.log("Submitted");
  }
  async populateGenres() {
    const { data: genres } = await getGenres();
    this.setState({ genres: genres });
  }
  async populateMovie() {
    try {
      const movieId = this.props.match.params.id;
      if (movieId === "new") return;
      const { data: movie } = await getMovie(movieId);
      this.setState({ data: this.mapToViewModel(movie) });
    } catch (error) {
      if (error.response && error.response.status === 404)
        return this.props.history.replace("/not-found");
    }
  }
  async componentDidMount() {
    await this.populateGenres();
    await this.populateMovie();
  }
  mapToViewModel = movie => {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    };
  };

  render() {
    const { id } = this.props.match.params;
    return (
      <div className="container">
        <h1>Movie Form {id} </h1>
        {this.renderInput("title", "Title", "text", "Enter the title")}
        {this.renderSelect("genreId", "Genre", this.state.genres)}
        {this.renderInput(
          "numberInStock",
          "Number In Stock",
          "number",
          "Enter the numberInStock"
        )}
        {this.renderInput(
          "dailyRentalRate",
          "Rate",
          "number",
          "Enter the dailyRentalRate"
        )}
        <button
          onClick={this.handleSubmit}
          className="btn btn-primary"
          disabled={this.validate(this.state.data)}
        >
          Save
        </button>
      </div>
    );
  }
}

export default withRouter(MovieForm);
