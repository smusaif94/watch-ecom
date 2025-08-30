/**
 * ROUTING CONFIGURATION - This file defines all page routes
 * 
 * Purpose:
 * - Set up URL-based navigation
 * - Map all pages to different routes
 * - Enable browser routing
 * 
 * React Router Components:
 * - BrowserRouter: Browser URL history management
 * - Routes: Route definitions container
 * - Route: Individual route definition
 * 
 * Page Routes:
 * - / : Home page (watch listings)
 * - /product/:id : Product details page (dynamic ID)
 * - /cart : Shopping cart page
 * - /checkout : Payment checkout page
 * - /login : User login/signup page
 * - /admin : Admin dashboard page
 */

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Import all page components
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import Shop from './pages/Shop';
import Success from './pages/Success';
import About from './pages/About';

const AppRoutes = () => {
  return (
    <Router> {/* Enable browser routing */}
      <Routes> {/* All route definitions */}
        {/* Home page - listing of all watches */}
        <Route path="/" element={<Home />} />
        
        {/* Product details - specific watch detail page */}
        <Route path="/product/:id" element={<ProductDetails />} />
        
        {/* Shopping cart - selected items */}
        <Route path="/cart" element={<Cart />} />
        
        {/* Checkout - payment process */}
        <Route path="/checkout" element={<Checkout />} />
        
        {/* User authentication */}
        <Route path="/login" element={<Login />} />
        
        {/* Admin panel - watch management */}
        <Route path="/admin" element={<AdminDashboard />} />
        
        {/* Shop page - all watches with filters and sorting */}
        <Route path="/shop" element={<Shop />} />
        
        {/* Success page - order confirmation */}
        <Route path="/success" element={<Success />} />
        
        {/* About page - influencer and brand story */}
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
