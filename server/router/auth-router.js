const express = require("express");
const router = express.Router();
const {
  home,
  register,
  login,
  contactForm,
  user,
  service,
} = require("../controllers/auth-controller");
// const signupSchema = require("../validator/auth-validator");
// const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware");

router.get("/", home);
// router.post("/register", validate(signupSchema), register);
router.post("/register", register);
router.post("/login", login);
router.post("/contact", contactForm);
router.get("/service", service);
router.get("/user", authMiddleware, user);

module.exports = router;
