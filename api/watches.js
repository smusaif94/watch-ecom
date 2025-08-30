/**
 * WATCHES API - This file manages watches (products) data
 * 
 * Purpose: 
 * - List all watches (GET)
 * - Add new watch (POST)
 * - Update watch (PUT) - to be added in future
 * - Delete watch (DELETE) - to be added in future
 * 
 * Azure Mapping:
 * - This file will be deployed as separate function in Azure Functions
 * - URL will be: https://your-function-app.azurewebsites.net/api/watches
 * 
 * Database Connection:
 * - Currently using sample data
 * - Later need to connect Azure SQL or MongoDB
 */

module.exports = async function (context, req) {
  const method = req.method; // Check HTTP method (GET, POST, etc.)

  // GET request - return list of all watches
  if (method === "GET") {
    // Sample response for fetching watches
    // In future, need to fetch actual data from database
    context.res = {
      status: 200, // Success response
      body: [
        { 
          id: 1, 
          name: "Rolex Submariner", 
          price: 12000,
          description: "Luxury dive watch",
          image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
        },
        { 
          id: 2, 
          name: "Omega Speedmaster", 
          price: 8500,
          description: "Professional chronograph",
          image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca"
        },
        { 
          id: 3, 
          name: "Tag Heuer Carrera", 
          price: 5000,
          description: "Racing-inspired timepiece",
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        },
      ],
    };
  } 
  // POST request - add new watch (Admin only)
  else if (method === "POST") {
    const newWatch = req.body; // Get new watch data from request body
    
    // Need to add these validations:
    // - Admin authentication check
    // - Required fields validation
    // - Save to database
    
    context.res = {
      status: 201, // Created response
      body: { 
        message: "Watch added successfully", 
        watch: newWatch 
      },
    };
  } 
  // If any other method is used, return error
  else {
    context.res = {
      status: 405, // Method Not Allowed
      body: "Method not allowed",
    };
  }
};
