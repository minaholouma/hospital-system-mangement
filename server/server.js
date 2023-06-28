const doctorRoute = require("./routes/doctorRoute");
const treatmentRoute = require("./routes/treatmentRoute");
const userRoute = require("./routes/user");

const globalErrorHandler = require('./controller/error');
require("dotenv").config({ path: "server/config.env" });
const AppError = require('./utils/appError');



const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

const server = express();
const port = process.env.PORT || 3000;
server.use(morgan("dev"));
server.use(cors());

server.use(express.json());

server.use("/doctors", doctorRoute);
server.use("/treatments", treatmentRoute);
server.use("/api/users/auth", userRoute);

server.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
server.use(globalErrorHandler);

mongoose
  .connect("mongodb+srv://mohamed:VSusS0kmpIr2uErv@firstapi.s4gtsfr.mongodb.net/Medilab")
  .then(() => {
    console.log("DataBase connected");
    server.listen(port, () => {
      console.log("I'm waiting to any order");
    });
  })
  .catch((error) => {
    console.log(error);
    console.log("Problem in connection!!!");
  });
