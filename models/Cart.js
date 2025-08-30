/**
 * Cart Model (Optional) - Mongoose Schema
 *
 * Fields:
 * - userId, items[], createdAt
 */

const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'WatchProduct' },
      name: String,
      price: Number,
      quantity: Number
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cart', CartSchema);
