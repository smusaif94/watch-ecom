/**
 * AUTHENTICATION API - This file handles admin login
 * 
 * Purpose:
 * - Admin login process (POST)
 * - JWT token generation
 * - Token verification (to be added in future)
 * 
 * Azure Mapping:
 * - This file will be deployed as separate function in Azure Functions  
 * - URL will be: https://your-function-app.azurewebsites.net/api/auth
 * 
 * Security Features:
 * - Password hashing (need to use bcrypt)
 * - JWT token generation 
 * - Session management
 * - Rate limiting (to be added in future)
 * 
 * Environment Variables Required:
 * - JWT_SECRET (set in Azure App Settings)
 * - ADMIN_USERNAME (set in Azure App Settings) 
 * - ADMIN_PASSWORD_HASH (set in Azure App Settings)
 */

module.exports = async function (context, req) {
  const method = req.method; // Check HTTP method

  // POST request - Admin login process
  if (method === "POST") {
    const { username, password } = req.body; // Get credentials from request body

    // Input validation
    if (!username || !password) {
      context.res = {
        status: 400, // Bad Request
        body: { error: "Both username and password are required" },
      };
      return;
    }

    // Sample admin credentials (In Production use environment variables)
    const adminUsername = "admin";
    const adminPassword = "password123";
    
    // TODO: In production follow these steps:
    // 1. Get admin credentials from environment variables
    // 2. Hash password with bcrypt and compare  
    // 3. Generate JWT token
    // 4. Log login activity in database

    // Credentials verification
    if (username === adminUsername && password === adminPassword) {
      // Login successful
      context.res = {
        status: 200, // Success response
        body: { 
          message: "Login successful",
          token: "sample-jwt-token", // In production generate actual JWT token
          user: {
            username: username,
            role: "admin",
            loginTime: new Date().toISOString()
          }
        },
      };
    } else {
      // Login failed
      context.res = {
        status: 401, // Unauthorized
        body: { error: "Invalid credentials" },
      };
    }
  } 
  // If any other method is used, return error
  else {
    context.res = {
      status: 405, // Method Not Allowed
      body: { error: "Method not allowed" },
    };
  }
};
