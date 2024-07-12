const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8000
const path = require('path');

// sendFile will go here
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/home.html'));
  });

app.use(express.static("public"))

app.listen(port, () => {
    console.log(`Server is running on port: $(port)`);
})