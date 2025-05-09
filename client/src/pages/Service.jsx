import React, { useEffect, useState } from "react";
import axios from "axios";

const Service = () => {
  const [services, setServices] = useState([]);

  const fetchAllServices = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/auth/service");
      setServices(res.data.msg);
    } catch (err) {
      console.error("Error fetching services", err);
    }
  };

  useEffect(() => {
    fetchAllServices();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        🛠️ Our Services
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {services.length === 0 ? (
          <p>No services found.</p>
        ) : (
          services.map((service) => (
            <div
              key={service._id}
              style={{
                width: "300px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                backgroundColor: "black",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80"
                alt={service.service}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  marginBottom: "10px",
                  borderRadius: "8px",
                }}
              />

              {/* Service Details */}
              <h3 style={{ color: "#333", marginBottom: "10px" }}>
                {service.service}
              </h3>
              <p
                style={{ fontSize: "14px", color: "#666", marginBottom: "8px" }}
              >
                {service.description}
              </p>
              <p style={{ fontWeight: "bold", marginBottom: "8px" }}>
                Price: {service.price}
              </p>
              <p style={{ fontSize: "13px", color: "#999" }}>
                Provider: {service.provider}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Service;
