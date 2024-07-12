const express = require("express");
const app = express();
const cors = require("cors")
app.use(cors())
require("dotenv").config();
const port = process.env.PORT || 8000

app.get("/", (req, res) => {
    res.redirect("/Home/home.html")
})

export default function handler(request, response) {
    // Use 308 for a permanent redirect, 307 for a temporary redirect
    return response.redirect(300, '/Home/home.html');
  }

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})