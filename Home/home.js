const express =  require("express");
const cors = require("cors")
const app = express();
app.use(cors())
require('dotenv').config();
const port = process.env.PORT || 8000

app.get("/", (req, res) => {
    res.send("home");
})
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})