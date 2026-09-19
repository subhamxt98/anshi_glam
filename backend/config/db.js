// ============================================
// ISHANI COSMETICS — DATABASE CONNECTION
// Location: backend/config/db.js
// ============================================

const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    })

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`)
    console.log(`📦 Database: ${conn.connection.name}`)
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`)
    process.exit(1)
  }
}

// Connection events
mongoose.connection.on('connected', () => {
  console.log('🔗 Mongoose connected to DB')
})

mongoose.connection.on('error', (err) => {
  console.error('⚠️ Mongoose error:', err.message)
})

mongoose.connection.on('disconnected', () => {
  console.log('🔌 Mongoose disconnected')
})

module.exports = connectDB