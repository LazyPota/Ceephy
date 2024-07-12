const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8000
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '\Public\HTML\home.html'));
  });

app.listen(port, () => {
    console.log(`Server is running on port: $(port)`);
})