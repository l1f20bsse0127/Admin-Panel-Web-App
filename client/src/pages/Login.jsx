import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserLogin({ ...userLogin, [name]: value });
  };
  const navigate = useNavigate();
  const { storeTokenInLs } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert("login");
    // console.log(userLogin);
    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userLogin),
      });
      console.log("Login response: ", response);
      if (response.ok) {
        const res_data = await response.json();
        console.log("Response from server: ", res_data);
        storeTokenInLs(res_data.token);
        // localStorage.setItem("token", res_data.token);
        // storeTokenInLs(res_data.token);
        alert("Login Successfully");
        setUserLogin({
          email: "",
          password: "",
        });
        navigate("/");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div class="page-content">
        <div className="container2">
          <div className="left-side"></div>

          <div className="right-side">
            <h2>Login at Congent Labs</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                  required
                  value={userLogin.email}
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
                  value={userLogin.password}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="submit-btn">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
