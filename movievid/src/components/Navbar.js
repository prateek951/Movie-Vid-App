import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = ({currentUser}) =>  {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link className="navbar-brand" to="/movies">MovieVid</Link>
        <button
          className="navbar-toggler hidden-lg-up"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/movies">
                Movies <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/users">
                Users
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/rentals">
                Rentals
              </NavLink>
            </li>
            {!currentUser && (<React.Fragment>
              <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                Register 
              </NavLink>
            </li>
            </React.Fragment>)}
            {currentUser && <React.Fragment>
              <li className="nav-item">
                <NavLink className="nav-link" to="/movies">{currentUser.name}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link btn btn-default btn-sm" to="/logout">Logout</NavLink>
              </li>
            </React.Fragment>}
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;