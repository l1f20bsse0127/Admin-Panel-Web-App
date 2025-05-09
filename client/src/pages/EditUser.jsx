import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import axios from "axios"; // We'll use axios to call API
import { useAuth } from "../store/auth";

const EditUser = () => {
  const { id } = useParams(); // get user id from URL
  const { authorizationToken } = useAuth();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      setUserData(data);
      console.log("helloo", data);
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/update/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.ok) {
        console.log(response);
        alert("Updated Successfully!!!");
        navigate("/admin/users");
      } else {
        alert("Error: User not Updated!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="edit-user-container">
      <div className="edit-user-form">
        <h1>Edit User</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={userData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={userData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={userData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="update-btn">
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
