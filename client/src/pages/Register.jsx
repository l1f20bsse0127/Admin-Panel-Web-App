import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();
  const { storeTokenInLs } = useAuth();
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert(user);
    console.log("USER DATA: ", user);

    try {
      const response = await fetch(`http://localhost:5000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("response: ", response);
      // console.log(user);
      if (response.ok) {
        const res_data = await response.json();
        console.log("Response from server: ", res_data);
        storeTokenInLs(res_data.token);
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/");
      }
    } catch (error) {
      console.log("Signup Error", error);
    }
  };

  return (
    <>
      <div class="page-content">
        <div className="container2">
          <div className="left-side"></div>

          <div className="right-side">
            <h2>Register at Congent Labs</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter username"
                  required
                  value={user.username}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                  required
                  value={user.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label for="phone">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Enter phone number"
                  required
                  value={user.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  required
                  value={user.password}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="submit-btn">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
