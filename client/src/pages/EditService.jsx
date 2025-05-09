import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
// import "./UpdateServiceForm.css"; // Import the CSS file

const EditService = () => {
  const { id } = useParams();
  const { authorizationToken } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    service: "",
    description: "",
    price: "",
    provider: "",
  });

  const fetchServiceData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/services/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      setFormData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchServiceData();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/services/update/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        alert("Updated Successfully");
        navigate("/admin/services");
      } else {
        alert("ERROR: Service Not Updated");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="update-form">
      <h2 className="form-heading">Update Service</h2>

      <div className="form-group">
        <label>Service</label>
        <input
          type="text"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows="4"
        ></textarea>
      </div>

      <div className="form-group">
        <label>Price</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Provider</label>
        <input
          type="text"
          name="provider"
          value={formData.provider}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="update-button">
        Update
      </button>
    </form>
  );
};

export default EditService;
