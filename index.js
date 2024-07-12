const express = require("express");
const app = express();
const port = process.env.PORT || 8000
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"))
app.use(require('htmlRoutes\home.js')); 

app.listen (port, () => {
    console.log(`Server is running on port: $(port)`)
})