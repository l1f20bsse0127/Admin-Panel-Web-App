const Contact = require("../models/contact-model");
const Service = require("../models/service-model");
const User = require("../models/user-model");
// const Contact = require("../models/contact-model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    console.log(users);
    if (!users) {
      return res.status(401).json({ message: "No user found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    console.log(contacts);
    if (!contacts) {
      return res.status(401).json({ message: "No contacts found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    console.log(error);
  }
};
const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    console.log(services);
    if (!services) {
      return res.status(401).json({ message: "No services found" });
    }
    return res.status(200).json(services);
  } catch (error) {
    console.log(error);
  }
};
const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });

    res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    console.log(error);
  }
};
const deleteContactById = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });

    res.status(200).json({ message: "Contact Deleted Successfully" });
  } catch (error) {
    console.log(error);
  }
};
const deleteServiceById = async (req, res) => {
  try {
    const id = req.params.id;
    await Service.deleteOne({ _id: id });
    res.status(200).json({ message: "Service Deleted Successfully" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const getServiceById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Service.findOne({ _id: id });
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
const updateServiceById = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const updateService = await Service.updateOne(
      { _id: id },
      { $set: updatedData }
    );
    res.status(200).json(updateService);
  } catch (error) {
    console.log(error);
  }
};
const addServices = async (req, res) => {
  try {
    const data = req.body;
    const addData = await Service.create(data);
    res.status(200).json(addData);
  } catch (error) {
    console.log(error);
  }
};
const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;
    const updatedData = await User.updateOne(
      { _id: id },
      {
        $set: updatedUserData,
      }
    );
    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};
module.exports = {
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
};
