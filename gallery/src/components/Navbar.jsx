import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated }) => {
  return (
    <nav className="bg-pink-400 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <Link to="/" className="text-xl font-bold hover:scale-125 transition-transform duration-400">
          <img src="src/assets/Us.jpg" alt="Couple" className="w-20 h-20 rounded-full mb-2 object-cover" />
          </Link>
          
          {/* Navigation Links */}
          <div className="flex space-x-10">
            <Link to="/" className="text-xl font-serif hover:text-pink-600 hover:scale-125 hover:underline transition-delay duration-400">
              Home
            </Link>
            <Link to="/couples" className="text-xl font-serif hover:text-pink-600 hover:scale-125 hover:underline transition-transform duration-400">
            Us ❤️
            </Link>
            <Link to="/solo" className="text-xl font-serif hover:text-pink-600 hover:scale-125 hover:underline transition-transform duration-400">
            Only You ❤️
            </Link>
            
            {/* Conditionally render Upload link based on authentication */}
            {isAuthenticated && (
              <Link to="/upload" className="text-xl hover:text-pink-600 hover:scale-125 hover:underline transition-transform duration-400">
                Upload Photo
              </Link>
            )}
            
            {/* Authentication Links */}
            {isAuthenticated ? (
              <button className="text-xl hover:text-pink-600 hover:scale-125 hover:underline transition-transform duration-400">
              Logout
              </button>
            ) : (
              <div className="flex space-x-4">
                <Link to="/login" className="text-xl hover:text-pink-600 hover:scale-125 hover:underline transition-transform duration-400">
                  Login
                </Link>
                <Link to="/register" className="text-xl hover:text-pink-600 hover:scale-125 hover:underline transition-transform duration-400">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;