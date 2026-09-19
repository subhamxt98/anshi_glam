const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../models/User')

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' })

// ===== REGISTER =====
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields required' })
    }

    const exists = await User.findOne({ email })
    if (exists) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const user = await User.create({ name, email, password })

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } catch (err) {
    console.error('Register error:', err.message)
    res.status(500).json({ message: err.message })
  }
})

// ===== LOGIN =====
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password required' })
    }

    const user = await User.findOne({ email }).select('+password')

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } catch (err) {
    console.error('Login error:', err.message)
    res.status(500).json({ message: err.message })
  }
})

module.exports = router