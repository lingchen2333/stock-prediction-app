import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Registration = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUserChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/register/",
        user
      );
      setErrors({});
      setSuccess(true);
    } catch (error) {
      // console.log("registration error==>", error.response.data);
      setErrors(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 bg-light-dark p-5 rounded">
          <h3 className="text-light text-center mb-4">Create an Account</h3>
          <form onSubmit={handleRegistration}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter user name"
                name="username"
                value={user.username}
                onChange={handleUserChange}
              ></input>
              <small>
                {errors.username && (
                  <div className="text-warning">{errors.username}</div>
                )}
              </small>
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter email address"
                name="email"
                value={user.email}
                onChange={handleUserChange}
              ></input>
              <small>
                {errors.email && (
                  <div className="text-warning">{errors.email}</div>
                )}
              </small>
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
              <small>
                {errors.password && (
                  <div className="text-warning">{errors.password}</div>
                )}
              </small>
            </div>
            {success && (
              <div className="alert alert-success">Registration successful</div>
            )}

            {loading ? (
              <button
                type="submit"
                className="btn btn-info d-block mx-auto mt-5"
                disabled
              >
                <FontAwesomeIcon icon={faSpinner} spin /> Please wait
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-info d-block mx-auto mt-5"
              >
                Register
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
