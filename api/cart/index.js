/**
 * CART API - Azure Function
 *
 * Endpoints:
 * - POST: Add item to cart
 * - PUT: Update item quantity
 * - DELETE: Remove item from cart
 */

module.exports = async function (context, req) {
  switch (req.method) {
    case 'POST':
      // TODO: Add item to cart
      context.res = { status: 201, body: { message: 'Item added to cart' } };
      break;
    case 'PUT':
      // TODO: Update item quantity
      context.res = { status: 200, body: { message: 'Cart updated' } };
      break;
    case 'DELETE':
      // TODO: Remove item from cart
      context.res = { status: 200, body: { message: 'Item removed from cart' } };
      break;
    default:
      context.res = { status: 405, body: 'Method Not Allowed' };
  }
};
