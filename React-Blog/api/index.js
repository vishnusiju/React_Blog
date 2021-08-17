const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/Posts")

dotenv.config();
app.use(express.json());     //we can send any json

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("connected to mongoo"))
  .catch((err) => console.log(err));

  app.use("/api/auth", authRoute);
  app.use("/api/posts", postRoute)


app.listen("5000", () => {
  console.log("Backend is running....")
})




































// var express = require('express');
// var app = express();

// const dotenv = require('dotenv');
// const mongoose = require('mongoose');
// const authRoute = require('./routes/auth');

// dotenv.config();
// app.use(express.json());

// //mongo connection
// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify:true
//   })
//   .then(console.log("Connected to MongoDB"))
//   .catch((err) => console.log(err));

//   app.use("/api/auth", authRoute);



// app.listen("8000", () => {
//     console.log('Backend is running...')
// });