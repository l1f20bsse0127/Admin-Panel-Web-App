//connecting Db with backend
const mongoose = require("mongoose");
// const URI = "mongodb://127.0.0.1:27017/mern_admin";
const URI = process.env.MONGODB_URI;

const connectDb = async () => {
  try {
    mongoose.connect(URI);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};
module.exports = connectDb;
