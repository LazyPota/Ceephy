const express =  require("express");
const cors = require("cors");
const app = express();
app.use(cors())
require("dotenv").config();
const port = process.env.PORT || 8000
const {readdirSync} = require("fs")

readdirSync("./Routes", "./Home").map((file)=>app.use("/",require("./Routes"+file)))

app.get("/", (req,res) => {
    res.render('home');
})

app.get("/home", home);
app.get("/register", register)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})