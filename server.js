// Import the ODM
const mongoose = require("mongoose");

// Import .ENV library for using environment variables
const dotenv = require("dotenv").config();

// Import Express web server
const express = require("express");

// Import Express router 
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

// Create the web server
const app = express();

// Make the "public" folder available to serve static assets to clients
app.use(express.static("publilc"));

// Use express Router routes
app.use(htmlRoutes);
app.use(apiRoutes);

// Connect to DB then start the web server
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ycxmw.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useFindAndModify: false
  }).then(result => {
    console.log(result);
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
  }).catch(err => {
    console.log(err);
  });
  