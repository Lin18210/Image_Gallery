import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated }) => {
  return (
    <nav className="bg-pink-400 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <Link to="/" className="text-xl font-bold">
            Image Gallery
          </Link>
          
          {/* Navigation Links */}
          <div className="flex space-x-10">
            <Link to="/" className="hover:text-gray-300 hover:scale-125 hover:underline transition-transform duration-400">
              Home
            </Link>
            <Link to="/couples" className="hover:text-gray-300 hover:scale-125 hover:underline transition-transform duration-400">
            Us ❤️
            </Link>
            <Link to="/solo" className="hover:text-gray-300 hover:scale-125 hover:underline transition-transform duration-400">
            Only You ❤️
            </Link>
            
            {/* Conditionally render Upload link based on authentication */}
            {isAuthenticated && (
              <Link to="/upload" className="hover:text-gray-300 hover:scale-125 hover:underline transition-transform duration-400">
                Upload Photo
              </Link>
            )}
            
            {/* Authentication Links */}
            {isAuthenticated ? (
              <button className="hover:text-gray-300 hover:scale-125 hover:underline transition-transform duration-400">
                Logout
              </button>
            ) : (
              <div className="flex space-x-4">
                <Link to="/login" className="hover:text-gray-300 hover:scale-125 hover:underline transition-transform duration-400">
                  Login
                </Link>
                <Link to="/register" className="hover:text-gray-300 hover:scale-125 hover:underline transition-transform duration-400">
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