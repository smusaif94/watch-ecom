/**
 * PRODUCTS API - Azure Function
 *
 * Endpoints:
 * - GET: List all products
 * - POST: Create new product (admin)
 * - PUT: Update product (admin)
 * - DELETE: Delete product (admin)
 */

module.exports = async function (context, req) {
  switch (req.method) {
    case 'GET':
      // TODO: Return all products
      context.res = { status: 200, body: [] };
      break;
    case 'POST':
      // TODO: Create new product
      context.res = { status: 201, body: { message: 'Product created' } };
      break;
    case 'PUT':
      // TODO: Update product
      context.res = { status: 200, body: { message: 'Product updated' } };
      break;
    case 'DELETE':
      // TODO: Delete product
      context.res = { status: 200, body: { message: 'Product deleted' } };
      break;
    default:
      context.res = { status: 405, body: 'Method Not Allowed' };
  }
};
