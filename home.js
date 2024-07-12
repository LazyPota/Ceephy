const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8000

// sendFile will go here
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'D:\Ceephy Hackathon\home.html'));
  });

app.listen(port, () => {
    console.log(`Server is running on port: $(port)`);
})