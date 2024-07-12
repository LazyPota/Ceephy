const router = express.Router();
var express = require('express');
const button1 = documentquerySelector("#button1")
var check = documentquerySelector("#check")

module.exports = router;

function check() {
  var usrName = document.getElementById('userName').value;
  var usrPw = document.getElementById('userPw').value;

  let stored_users = JSON.parse(localStorage.getItem('users'))
  if(stored_users) {
      for (let u = 0; u < stored_users.length; u++){
          if (usrName == stored_users[u].name && usrPw == stored_users[u].password) {
              alert('You are logged in ' + usrName);
              return location.replace("./index.html");

           }
      }
  } else {
      localStorage.setItem('users', '[]');
  }

  return alert('Access denied. Valid username and password is required.');
}