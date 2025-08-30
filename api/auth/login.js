/**
 * AUTH LOGIN API - Azure Function
 *
 * Endpoint:
 * - POST: Admin login
 */

module.exports = async function (context, req) {
  if (req.method === 'POST') {
    // TODO: Authenticate admin and return JWT
    context.res = { status: 200, body: { token: 'jwt_token' } };
  } else {
    context.res = { status: 405, body: 'Method Not Allowed' };
  }
};
