import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated }) => {
  return (
    <nav className="bg-pink-500 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <Link to="/" className="text-xl font-bold">
            Image Gallery
          </Link>
          
          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-gray-300 transition duration-300">
              Home
            </Link>
            <Link to="/couples" className="hover:text-gray-300 transition duration-300">
              Couples Gallery
            </Link>
            <Link to="/solo" className="hover:text-gray-300 transition duration-300">
              Solo Gallery
            </Link>
            
            {/* Conditionally render Upload link based on authentication */}
            {isAuthenticated && (
              <Link to="/upload" className="hover:text-gray-300 transition duration-300">
                Upload Photo
              </Link>
            )}
            
            {/* Authentication Links */}
            {isAuthenticated ? (
              <button className="hover:text-gray-300 transition duration-300">
                Logout
              </button>
            ) : (
              <div className="flex space-x-4">
                <Link to="/login" className="hover:text-gray-300 transition duration-300">
                  Login
                </Link>
                <Link to="/register" className="hover:text-gray-300 transition duration-300">
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