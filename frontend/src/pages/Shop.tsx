/**
 * SHOP PAGE - Product grid with filters and sorting
 *
 * Purpose:
 * - Display all watches in a grid layout
 * - Allow filtering by price, category, brand
 * - Enable sorting by newest, popular, price
 * - Support pagination or load more
 *
 * Features to Add:
 * - Filter sidebar
 * - Sort dropdown
 * - Pagination controls
 * - Product cards with image, price, and quick view
 */



import React, { useEffect, useState } from 'react';

/**
 * Product type definition for type safety
 */
interface Product {
  _id?: string;
  id?: string;
  slug?: string;
  name: string;
  price: number;
  category?: string;
  brand?: string;
  images?: string[];
}

/**
 * ProductCard - Reusable card for displaying a watch
 */
const ProductCard = ({ product }: { product: Product }) => (
  <div className="bg-white rounded shadow p-4">
    <img src={product.images?.[0] || 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308'} alt={product.name} className="w-full h-40 object-cover mb-2 rounded" />
    <h3 className="font-semibold">{product.name}</h3>
    <p className="text-gray-700">${product.price}</p>
    <a href={`/product/${product._id || product.id || product.slug}`} className="mt-2 inline-block bg-blue-600 text-white px-3 py-1 rounded">View Details</a>
  </div>
);

/**
 * SHOP PAGE - Enhanced with API integration, filter, sort, and comments
 */

const Shop = () => {
  // State for products, loading, error, filter, sort
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [sort, setSort] = useState<string>('newest');
  const [filter, setFilter] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 9;

  // Fetch products from API
  useEffect(() => {
    setLoading(true);
    fetch('/api/products')
      .then(res => res.json())
      .then((data: Product[]) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load products');
        setLoading(false);
      });
  }, []);

  // Filter and sort logic (basic)
  let displayedProducts: Product[] = [...products];
  if (filter) {
    displayedProducts = displayedProducts.filter(p => p.category === filter || p.brand === filter);
  }
  if (sort === 'price-asc') {
    displayedProducts.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    displayedProducts.sort((a, b) => b.price - a.price);
  }

  // Calculate paginated products
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = displayedProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(displayedProducts.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Shop Watches</h2>

      {/* Filter and Sort Controls */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select value={filter} onChange={e => setFilter(e.target.value)} className="border rounded px-3 py-2">
          <option value="">All Categories</option>
          <option value="Luxury">Luxury</option>
          <option value="Sports">Sports</option>
          <option value="Casual">Casual</option>
          {/* Add more categories/brands as needed */}
        </select>
        <select value={sort} onChange={e => setSort(e.target.value)} className="border rounded px-3 py-2">
          <option value="newest">Newest</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      {/* Loading/Error States */}
      {loading && <div className="text-gray-500">Loading products...</div>}
      {error && <div className="text-red-600">{error}</div>}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {paginatedProducts.map(product => (
          <ProductCard key={product._id || product.id || product.slug} product={product} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-1 mx-1 rounded ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Shop;
