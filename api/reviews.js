const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// POST submit review
router.post('/', async (req, res) => {
  try {
    const newReview = new Review(req.body);
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit review' });
  }
});

module.exports = router;
