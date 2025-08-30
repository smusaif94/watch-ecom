/**
 * RAZORPAY CREATE ORDER API - Azure Function
 *
 * Endpoint:
 * - POST: Create Razorpay order
 */

module.exports = async function (context, req) {
  if (req.method === 'POST') {
    // TODO: Integrate Razorpay SDK and create order
    context.res = { status: 200, body: { orderId: 'razorpay_order_id' } };
  } else {
    context.res = { status: 405, body: 'Method Not Allowed' };
  }
};
