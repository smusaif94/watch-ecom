import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

/**
 * PRODUCT DETAILS PAGE - Individual watch detailed information
 * 
 * Purpose:
 * - Show complete details of specific watch
 * - Display large image gallery
 * - Provide Add to Cart functionality
 * - Suggest related products
 * 
 * URL Pattern: /product/:id
 * - Need to fetch specific watch using :id parameter
 * 
 * API Integration:
 * - Need to fetch data from /api/watches/:id for specific watch
 * - Need to integrate with Cart API
 * 
 * Features to Add:
 * - Image zoom functionality
 * - Customer reviews section
 * - Quantity selector
 * - Specifications table
 * - Social share buttons
 * - Recently viewed products
 */

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  specifications: string[];
  reviews: { author: string; comment: string }[];
}

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/watches/${id}`)
      .then(res => res.json())
      .then((data: Product) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  const addToCart = () => {
    if (!product) return;
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
    };
    // TODO: Replace with API call or local storage logic
    console.log('Added to cart:', cartItem);
    alert('Added to cart!');
  };

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
      {/* Image Gallery */}
      <div className="mb-4">
        {product.images.length > 0 ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-60 object-cover rounded"
          />
        ) : (
          <img
            src="https://via.placeholder.com/400"
            alt="Placeholder"
            className="w-full h-60 object-cover rounded"
          />
        )}
      </div>

      {/* Product Information */}
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-lg font-semibold mb-4">${product.price}</p>

      {/* Quantity Selector */}
      <div className="mb-4">
        <label htmlFor="quantity" className="mr-2">Quantity:</label>
        <input
          id="quantity"
          type="number"
          value={quantity}
          onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          className="border rounded px-2 py-1 w-16"
        />
      </div>

      {/* Add to Cart Button */}
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={addToCart}
      >
        Add to Cart
      </button>

      {/* Specifications */}
      {product.specifications && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Specifications</h3>
          <ul className="text-gray-700">
            {product.specifications.map((spec: string, index: number) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Reviews Section */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Customer Reviews</h3>
        {product.reviews.length > 0 ? (
          <ul className="text-gray-700">
            {product.reviews.map((review: { author: string; comment: string }, index: number) => (
              <li key={index} className="mb-2">
                <strong>{review.author}:</strong> {review.comment}
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
