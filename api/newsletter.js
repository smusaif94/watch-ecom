const express = require('express');
const router = express.Router();
const Newsletter = require('../models/Newsletter');

// POST email signup
router.post('/', async (req, res) => {
  try {
    const newSignup = new Newsletter(req.body);
    await newSignup.save();
    res.status(201).json(newSignup);
  } catch (error) {
    res.status(500).json({ error: 'Failed to sign up for newsletter' });
  }
});

module.exports = router;
