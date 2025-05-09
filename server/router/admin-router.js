const express = require("express");
const {
  getAllUsers,
  getAllContacts,
  getAllServices,
  deleteUserById,
  getUserById,
  updateUserById,
  deleteContactById,
  deleteServiceById,
  getServiceById,
  updateServiceById,
  addServices,
} = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");
const adminRouter = express.Router();

// USERS
adminRouter.get("/users", authMiddleware, adminMiddleware, getAllUsers);
adminRouter.delete(
  "/users/delete/:id",
  authMiddleware,
  adminMiddleware,
  deleteUserById
);
adminRouter.get("/users/:id", authMiddleware, adminMiddleware, getUserById);
adminRouter.patch(
  "/users/update/:id",
  authMiddleware,
  adminMiddleware,
  updateUserById
);

// CONTACTS
adminRouter.get("/contacts", authMiddleware, adminMiddleware, getAllContacts);
adminRouter.delete(
  "/contacts/delete/:id",
  authMiddleware,
  adminMiddleware,
  deleteContactById
);

// SERVICES
adminRouter.get("/services", authMiddleware, adminMiddleware, getAllServices);
adminRouter.post("/services", authMiddleware, adminMiddleware, addServices);
adminRouter.get(
  "/services/:id",
  authMiddleware,
  adminMiddleware,
  getServiceById
);
adminRouter.patch(
  "/services/update/:id",
  authMiddleware,
  adminMiddleware,
  updateServiceById
);
adminRouter.delete(
  "/services/delete/:id",
  authMiddleware,
  adminMiddleware,
  deleteServiceById
);

module.exports = adminRouter;
