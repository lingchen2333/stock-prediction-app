import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="p-5 text-center text-light bg-light-dark rounded">
          <h1>Stock Prediction Portal</h1>
          <p className="lead">idojfelfjkeklfjek</p>
          <Link className="btn btn-outline-info me-1" to="/login">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
