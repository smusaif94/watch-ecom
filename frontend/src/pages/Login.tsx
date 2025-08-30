/**
 * LOGIN PAGE - Admin authentication for dashboard access
 * 
 * Purpose:
 * - Provide admin login form for dashboard access
 * - Authenticate users with JWT tokens
 * - Redirect to admin dashboard on successful login
 * - Handle login errors and validation
 * 
 * Authentication Flow:
 * - User enters email/username and password
 * - Send credentials to /api/auth endpoint
 * - Receive JWT token on successful authentication
 * - Store token in localStorage for future requests
 * - Redirect to admin dashboard
 * 
 * Security Features:
 * - Password field masking
 * - Client-side form validation
 * - Server-side credential verification
 * - JWT token expiration handling
 * - Rate limiting for failed attempts
 * 
 * Features to Add:
 * - Forgot password functionality
 * - Remember me checkbox
 * - Two-factor authentication
 * - Social login options (Google, Facebook)
 * - Account lockout after failed attempts
 */

const Login = () => {
  // TODO: Need state for form data and authentication
  // const [credentials, setCredentials] = useState({
  //   email: '',
  //   password: ''
  // });
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState('');

  // TODO: Handle form submission and authentication
  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError('');
  //   
  //   try {
  //     const response = await fetch('/api/auth', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(credentials)
  //     });
  //     
  //     const result = await response.json();
  //     
  //     if (response.ok && result.token) {
  //       localStorage.setItem('adminToken', result.token);
  //       window.location.href = '/admin';
  //     } else {
  //       setError(result.message || 'Invalid credentials');
  //     }
  //   } catch (error) {
  //     setError('Login failed. Please try again.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Login / Signup</h2>
      
      {/* Email input field */}
      <input 
        type="email" 
        placeholder="Email" 
        className="w-full mb-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
      />
      
      {/* Password input field */}
      <input 
        type="password" 
        placeholder="Password" 
        className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
      />
      
      {/* Login button */}
      <button 
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        onClick={() => {
          // TODO: Implement authentication with /api/auth
          alert('Login functionality coming soon! Will authenticate admin access to dashboard.');
        }}
      >
        Login
      </button>
      
      {/* Signup link */}
      <p className="mt-2 text-gray-600 text-sm">
        Don't have an account? 
        <a href="#" className="text-blue-600 hover:text-blue-800 ml-1">Sign up</a>
      </p>
      
      {/* Demo credentials for testing */}
      <div className="mt-4 p-3 bg-gray-100 rounded text-sm">
        <p className="font-semibold">Demo Admin Credentials:</p>
        <p>Email: admin@watchstore.com</p>
        <p>Password: admin123</p>
      </div>
    </div>
  );
};

export default Login;
