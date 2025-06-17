import React, { useContext, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleUserChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/token/",
        user
      );
      console.log(response.data);
      localStorage.setItem("accessToken", response.data.access);
      localStorage.setItem("refreshToken", response.data.refresh);
      setIsLoggedIn(true);
      navigate("/");
    } catch (error) {
      setError("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 bg-light-dark p-5 rounded">
          <h3 className="text-light text-center mb-4">Login</h3>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter user name"
                name="username"
                value={user.username}
                onChange={handleUserChange}
              ></input>
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
                value={user.password}
                onChange={handleUserChange}
              ></input>
            </div>

            {error && <div className="text-warning">{error}</div>}

            {loading ? (
              <button
                type="submit"
                className="btn btn-info d-block mx-auto mt-5"
                disabled
              >
                <FontAwesomeIcon icon={faSpinner} spin /> Logging in
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-info d-block mx-auto mt-5"
              >
                Login
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
