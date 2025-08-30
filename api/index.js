/**
 * AZURE FUNCTIONS API ENTRY POINT
 * 
 * Purpose: This is the main entry point for Azure Functions
 * Usage: Map this in Azure Portal as the main function
 * 
 * How it works:
 * 1. Azure Functions automatically detects this file
 * 2. When someone makes an API call, this function runs
 * 3. Returns "API is working!" message in response
 * 
 * For beginners:
 * - This is for testing if API is working or not
 * - Replace this with actual logic in production
 * - context = Azure's built-in object
 * - req = incoming HTTP request
 */

module.exports = async function (context, req) {
  // Create HTTP response object
  context.res = {
    status: 200,           // Success status code (200 = OK)
    body: "API is working!", // Response message shown to user
  };
};
