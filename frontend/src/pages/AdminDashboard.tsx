/**
 * ADMIN DASHBOARD - Management interface for watch store operations
 * 
 * Purpose:
 * - Central hub for all administrative functions
 * - Watch inventory management (CRUD operations)
 * - Order management and status updates
 * - Sales analytics and reporting
 * - Customer management
 * 
 * Key Features:
 * - Watch inventory: Add, edit, delete watches
 * - Order processing: View orders, update status, track shipments
 * - Analytics: Sales charts, revenue tracking, popular products
 * - Customer support: View customer messages, order history
 * 
 * Authentication Required:
 * - Must be authenticated admin to access
 * - Check for valid JWT token in localStorage
 * - Redirect to login if not authenticated
 * 
 * API Integration:
 * - /api/watches for inventory management
 * - /api/orders for order processing
 * - /api/analytics for dashboard metrics
 * 
 * Features to Add:
 * - Real-time notifications
 * - Bulk operations
 * - Export functionality
 * - Role-based permissions
 * - Activity logs
 */

const AdminDashboard = () => {
  // TODO: Need authentication check
  // useEffect(() => {
  //   const token = localStorage.getItem('adminToken');
  //   if (!token) {
  //     window.location.href = '/login';
  //   }
  // }, []);

  // TODO: Need state for watch inventory
  // const [watches, setWatches] = useState([]);
  // const [loading, setLoading] = useState(true);

  // TODO: Fetch watches from API
  // useEffect(() => {
  //   const fetchWatches = async () => {
  //     try {
  //       const response = await fetch('/api/watches');
  //       const data = await response.json();
  //       setWatches(data);
  //     } catch (error) {
  //       console.error('Failed to fetch watches:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchWatches();
  // }, []);

  // TODO: Handle watch deletion
  // const handleDelete = async (watchId) => {
  //   if (confirm('Are you sure you want to delete this watch?')) {
  //     try {
  //       const response = await fetch(`/api/watches/${watchId}`, {
  //         method: 'DELETE'
  //       });
  //       if (response.ok) {
  //         setWatches(watches.filter(watch => watch.id !== watchId));
  //         alert('Watch deleted successfully!');
  //       }
  //     } catch (error) {
  //       console.error('Delete failed:', error);
  //       alert('Failed to delete watch');
  //     }
  //   }
  // };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
      
      {/* Add New Watch Button */}
      <button 
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4"
        onClick={() => {
          // TODO: Open add watch modal or redirect to add watch page
          alert('Add New Watch feature coming soon! Will open form to add watch details.');
        }}
      >
        Add New Watch
      </button>
      
      {/* Watch Inventory List */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold mb-3">Current Inventory</h3>
        
        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
          <span>Rolex Submariner - $12,000</span>
          <div className="flex space-x-2">
            <button 
              className="text-blue-600 hover:text-blue-800"
              onClick={() => {
                // TODO: Open edit modal for this watch
                alert('Edit functionality coming soon!');
              }}
            >
              Edit
            </button>
            <button 
              className="text-red-600 hover:text-red-800"
              onClick={() => {
                // TODO: Implement actual delete API call
                if(confirm('Are you sure you want to delete Rolex Submariner?')) {
                  alert('Delete functionality coming soon! Will remove from database.');
                }
              }}
            >
              Delete
            </button>
          </div>
        </div>
        
        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
          <span>Omega Speedmaster - $8,500</span>
          <div className="flex space-x-2">
            <button 
              className="text-blue-600 hover:text-blue-800"
              onClick={() => alert('Edit functionality coming soon!')}
            >
              Edit
            </button>
            <button 
              className="text-red-600 hover:text-red-800"
              onClick={() => {
                if(confirm('Are you sure you want to delete Omega Speedmaster?')) {
                  alert('Delete functionality coming soon!');
                }
              }}
            >
              Delete
            </button>
          </div>
        </div>
        
        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
          <span>Tag Heuer Carrera - $5,000</span>
          <div className="flex space-x-2">
            <button 
              className="text-blue-600 hover:text-blue-800"
              onClick={() => alert('Edit functionality coming soon!')}
            >
              Edit
            </button>
            <button 
              className="text-red-600 hover:text-red-800"
              onClick={() => {
                if(confirm('Are you sure you want to delete Tag Heuer Carrera?')) {
                  alert('Delete functionality coming soon!');
                }
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      
      {/* Quick Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4 text-center">
        <div className="bg-blue-50 p-3 rounded">
          <p className="text-sm text-blue-600">Total Watches</p>
          <p className="text-lg font-bold text-blue-800">3</p>
        </div>
        <div className="bg-green-50 p-3 rounded">
          <p className="text-sm text-green-600">Total Value</p>
          <p className="text-lg font-bold text-green-800">$25,500</p>
        </div>
        <div className="bg-purple-50 p-3 rounded">
          <p className="text-sm text-purple-600">Orders</p>
          <p className="text-lg font-bold text-purple-800">12</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
