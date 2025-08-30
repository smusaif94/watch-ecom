/**
 * ORDERS API - This file manages orders data
 * 
 * Purpose:
 * - Create new order (POST)
 * - View orders list (GET) - for Admin
 * - Update order status - to be added in future
 * 
 * Azure Mapping:
 * - This file will be deployed as separate function in Azure Functions
 * - URL will be: https://your-function-app.azurewebsites.net/api/orders
 * 
 * Database Connection:
 * - Currently using sample data
 * - Later need to create orders table in Azure SQL or MongoDB
 * 
 * Payment Integration:
 * - After creating order, need to initiate Stripe payment
 * - After payment success, need to update order status
 */

module.exports = async function (context, req) {
  const method = req.method; // Check HTTP method

  // POST request - create new order
  if (method === "POST") {
    const newOrder = req.body; // Get order data from request body
    
    // Need to add these validations:
    // - Customer details validation
    // - Items availability check
    // - Price calculation
    // - Save to database
    // - Send email notification
    
    // Sample response for creating an order
    context.res = {
      status: 201, // Created response
      body: { 
        message: "Order created successfully", 
        order: {
          ...newOrder,
          orderId: `WE${Date.now()}`, // Generate unique order ID
          status: "pending",           // Initial status
          createdAt: new Date().toISOString()
        }
      },
    };
  } 
  // GET request - return list of all orders (Admin only)
  else if (method === "GET") {
    // Need to check admin authentication here
    
    // Sample response for fetching orders
    context.res = {
      status: 200, // Success response
      body: [
        { 
          id: 1, 
          orderId: "WE1693456789",
          customer: {
            name: "John Doe",
            email: "john@example.com",
            phone: "+91 9876543210"
          },
          items: [
            { name: "Rolex Submariner", quantity: 1, price: 12000 }
          ], 
          total: 12000,
          status: "completed",
          createdAt: "2025-08-30T10:30:00Z"
        },
        { 
          id: 2, 
          orderId: "WE1693456790",
          customer: {
            name: "Jane Smith",
            email: "jane@example.com",
            phone: "+91 9876543211"
          },
          items: [
            { name: "Omega Speedmaster", quantity: 1, price: 8500 }
          ], 
          total: 8500,
          status: "pending",
          createdAt: "2025-08-30T11:00:00Z"
        },
      ],
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
