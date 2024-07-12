const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('https://data.mongodb-api.com/app/data-rncxokh/endpoint/data/v1', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('MongoDB connection error:', error));

const registrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const Registration = mongoose.model('Registration', registrationSchema);

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  const registration = new Registration({ name, email, password });

  registration.save()
    .then(() => res.status(201).json({ message: 'Registration successful' }))
    .catch(error => res.status(500).json({ error: 'Registration failed' }));
});