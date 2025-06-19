import { useState, useEffect } from 'react';

const CouplesGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/images?category=couples');
        
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        
        const data = await response.json();
        setImages(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching images:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchImages();
  }, []);
  
  if (loading) {
    return <div className="text-center py-10">Loading images...</div>;
  }
  
  if (error) {
    return <div className="text-center py-10 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Couples Gallery</h1>
      <p className="mb-6">Browse our collection of beautiful couple photographs.</p>
      
      {images.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          No images found in this category yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img 
                src={`http://localhost:5000${image.url}`} 
                alt={image.title} 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium">{image.title}</h3>
                <p className="text-sm text-gray-500">By {image.user.name}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CouplesGallery;