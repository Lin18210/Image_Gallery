import React from 'react'

function Login({ setIsAuthenticated }) {
  const handleLogin = () => {
    // This is just a mock login for testing
    setIsAuthenticated(true)
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Click to Login
      </button>
    </div>
  )
}

export default Login
