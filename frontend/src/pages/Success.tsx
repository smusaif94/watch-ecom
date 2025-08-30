/**
 * SUCCESS PAGE - Order confirmation after checkout
 *
 * Purpose:
 * - Show order confirmation message
 * - Display Razorpay transaction ID
 * - Show order summary and tracking info
 *
 * Features to Add:
 * - Order details
 * - Transaction ID display
 * - Track order button
 * - Thank you message
 */

const Success = () => {
  // TODO: Fetch order details and transaction ID from backend
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Order Successful!</h2>
      <p className="mb-2">Thank you for your purchase. Your order has been placed successfully.</p>
      <div className="mb-4 p-4 bg-green-50 rounded">
        <p className="font-semibold">Transaction ID:</p>
        <p className="text-green-800">#RAZORPAY123456</p>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Order Summary</h3>
        <ul className="text-gray-700">
          <li>Rolex Submariner × 1 - $12,000</li>
          <li>Omega Speedmaster × 1 - $8,500</li>
        </ul>
        <p className="mt-2 font-bold">Total: $20,500</p>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Track Order</button>
    </div>
  );
};

export default Success;
