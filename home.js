const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8000
const path = require('path');

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'html', '/home.html'));
  });
  
// Profile page route
app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'profile.html'));
});

// Comu page route
app.get('/comu', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'comu.html'));
});

// Portfolio page route
app.get('/portfolio', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'portfolio.html'));
});

// Jobs page route
app.get('/jobs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'jobs.html'));
});

// Setting page route
app.get('/setting', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'setting.html'));
});



app.listen(port, () => {
    console.log(`Server is running on port: $(port)`);
})