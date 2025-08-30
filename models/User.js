/**
 * User Model (Admin Only) - Mongoose Schema
 *
 * Fields:
 * - id, username, email, password (hashed), role, lastLogin, createdAt
 */

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Hashed password
  role: { type: String, default: 'admin' },
  lastLogin: Date,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
