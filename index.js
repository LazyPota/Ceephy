const express = require("express");
const app = express();

const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"))
app.use(require('./app/htmlRoutes/home.js')); 

