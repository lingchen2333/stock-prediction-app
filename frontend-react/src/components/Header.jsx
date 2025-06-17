import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar container pt-3 pb-3 align-items-start">
        <Link className="navbar-brand text-light" to="/">
          Stock Prediction App
        </Link>

        <div>
          <Link className="btn btn-outline-info me-1" to="/login">
            Login
          </Link>
          <Link className="btn btn-info" to="/register">
            Register
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
