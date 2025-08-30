/**
 * ORDERS API - Azure Function
 *
 * Endpoints:
 * - POST: Create new order
 * - GET: Get order by ID
 * - PUT: Update order status (admin)
 */

module.exports = async function (context, req) {
  switch (req.method) {
    case 'POST':
      // TODO: Create new order
      context.res = { status: 201, body: { message: 'Order created' } };
      break;
    case 'GET':
      // TODO: Get order by ID
      context.res = { status: 200, body: { order: null } };
      break;
    case 'PUT':
      // TODO: Update order status
      context.res = { status: 200, body: { message: 'Order updated' } };
      break;
    default:
      context.res = { status: 405, body: 'Method Not Allowed' };
  }
};
