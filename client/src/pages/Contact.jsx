import React, { useState } from "react";
import { useAuth } from "../store/auth";

const Contact = () => {
  const [userContact, setUserContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [userData, setUserData] = useState(true);

  const { user } = useAuth();

  if (userData && user) {
    setUserContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserContact({ ...userContact, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userContact),
      });

      if (response.ok) {
        setUserContact({
          message: "",
        });

        const data = await response.json();
        console.log(data);
        alert("message sent");
      }
    } catch (error) {
      console.log(error);
      alert("message not send");
    }
  };

  return (
    <>
      <div class="page-content">
        <div className="container2">
          <div className="left-side2"></div>

          <div className="right-side">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="username">username</label>
                <input
                  type="type"
                  name="username"
                  id="username"
                  placeholder="Enter username"
                  required
                  value={userContact.username}
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
                  value={userContact.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label for="message">Message</label>
                <textarea
                  type="message"
                  name="message"
                  id="message"
                  placeholder="Enter your message.."
                  cols="30"
                  rows="5"
                  value={userContact.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="submit-btn">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
