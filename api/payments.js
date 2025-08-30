/**
 * PAYMENTS API - This file handles Stripe payments
 * 
 * Purpose:
 * - Create Stripe checkout session (POST)
 * - Payment verification
 * - Handle webhooks (to be added in future)
 * 
 * Azure Mapping:
 * - This file will be deployed as separate function in Azure Functions
 * - URL will be: https://your-function-app.azurewebsites.net/api/payments
 * 
 * Stripe Integration Steps:
 * 1. Receive amount and currency from frontend
 * 2. Create Stripe checkout session
 * 3. Return session ID
 * 4. Frontend redirects to Stripe checkout page
 * 5. Handle success/cancel pages
 * 
 * Environment Variables Required:
 * - STRIPE_SECRET_KEY (set in Azure App Settings)
 * - STRIPE_PUBLISHABLE_KEY (for frontend)
 * - STRIPE_WEBHOOK_SECRET (for webhook verification)
 */

module.exports = async function (context, req) {
  const method = req.method; // Check HTTP method

  // POST request - Create Stripe payment session
  if (method === "POST") {
    const { amount, currency, orderId, items } = req.body; // Get payment data from request body

    // Input validation
    if (!amount || !currency) {
      context.res = {
        status: 400, // Bad Request
        body: { error: "Amount and currency are required" },
      };
      return;
    }

    // TODO: In production follow these steps:
    // 1. Import Stripe SDK: const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    // 2. Fetch order details from database
    // 3. Create actual Stripe checkout session
    // 4. Set success/cancel URLs
    // 5. Add customer information

    // Sample Stripe checkout session creation
    const sampleSession = {
      id: "cs_test_" + Math.random().toString(36).substr(2, 9), // Random session ID
      object: "checkout.session",
      amount_total: amount * 100, // Stripe amount in paisa/cents
      currency: currency.toLowerCase(),
      customer_email: null,
      payment_status: "unpaid",
      url: "https://checkout.stripe.com/pay/sample-url" // Sample checkout URL
    };

    // Sample response for creating a payment session
    context.res = {
      status: 200, // Success response
      body: { 
        message: "Payment session created successfully",
        sessionId: sampleSession.id,
        checkoutUrl: sampleSession.url,
        orderId: orderId || `WE${Date.now()}`,
        amount: amount,
        currency: currency
      },
    };
  }
  // GET request - Check payment status (to be added in future)
  else if (method === "GET") {
    const { sessionId } = req.query; // Get session ID from query parameter

    if (!sessionId) {
      context.res = {
        status: 400,
        body: { error: "Session ID is required" },
      };
      return;
    }

    // TODO: Fetch actual payment status from Stripe
    context.res = {
      status: 200,
      body: {
        sessionId: sessionId,
        paymentStatus: "paid", // Sample status
        message: "Payment completed successfully"
      },
    };
  }
  // If any other method is used, return error
  else {
    context.res = {
      status: 405, // Method Not Allowed
      body: { error: "Method not allowed" },
    };
  }
};
