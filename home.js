const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8000
const path = '/home.html'

// sendFile will go here
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'home'));
  });

app.listen(port, () => {
    console.log(`Server is running on port: $(port)`);
})