/**
 * RAZORPAY WEBHOOK API - Azure Function
 *
 * Endpoint:
 * - POST: Handle Razorpay payment webhook
 */

module.exports = async function (context, req) {
  if (req.method === 'POST') {
    // TODO: Verify Razorpay signature and update order status
    context.res = { status: 200, body: { message: 'Webhook received' } };
  } else {
    context.res = { status: 405, body: 'Method Not Allowed' };
  }
};
