import { useState, useEffect } from 'react';

const SoloGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/images?category=solo');
        
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
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">My SweetHeart ❤️</h1>
      
      {images.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          No images found in this category yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <img 
                src={`http://localhost:5000${image.url}`} 
                alt={image.title} 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{image.title}</h3>
                <p className="text-sm text-gray-500">By {image.user.name}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SoloGallery;