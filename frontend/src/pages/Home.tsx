/**
 * HOME PAGE COMPONENT - This is the main landing page
 * 
 * Purpose:
 * - Display all available watches
 * - Show basic info in watch cards (name, price, image)
 * - Redirect to product details page
 * 
 * API Integration:
 * - In future, need to fetch data from /api/watches
 * - Currently using sample/static data
 * 
 * Tailwind Classes:
 * - max-w-4xl: Maximum width container
 * - grid-cols-1 md:grid-cols-3: Responsive grid (1 column mobile, 3 desktop)
 * - bg-white: White background for cards
 * - shadow: Card shadow effects
 * - rounded: Rounded corners
 * 
 * Features to Add:
 * - Search functionality
 * - Filter by price/brand
 * - Pagination
 * - Loading states
 */

const Home = () => {
  // TODO: In future, need to make API call here
  // const [watches, setWatches] = useState([]);
  // useEffect(() => {
  //   fetch('/api/watches')
  //     .then(res => res.json())
  //     .then(data => setWatches(data));
  // }, []);

  return (
    <div className="max-w-4xl mx-auto"> {/* Main container */}
      
      {/* Page heading */}
      <h2 className="text-xl font-bold mb-4">Available Watches</h2>
      
      {/* Watches grid - responsive layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Watch Card 1 - Rolex */}
        <div className="bg-white p-4 rounded shadow">
          <img 
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308" 
            alt="Watch" 
            className="w-full h-40 object-cover mb-2 rounded" 
          />
          <h3 className="font-semibold">Rolex Submariner</h3>
          <p className="text-gray-600">$12,000</p>
          <a 
            href="/product/1" 
            className="mt-2 inline-block text-blue-600 hover:underline"
          >
            View Details
          </a>
        </div>

        {/* Watch Card 2 - Omega */}
        <div className="bg-white p-4 rounded shadow">
          <img 
            src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca" 
            alt="Watch" 
            className="w-full h-40 object-cover mb-2 rounded" 
          />
          <h3 className="font-semibold">Omega Speedmaster</h3>
          <p className="text-gray-600">$8,500</p>
          <a 
            href="/product/2" 
            className="mt-2 inline-block text-blue-600 hover:underline"
          >
            View Details
          </a>
        </div>

        {/* Watch Card 3 - Tag Heuer */}
        <div className="bg-white p-4 rounded shadow">
          <img 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
            alt="Watch" 
            className="w-full h-40 object-cover mb-2 rounded" 
          />
          <h3 className="font-semibold">Tag Heuer Carrera</h3>
          <p className="text-gray-600">$5,000</p>
          <a 
            href="/product/3" 
            className="mt-2 inline-block text-blue-600 hover:underline"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
