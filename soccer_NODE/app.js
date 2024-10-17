// importation module express
const express = require("express");
// import module body-parser
const bodyParser = require("body-parser");
// import module mongoose
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/MernSoccer");

//********** */ import routes start ***********
const matchRouter = require("./routes/match");
const teamRouter = require("./routes/team");
const playerRouter = require("./routes/player");
const userRouter = require("./routes/user");

//********** */ import routes end ***********

// creation app express
const app = express();

// bodyParser configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );

  next();
});

app.use("/api", matchRouter);
app.use("/api", teamRouter);
app.use("/api", playerRouter);
app.use("/api", userRouter);

// export app
module.exports = app;
