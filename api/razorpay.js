const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// POST create Razorpay order
router.post('/create-order', async (req, res) => {
  try {
    const { amount, currency } = req.body;
    const options = {
      amount: amount * 100, // Convert to smallest currency unit
      currency,
      receipt: `receipt_${Date.now()}`,
    };
    const order = await razorpayInstance.orders.create(options);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create Razorpay order' });
  }
});

// POST Razorpay webhook
router.post('/webhook', async (req, res) => {
  try {
    const { payload } = req.body;
    // TODO: Verify webhook signature and update order status
    res.status(200).json({ message: 'Webhook received' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process webhook' });
  }
});

module.exports = router;
