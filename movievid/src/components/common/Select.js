import React from "react";

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <div className="form-group">
          <label htmlFor={name}>{label}</label>
          <select name={name} id={name} {...rest} className="form-control">
            <option value="" />
            {options.map(option => (
              <option key={option._id} value={option._id}>{option.name}</option>
            ))}
          </select>
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default Select;
