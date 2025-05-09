const Contact = require("../models/contact-model");
const Service = require("../models/service-model");
const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("Hello Router My name is Usman Sherazi");
  } catch (error) {
    console.log(error);
  }
};
const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ msg: "email already exists" });
    }
    //Hash the Password
    const saltRound = 10;
    const hash_password = await bcrypt.hash(password, saltRound);
    const user_created = await User.create({
      username,
      email,
      phone,
      password: hash_password,
    });
    res.status(200).json({
      user_created,
      token: await user_created.generateToken(),
      userId: user_created._id.toString(),
    });
  } catch (error) {
    console.log(error);
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const user = await bcrypt.compare(password, userExist.password);

    if (user) {
      res.status(200).json({
        msg: "Login Successfully",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.log(error);
  }
};
const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    res.status(200).json({ userData });
  } catch (error) {
    console.log(error);
  }
};
const contactForm = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);
    return res.status(200).json({ message: "message send successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "message not delivered" });
  }
};
const service = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response) {
      res.status(404).json({ msg: "no service found" });
      return;
    }
    res.status(200).json({ msg: response });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { home, register, login, user, contactForm, service };
