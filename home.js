const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8000
const path = require('path');

app.use(express.static("Public"))

app.listen(port, () => {
    console.log(`Server is running on port: $(port)`);
})