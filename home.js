const express = require("express");
const app = express();
const cors = require("cors")
app.use(cors())
require("dotenv").config();
const port = process.env.PORT || 8000

// sendFile will go here
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/home.html'));
  });

  