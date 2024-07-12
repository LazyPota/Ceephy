const path = require("path");
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.sendFile('home.html', { root: path.join(__dirname, '../public/home.html') });
});

router.get('/survey', function(req, res) {
    res.sendFile('commu.html', { root: path.join(__dirname, '../public/commu.html') });
});


module.exports = router;