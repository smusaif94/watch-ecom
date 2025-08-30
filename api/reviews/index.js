/**
 * REVIEWS API - Azure Function
 *
 * Endpoint:
 * - POST: Submit product review
 */

module.exports = async function (context, req) {
  if (req.method === 'POST') {
    // TODO: Save product review
    context.res = { status: 201, body: { message: 'Review submitted' } };
  } else {
    context.res = { status: 405, body: 'Method Not Allowed' };
  }
};
