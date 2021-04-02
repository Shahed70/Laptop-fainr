import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App/App";
import "./Header.css";
const Header = () => {
  const [loggedInUser] = useContext(UserContext)
  return (
    <div className="container-fluid px-0">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top mb-5 pb">
        <Link className="navbar-brand" to="/">
          LAPTOP FAIR
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                HOME 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/order">
                ORDER 
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="/deshboard">
                ADMIN
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#" >
                DEALS
              </Link>
            </li>
            <li className="nav-item">
              {
                loggedInUser.name ? <Link className="nav-link" to="#">{loggedInUser.name}</Link> : <Link className="nav-link" to="/login">LOGIN</Link>
              }
            </li>
          </ul>
        </div>
      </nav>

      <div className="search-form">
        {/* <form className="form-inline my-2 my-lg-0">
          <input
            type="text"
            className="form-control mr-sm-2"
            placeholder="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form> */}
      </div>
    </div>
  );
};

export default Header;
