import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
const Navbar = () => {
  const { isLoggedIN } = useAuth();
  return (
    <>
      <nav>
        <div className="logo">Congent Labs</div>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="nav-links" id="navLinks">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          {isLoggedIN ? (
            <>
              <NavLink to="/service">Service</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/logout">Logout</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/login">Login</NavLink>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
