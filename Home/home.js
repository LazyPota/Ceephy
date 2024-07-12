const express = require("express");
const app = express();
const cors = require("cors")
app.use(cors())
require("dotenv").config();
const port = process.env.PORT || 8000
const {readdirSync} = require("fs")

readdirSync("./").map((file)=>app.use("/",require(file)));

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})