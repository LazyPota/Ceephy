const express =  require("express");
const cors = require("cors");
let db;
const connectIDB = () => {

    const request = window.indexedDB.open('todos_db', 1);

    request.addEventListener('upgradeneeded', e => {
        db = e.target.result;

        const objectStore = db.createObjectStore('todos_data', { keyPath: 'id', autoIncrement: true })
        objectStore.createIndex('content', 'content', { unique: false });
    })
    request.addEventListener('error', e => {
        console.log(e.target.errorCode);
    })
    request.addEventListener('success', () => {
        db = request.result;
        getTodos();
    })

}
const app = express();
app.use(cors())
require("dotenv").config();
const port = process.env.PORT || 8000
const {readdirSync} = require("fs")

readdirSync("./Routes").map((file)=>app.use("/",require("./Routes"+file)))

app.get("/", (req,res) => {
    res.redirect("register.html");
})

app.get("/home", home);
app.get("/register", register)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})