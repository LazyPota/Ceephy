const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

// Handle registration requests
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  // Create a new registration object
  const registration = {
    name,
    email,
    password
  };

  // Save the registration object to a file
  fs.appendFile('registrations.txt', JSON.stringify(registration) + '\n', (err) => {
    if (err) {
      console.error('Registration failed:', err);
      res.status(500).json({ error: 'Registration failed' });
    } else {
      console.log('Registration successful');
      res.status(201).json({ message: 'Registration successful' });
    }
  });
});

// Start the server
app.listen(3000, () => console.log('Server is running on port 3000'));