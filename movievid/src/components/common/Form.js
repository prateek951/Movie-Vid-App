import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./Input";
export default class Form extends Component {
  state = {
    data: {},
    errors: {}
  };
  validate = ({ username, password }) => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(
      { username, password },
      this.schema,
      options
    );
    if (!error) {
      return null;
    }
    const errors = {};

    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    console.log(errors);
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const options = { abortEarly: false };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema, options);
    return error ? error.details[0].message : null;
  };
  handleSubmit = e => {
    e.preventDefault();
    const { data } = this.state;
    const errors = this.validate(data);
    // console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.makeSubmissionToServer();
  };
  handleStringChange = ({ currentTarget: input }) => {
    const errors = Object.assign({}, this.state.errors);
    const errorMessage = this.validateProperty(input);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }
    const data = Object.assign({}, this.state.data);
    data[input.name] = input.value;
    this.setState({ data: data, errors: errors });
  };
  renderButton = (label, data) => {
    return (
      <button
        type="submit"
        className="btn btn-primary"
        disabled={this.validate(data)}
      >
        {label}
      </button>
    );
  };
  renderInput(name,label,type,value,placeholder,usernameError) {
    return (
      <Input
        name={name}
        error={usernameError}
        type={type}
        placeholder={placeholder}
        value={value}
        label={label}
        handleStringChange={this.handleStringChange}
      />
    );
  }
}
