import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const {isMenuOpen, setIsMenuOpen} = useState(false);
    const {isAuthenticated} = useContext(AuthContext) || {isAuthenticated: false};

    return (
        <nav className='bg-gray-800 text-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>

                    {/*Logo and Site Name*/}
                    <div className='flex items-center'>
                        <Link>Gallery With You :3</Link>
                    </div>

                    {/*Desktop Menu*/}
                    <div className='hidden md-block'>
                        <div className='ml-10 flex items-baseline space-x-4'>
                            <Link to='/' className='px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700'>Home</Link>
                            <Link to='/couples' className='x-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700'>Us 👩‍❤️‍👨</Link>
                            <Link to="/solo" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Only You❤️</Link>
                            {/* Only show upload option for authenticated users */}
                            {isAuthenticated && (
                                <Link to='/upload' className='px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700'>Upload Photo</Link>
                            )}
                            {isAuthenticated ? (
                                <Link to='/profile' className='px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700'>Profile</Link>
                            ) : (
                                <Link to='/login' className='px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700'>Login</Link>
                            )}
                        </div>
                    </div>

                    {/* Mobile menu button*/}
                    <div className='md-hidden'>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none'>
                            <svg 
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}