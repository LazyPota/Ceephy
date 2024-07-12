const express = require("express");
const app = express();
const cors = require("cors")
app.use(cors())
require("dotenv").config();
const port = process.env.PORT || 8000

app.get("/", (req, res) => {
    res.send("home")
})

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})