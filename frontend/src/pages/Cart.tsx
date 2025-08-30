import React, { useEffect, useState } from 'react';

/**
 * CART PAGE - Shopping cart for selected watches
 * 
 * Purpose:
 * - Show all watches added to cart
 * - Allow quantity modification of items
 * - Display total price calculation
 * - Provide checkout navigation
 * 
 * Cart Management:
 * - Use local storage for cart data persistence
 * - Update quantities with real-time price calculation
 * - Remove items from cart functionality
 * 
 * Features to Add:
 * - Save for later functionality
 * - Coupon code application
 * - Shipping calculator
 * - Related products suggestions
 * - Guest checkout option
 */

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('watchCart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Calculate total when cart changes
  useEffect(() => {
    const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(totalAmount);
  }, [cartItems]);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      );
      localStorage.setItem('watchCart', JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const removeItem = (id: string) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.filter(item => item.id !== id);
      localStorage.setItem('watchCart', JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Your Cart</h2>

      {/* Cart Items */}
      {cartItems.length > 0 ? (
        cartItems.map(item => (
          <div key={item.id} className="mb-4 p-4 border rounded-lg shadow-sm bg-gray-50">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">{item.name} - ${item.price}</span>
              <div className="flex items-center">
                <button
                  className="bg-gray-300 px-3 py-1 rounded-full text-gray-600 hover:bg-gray-400 focus:outline-none"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  -
                </button>
                <span className="mx-3 text-gray-800 font-semibold">{item.quantity}</span>
                <button
                  className="bg-gray-300 px-3 py-1 rounded-full text-gray-600 hover:bg-gray-400 focus:outline-none"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </button>
                <button
                  className="ml-4 text-red-500 hover:text-red-700 focus:outline-none"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      )}

      {/* Total Calculation */}
      <div className="border-t pt-4 mb-6">
        <div className="flex justify-between text-lg font-semibold text-gray-800">
          <span>Total:</span>
          <span>${total}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <button
        className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 focus:outline-none w-full"
        onClick={() => {
          window.location.href = '/checkout';
        }}
        disabled={cartItems.length === 0}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
