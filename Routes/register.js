const router = express.Router();
var bodyParser = require('body-parser');
var express = require('express');
var navigator = require('jzz');
var app = express();

app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extend:true}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

app.get('/', function(req, res){
    res.render("index");
});

//This reponds a post request for the login page
app.post('/login', function (req, res) {
    console.log("Got a POST request for the login");
    var data = {
        "email": req.body.email,
        "password": req.body.password
    };

    console.log(data);

    //Data insertion code
    var MongoClient = require('mongodb').MongoClient;
    var url = "";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("college");
        var query = { email: data.email };
        dbo.collection("user").find(query).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            if(result[0].password == data.password)


 res.redirect('dashboard.html');
            else


 res.redirect('login-error.html');
            db.close();
        });
    });

});

router.get('/test', function(req, res) {
    res.sendfile("/Register/view/register.js")
  });

module.exports = router;