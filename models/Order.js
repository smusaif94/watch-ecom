/**
 * Order Model - Mongoose Schema
 *
 * Fields:
 * - id, orderNumber, customer info (name, email, phone, address), items[], subtotal, tax, shipping, total
 * - paymentMethod, paymentId, paymentStatus, orderStatus, notes, trackingNumber, createdAt
 */

const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  orderNumber: { type: String, required: true, unique: true },
  customer: {
    name: String,
    email: String,
    phone: String,
    address: String
  },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'WatchProduct' },
      name: String,
      price: Number,
      quantity: Number
    }
  ],
  subtotal: Number,
  tax: Number,
  shipping: Number,
  total: Number,
  paymentMethod: String,
  paymentId: String,
  paymentStatus: String,
  orderStatus: String,
  notes: String,
  trackingNumber: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
