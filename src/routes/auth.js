const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');

const router = express.Router();

const users = [];

router.post('/register', async (req, res) => {
  const { email, password, fullName } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(409).json({ message: 'User already exists' });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = { id: Date.now(), email, fullName, passwordHash };
  users.push(user);

  const token = jwt.sign({ id: user.id, email: user.email }, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn
  });

  return res.status(201).json({
    message: 'User registered successfully',
    token,
    user: { id: user.id, email: user.email, fullName: user.fullName }
  });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((item) => item.email === email);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const isValid = await bcrypt.compare(password, user.passwordHash);
  if (!isValid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn
  });

  return res.json({
    token,
    user: { id: user.id, email: user.email, fullName: user.fullName }
  });
});

module.exports = router;
