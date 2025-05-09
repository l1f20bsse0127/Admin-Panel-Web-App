import React from "react";
import { Navigate, NavLink, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../store/auth";

const AdminLayout = () => {
  const location = useLocation();
  const { user, isLoading } = useAuth();
  const isRootAdmin = location.pathname === "/admin";

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }
  return (
    <div className="man2">
      <div className="sidebar2">
        <h2>Admin Panel</h2>
        <ul className="nav-links2">
          <li>
            <NavLink to="/admin">Home</NavLink>
          </li>
          <li>
            <NavLink to="/admin/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/admin/contacts">Contacts</NavLink>
          </li>
          <li>
            <NavLink to="/admin/services">Services</NavLink>
          </li>
        </ul>
      </div>

      <div className="main-content2">
        {isRootAdmin ? (
          <>
            <h1>Welcome Admin!</h1>
            <p>Select an option from the side navigation to manage content.</p>
          </>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default AdminLayout;
