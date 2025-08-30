/**
 * MAIN APP COMPONENT - This is the main application entry point
 * 
 * Purpose:
 * - Define overall app layout (header, main content, footer)
 * - Create navigation bar
 * - Integrate routing system
 * 
 * Tailwind Classes Used:
 * - min-h-screen: Full height screen coverage
 * - bg-gray-100: Light gray background
 * - shadow: Drop shadow effects
 * 
 * Components:
 * - Header: Navigation and branding
 * - Main: Page content area 
 * - Footer: Copyright information
 */

import AppRoutes from './routes'; // Import routing component
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100"> {/* Full screen container */}
      
      {/* HEADER SECTION - Navigation and branding */}
      <header className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-50">
        {/* Brand logo/name */}
        <h1 className="text-2xl font-bold text-blue-600">Watch E-Commerce</h1>
        
        {/* Navigation menu */}
        <nav className="space-x-4 hidden md:flex">
          <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="/shop" className="text-gray-700 hover:text-blue-600">Shop</a>
          <a href="/cart" className="text-gray-700 hover:text-blue-600">Cart</a>
          <a href="/login" className="text-gray-700 hover:text-blue-600">Login</a>
          <a href="/admin" className="text-gray-700 hover:text-blue-600">Admin</a>
        </nav>

        {/* Mobile menu */}
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>
      
      {/* MAIN CONTENT AREA - All pages render here */}
      <main className="p-4">
        <AppRoutes /> {/* All page routes load here */}
      </main>
      
      {/* FOOTER SECTION - Copyright and company info */}
      <footer className="bg-white shadow p-4 text-center mt-8">
        &copy; {new Date().getFullYear()} Watch E-Commerce
      </footer>
    </div>
  );
}

export default App;
