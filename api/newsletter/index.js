/**
 * NEWSLETTER API - Azure Function
 *
 * Endpoint:
 * - POST: Email signup
 */

module.exports = async function (context, req) {
  if (req.method === 'POST') {
    // TODO: Add email to newsletter list
    context.res = { status: 200, body: { message: 'Signed up for newsletter' } };
  } else {
    context.res = { status: 405, body: 'Method Not Allowed' };
  }
};
