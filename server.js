// Import the ODM
const mongoose = require("mongoose");

// Import logging middleware
const logger = require("morgan");

// Import .ENV library for using environment variables
const dotenv = require("dotenv").config();


const PORT = process.env.PORT || 8080;

// Import Express web server
const express = require("express");

// Import Express router 
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

// Create the web server
const app = express();

// Use logging middleware
app.use(logger("dev"));

// Use body parsing middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Make the "public" folder available to serve static assets to clients
app.use(express.static("public"));


// Use express Router routes
app.use(htmlRoutes);
app.use(apiRoutes);

// Connect to DB then start the web server
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }).then(result => {
    console.log("Connected to database");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
  }).catch(err => {
    console.log(err);
  });
  