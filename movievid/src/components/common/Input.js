import React from 'react';

const formatName = name => {
    return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
}


const Input = ({name, placeholder, value, label, handleStringChange}) => {
    return (
        <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <input
                  autoFocus
                  type="text"
                  className="form-control"
                  name={name}
                  placeholder={placeholder}
                  id={name}
                  value={value}
                  onChange={handleStringChange}
                />
              </div>
            </div>
          </div>
    );
};

export default Input;