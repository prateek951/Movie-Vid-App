import React from "react";

const Searchbar = ({ value, onChange }) => {
  console.log(value);
  return (
    <div className="row">
      <div className="col-md-6 col-md-3-offset-3">
        <div className="form-group">
          <input
            type="search"
            name="query"
            className="form-control my-3"
            value={value}
            onChange={e => onChange(e.currentTarget.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
