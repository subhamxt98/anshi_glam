require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')

const app = express()
connectDB()

app.use(cors({ origin: true, credentials: true }))
app.use(express.json())

// Health
app.get('/', (req, res) => {
  res.json({ success: true, message: '✅ API running' })
})

// Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/payment', require('./routes/payment'))   // ✅ ye add karo

// 404
app.use((req, res) => {
  res.status(404).json({ message: `Route ${req.originalUrl} not found` })
})

// Error
app.use((err, req, res, next) => {
  console.error('❌', err.message)
  res.status(err.statusCode || 500).json({ message: err.message || 'Server Error' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`🚀 Server on http://localhost:${PORT}`)
})