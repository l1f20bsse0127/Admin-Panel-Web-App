import React, { useState } from "react";
import { useAuth } from "../store/auth";
// import "./UpdateServiceForm.css"; // Import the CSS file

const AddServices = () => {
  const { authorizationToken } = useAuth();
  const [formData, setFormData] = useState({
    service: "",
    description: "",
    price: "",
    provider: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/admin/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Service added successfully");
        setFormData({
          service: "",
          description: "",
          price: "",
          provider: "",
        });
      } else {
        alert("ERROR: Service Not Added ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="update-form2">
      <h2 className="form-heading2">Manage Services</h2>

      <div className="form-group2">
        <label>Service</label>
        <input
          type="text"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group2">
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows="4"
        ></textarea>
      </div>

      <div className="form-group2">
        <label>Price</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group2">
        <label>Provider</label>
        <input
          type="text"
          name="provider"
          value={formData.provider}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="update-button2">
        Add
      </button>
    </form>
  );
};

export default AddServices;
