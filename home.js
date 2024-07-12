const express = require("express");
const app = express();
const cors = require("cors")
app.use(cors())
require("dotenv").config();
const port = process.env.PORT || 8000

export default function handler(request, response) {
    // Use 308 for a permanent redirect, 307 for a temporary redirect
    return response.redirect(300, 'home.html');
  }
