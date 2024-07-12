const express = require("express");
const app = express();
const cors = require("cors")
app.use(cors())
require("dotenv").config();
const port = process.env.PORT || 8000

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
})