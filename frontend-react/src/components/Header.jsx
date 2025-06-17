import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      <nav className="navbar container pt-3 pb-3 align-items-start">
        <Link className="navbar-brand text-light" to="/">
          Stock Prediction App
        </Link>

        {isLoggedIn ? (
          <button className="btn btn-outline-info" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <div>
            <Link className="btn btn-outline-info me-1" to="/login">
              Login
            </Link>
            <Link className="btn btn-info" to="/register">
              Register
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
