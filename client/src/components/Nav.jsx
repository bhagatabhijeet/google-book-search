import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light" >
      <div className = "container">
      <Link className="navbar-brand" to="/">Google Books</Link>
      <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
            <Link className="nav-link" to="/search">Search</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/saved">Saved</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
