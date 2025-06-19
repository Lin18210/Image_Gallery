import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!email.trim() || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    setError('');
    setIsLoading(true);
    
    try {
      // Call login function from context
      await login({ email, password });
      navigate('/');
    } catch (err) {
      setError(err.message || 'An error occurred during login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-pink-300 px-4">
      <div className="w-full max-w-md bg-pink-100 p-8 rounded-2xl shadow-xl border border-pink-200">
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-2xl font-extrabold text-pink-900">Sign in</h2>
          <p className="text-base text-pink-600">
            or{' '}
            <Link to="/register" className="text-pink-700 underline hover:text-pink-800">
              create an account
            </Link>
          </p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm mb-4">
            {error}
          </div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            id="email-address"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-pink-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-pink-400"
            placeholder="Email"
          />
          <input
            id="password"
            name="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-pink-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-pink-400"
            placeholder="Password"
          />

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 text-base font-semibold text-white rounded-lg bg-pink-500 hover:bg-pink-600 transition-all ${
              isLoading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;