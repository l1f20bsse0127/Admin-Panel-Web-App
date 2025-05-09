require("dotenv").config(); //middleware
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");
const adminRouter = require("./router/admin-router");
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE,PATCH,HEAD",
  credentials: true,
};
app.use(cors(corsOptions)); //Cors Middleware
app.use(express.json()); //middleware
app.use("/api/auth", router);
app.use("/api/admin", adminRouter);
const PORT = 5000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
  });
});
