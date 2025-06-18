import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import CouplesGallery from './pages/CouplesGallery'
import SoloGallery from './pages/SoloGallery'
import Upload from './pages/UploadPage'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <Router>
      {/* Navbar component with authentication state passed as prop */}
      <Navbar isAuthenticated={isAuthenticated} />
        
      <div className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/couples" element={<CouplesGallery />} />
          <Route path="/solo" element={<SoloGallery />} />
          {/* Protected route - only accessible when authenticated */}
          <Route 
            path="/upload" 
            element={isAuthenticated ? <Upload /> : <Login setIsAuthenticated={setIsAuthenticated} />} 
          />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
