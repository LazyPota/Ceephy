const path = require("path");
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.sendFile('home.html', {root: path.join(__dirname, 'public\home.html') });
});

router.get('/commu', function(req, res) {
    res.sendFile('commu.html', { root: path.join(__dirname, 'public\commu.html') });
});

router.get('/setting', function(req, res) {
  res.sendFile('setting.html', { root: path.join(__dirname, 'public\commu.html') });
});

router.get('/job', function(req, res) {
  res.sendFile('profile.html', { root: path.join(__dirname, 'public\commu.html') });
});

router.get('/profile', function(req, res) {
  res.sendFile('profile.html', { root: path.join(__dirname, 'public\commu.html') });
});


module.exports = router;