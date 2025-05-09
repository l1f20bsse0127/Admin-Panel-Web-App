import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-section about">
            <h2>Congent Labs</h2>
            <p>
              Building smart solutions with elegance and innovation. Let’s shape
              the future together.
            </p>
          </div>

          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>Email: support@congentlabs.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Location: Silicon Valley, CA</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Congent Labs. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
