const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

// POST add item to cart
router.post('/', async (req, res) => {
  try {
    const newItem = new Cart(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
});

// PUT update item quantity
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update item quantity' });
  }
});

// DELETE remove item from cart
router.delete('/:id', async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to remove item from cart' });
  }
});

module.exports = router;
