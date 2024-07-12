const express =  require("express");
const cors = require("cors");
const app = express();
app.use(cors())
require("dotenv").config();
const port = process.env.PORT || 8000
const {readdirSync} = require("fs");

readdirSync("./Routes").map((file)=>app.use("/",require("./Routes"+file)))

app.get("/", (req,res) => {
    res.send("home");
})

app.get("/home", home);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})