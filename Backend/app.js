const express = require('express');
const mongoose = require("mongoose");
var bodyParser = require('body-parser')
const router = require('./src/router');

const app = express();
const cors = require("cors");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Use .env file 
require('dotenv').config()

//Check Mongod server
mongoose
  .connect(process.env.DB_PATH)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch(() => {
    console.error("Failed to connect MongoDB!");
  });

  // open PORT 
app.listen(process.env.PORT , () => {
  console.log("Server is running!");
}); 

//Serve Router
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

app.use("/api", router);