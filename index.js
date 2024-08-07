const express = require("express");
const cors = require("cors");
const { readdirSync } = require("fs");
const app = express();
const port = process.env.PORT || 8000
require("dotenv").config();



app.use(express.static("public"))
app.use(require('htmlRoutes\home.js')); 

app.listen (port, () => {
    console.log(`Server is running on port: $(port)`)
})