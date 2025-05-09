import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
import AddServices from "../components/AddServices";

const AdminServices = () => {
  const [services, setServices] = useState([]);
  const { authorizationToken } = useAuth();

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
  }, [services]);

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/services/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log("services after delation", data);

      if (response.ok) {
        fetchAllServices();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AddServices />
      <div style={{ padding: "20px" }}>
        <h2
          style={{ textAlign: "center", marginBottom: "20px", color: "black" }}
        >
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
                  backgroundColor: "rgba(0,0,0,0.1)",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                {/* Service Details */}
                <h3 style={{ color: "#333", marginBottom: "10px" }}>
                  {service.service}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#666",
                    marginBottom: "8px",
                  }}
                >
                  {service.description}
                </p>
                <p style={{ fontWeight: "bold", marginBottom: "8px" }}>
                  Price: {service.price}
                </p>
                <p style={{ fontSize: "13px", color: "#999" }}>
                  Provider: {service.provider}
                </p>

                <br />

                <Link
                  className="edit-btn"
                  style={{ textAlign: "center" }}
                  to={`/admin/services/${service._id}/edit`}
                >
                  Edit
                </Link>
                <br />
                <button
                  className="delete-btn"
                  onClick={() => deleteUser(service._id)}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default AdminServices;
