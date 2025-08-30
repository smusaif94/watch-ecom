/**
 * WatchProduct Model - Mongoose Schema
 *
 * Fields:
 * - id, name, slug, description, price, originalPrice, discount, category, brand
 * - features[], specifications{}, materials[], images[], stockQuantity, warranty, weight
 * - inStock, isNewArrival, createdAt, updatedAt
 */

const mongoose = require('mongoose');

const WatchProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: String,
  price: { type: Number, required: true },
  originalPrice: Number,
  discount: Number,
  category: String,
  brand: String,
  features: [String],
  specifications: { type: Object },
  materials: [String],
  images: [String],
  stockQuantity: { type: Number, default: 0 },
  warranty: String,
  weight: Number,
  inStock: { type: Boolean, default: true },
  isNewArrival: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('WatchProduct', WatchProductSchema);
